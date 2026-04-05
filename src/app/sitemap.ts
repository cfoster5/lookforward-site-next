import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.getlookforward.app";

// Regenerate the sitemap at most once per day. TMDB popularity shifts slowly
// enough that daily is plenty, and this keeps build times fast.
export const revalidate = 86400;

type Entry = MetadataRoute.Sitemap[number];

async function getTmdbEntries(): Promise<Entry[]> {
  // Don't block the sitemap on a missing token (e.g. local builds / previews
  // without env). The static routes below will still ship.
  if (!process.env.TMDB_ACCESS_TOKEN) return [];

  try {
    const { tmdb } = await import("@/lib/tmdb");
    const now = new Date();

    // Pull the first few pages (20 results each) of popular + trending.
    // TMDB caps us at 500 pages; we only need a couple hundred URLs to give
    // Google a real crawl surface without blowing the sitemap up.
    const [popPage1, popPage2, trendingWeek, peoplePage1] = await Promise.all([
      tmdb.movies.popular({ page: 1 }),
      tmdb.movies.popular({ page: 2 }),
      tmdb.trending.trending("movie", "week"),
      tmdb.people.popular({ page: 1 }),
    ]);

    const movieIds = new Set<number>();
    for (const m of popPage1.results) movieIds.add(m.id);
    for (const m of popPage2.results) movieIds.add(m.id);
    for (const m of trendingWeek.results) movieIds.add(m.id);

    const movieEntries: Entry[] = Array.from(movieIds).map((id) => ({
      url: `${siteUrl}/movie/${id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    const personEntries: Entry[] = peoplePage1.results.map((p) => ({
      url: `${siteUrl}/person/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

    // Collections are intentionally omitted: TMDB has no "popular collections"
    // endpoint, and fanning out per-movie details calls would slow builds
    // significantly. They'll still be indexed once Google crawls internal
    // links to them.
    return [...movieEntries, ...personEntries];
  } catch (err) {
    // Never fail the build on a transient TMDB error — log and ship the
    // static sitemap. Next will retry on the next revalidation.
    console.error("[sitemap] TMDB fetch failed:", err);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const tmdbEntries = await getTmdbEntries();
  return [...staticEntries, ...tmdbEntries];
}
