import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PosterSize } from "tmdb-ts";
import { tmdb } from "@/lib/tmdb";

const getPerson = async (id: string) => tmdb.people.details(Number(id));

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const person = await getPerson(id);
  const imageUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/${PosterSize.ORIGINAL}${person.profile_path}`
    : undefined;
  return {
    title: person.name,
    description: person.biography,
    openGraph: {
      title: person.name,
      description: person.biography,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function PersonPage({ params }: Props) {
  const { id } = await params;
  const person = await getPerson(id);

  return (
    <main className="bg-neutral-900">
      <div className="container mx-auto min-h-screen px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-start">
          <div className="h-[50vh] flex-shrink-0 overflow-hidden">
            {person.profile_path && (
              <Image
                src={`https://image.tmdb.org/t/p/${PosterSize.ORIGINAL}${person.profile_path}`}
                alt={person.name}
                width={200}
                height={300}
                className="h-full w-auto rounded-lg object-contain shadow-lg"
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-4xl font-bold text-neutral-200">
              {person.name}
            </h1>
            <p className="mt-4 text-lg text-neutral-300">{person.biography}</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`lookforward://person/${id}`}
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
                href={`https://www.themoviedb.org/person/${id}`}
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
    </main>
  );
}
