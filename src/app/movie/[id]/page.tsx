import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  tagline: string | null;
  release_date: string;
}

async function getMovie(id: string): Promise<Movie> {
  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) {
    throw new Error("TMDB access token not defined");
  }
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return res.json();
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const movie = await getMovie(id);
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : undefined;
  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const movie = await getMovie(id);
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : undefined;
  const year = movie.release_date?.split("-")[0];

  return (
    <main>
      <div
        className="fixed top-0 left-0 h-screen w-full bg-cover bg-center brightness-30"
        style={{
          backgroundImage: backdropUrl ? `url(${backdropUrl})` : undefined,
        }}
      />
      <div className="absolute top-16 right-0 bottom-0 left-0 overflow-y-auto">
        <div className="container mx-auto min-h-screen px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-start">
            <div className="h-[50vh] flex-shrink-0 overflow-hidden">
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="h-full w-auto rounded-lg object-contain shadow-lg"
                />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="mb-2 text-4xl font-bold text-neutral-200">
                {movie.title} {year && `(${year})`}
              </h1>
              {movie.tagline && (
                <p className="mb-4 text-xl text-neutral-300 italic">
                  {movie.tagline}
                </p>
              )}
              <p className="mt-4 text-lg text-neutral-300">{movie.overview}</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`lookforward://movie/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-indigo-700 px-4 py-2 text-white transition hover:bg-indigo-600"
                >
                  Open in LookForward
                </Link>

                <Link
                  href="https://apps.apple.com/app/lookforward-entertainment/id1492748952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-indigo-700 px-4 py-2 text-white transition hover:bg-indigo-600"
                >
                  Get LookForward in the App Store
                </Link>
                <Link
                  href={`https://www.themoviedb.org/movie/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-indigo-700 px-4 py-2 text-white transition hover:bg-indigo-600"
                >
                  View on TMDB
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
