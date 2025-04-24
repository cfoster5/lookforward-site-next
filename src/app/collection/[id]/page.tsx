import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PosterSize, BackdropSize } from "tmdb-ts";
import { tmdb } from "@/lib/tmdb";

const getCollection = async (id: string) =>
  tmdb.collections.details(Number(id));

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const collection = await getCollection(id);
  const imageUrl = collection.poster_path
    ? `https://image.tmdb.org/t/p/${PosterSize.ORIGINAL}${collection.poster_path}`
    : undefined;

  return {
    title: collection.name,
    description: collection.overview,
    icons: {
      icon: imageUrl,
      shortcut: imageUrl,
      apple: imageUrl,
    },
    openGraph: {
      title: collection.name,
      description: collection.overview,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { id } = await params;
  const collection = await getCollection(id);
  const backdropUrl = collection.backdrop_path
    ? `https://image.tmdb.org/t/p/${BackdropSize.ORIGINAL}${collection.backdrop_path}`
    : undefined;

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
              {collection.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/${PosterSize.ORIGINAL}${collection.poster_path}`}
                  alt={collection.name}
                  width={200}
                  height={300}
                  className="h-full w-auto rounded-lg object-contain shadow-lg"
                />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="mb-2 text-4xl font-bold text-neutral-200">
                {collection.name}
              </h1>
              <p className="mt-4 text-lg text-neutral-300">
                {collection.overview}
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`lookforward://collection/${id}`}
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
                  href={`https://www.themoviedb.org/collection/${id}`}
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
