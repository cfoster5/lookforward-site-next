import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  itunes: { appId: "1492748952" },
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 dark:text-neutral-200">
      {/* Hero Section */}
      <section className="mx-auto max-w-2xl text-center">
        <Image
          src="/app-icon.png"
          alt="LookForward App Icon"
          width={120}
          height={120}
          className="mx-auto"
        />
        <h1 className="mt-6 text-5xl font-bold">LookForward</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          {
            "Your Ultimate Movie & Game Release Tracker! Never miss a release again. LookForward helps you track upcoming movies and video games, so you always know what's next."
          }
        </p>
        <Link
          href="https://apps.apple.com/us/app/lookforward-entertainment/id1492748952?itscg=30200&itsct=apps_box_badge&mttnsubad=1492748952"
          className="mt-8 inline-block px-6 py-3"
        >
          <Image
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1580860800"
            alt="Download on the App Store"
            width={245}
            height={82}
            className="object-contain align-middle"
          />
        </Link>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Simple Discovery</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Use the Find tab to browse posters and search titles easily.
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Details</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Tap on a release to view overview, genres, credits, and trailers.
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Countdown</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Track upcoming movies and games on your personal list with release
            dates.
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Notifications</h3>
          <p className="text-neutral-600 dark:text-gray-300">
            Enable optional push alerts so you never miss a release.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          What Users Are Saying
        </h2>
        <div className="mx-auto max-w-2xl space-y-8">
          <blockquote className="text-xl text-gray-600 italic dark:text-gray-400">
            {
              "“A wonderful app that has helped me keep track of all the games I'm interested in this fall! Plus, gotta love the Dark Mode integration!”"
            }
          </blockquote>
          <blockquote className="text-xl text-gray-600 italic dark:text-gray-400">
            {
              "“This is a super convenient way for me to keep track of movies/games coming out soon that I'm interested in. I'm often googling release dates for things to loosely follow them and know how long until they come out but with this I can just keep everything I want to follow in one list.”"
            }
          </blockquote>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          App Previews
        </h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <Image
            src="/1_Find.png"
            alt="Find tab preview showing movie posters"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
          <Image
            src="/2_Movie.png"
            alt="Movie details preview showing overview and cast"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
          <Image
            src="/3_MovieMedia.png"
            alt="Movie media preview showing trailers and backdrops"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
          <Image
            src="/4_Countdown.png"
            alt="Countdown list preview showing upcoming releases"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
          <Image
            src="/5_Recents.png"
            alt="Recents tab preview showing recently viewed items"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
          <Image
            src="/6_Ratings.png"
            alt="Ratings and reviews preview for a movie"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="mt-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Support LookForward</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {
            "This app is built by a single developer, so please consider a donation if you like what I'm making."
          }
        </p>
        <a
          href="/support"
          className="inline-block rounded-full bg-indigo-700 px-6 py-3 text-white transition hover:bg-indigo-600"
        >
          Support Me on Ko-fi
        </a>
      </section>
    </main>
  );
}
