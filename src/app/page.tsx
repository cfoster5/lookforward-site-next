import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "Your Ultimate Movie & Game Release Tracker. Never miss a release again. LookForward helps you track upcoming movies and video games, so you always know what's next.";

export const metadata: Metadata = {
  title: "LookForward — Movie & Video Game Release Tracker for iOS",
  description,
  alternates: { canonical: "/" },
  itunes: { appId: "1492748952" },
  openGraph: {
    type: "website",
    title: "LookForward — Movie & Video Game Release Tracker for iOS",
    description,
    url: "/",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "LookForward app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LookForward — Movie & Video Game Release Tracker for iOS",
    description,
    images: ["/app-icon.png"],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "LookForward",
  operatingSystem: "iOS",
  applicationCategory: "EntertainmentApplication",
  description,
  url: "https://apps.apple.com/us/app/lookforward-entertainment/id1492748952",
  installUrl:
    "https://apps.apple.com/us/app/lookforward-entertainment/id1492748952",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Corey Foster",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      {/* Hero — black */}
      <section className="bg-apple-black py-24 text-white">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Image
            src="/app-icon.png"
            alt="LookForward App Icon"
            width={120}
            height={120}
            className="mx-auto"
          />
          <h1
            className="mt-6 font-semibold"
            style={{
              fontSize: "clamp(2rem, 7vw, 3.5rem)",
              lineHeight: 1.07,
              letterSpacing: "-0.28px",
            }}
          >
            LookForward
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-white/80"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.3125rem)",
              lineHeight: 1.19,
              fontWeight: 400,
            }}
          >
            {
              "Your Ultimate Movie & Game Release Tracker! Never miss a release again. LookForward helps you track upcoming movies and video games, so you always know what's next."
            }
          </p>
          <Link
            href="https://apps.apple.com/us/app/lookforward-entertainment/id1492748952?itscg=30200&itsct=apps_box_badge&mttnsubad=1492748952"
            className="mt-8 inline-block"
          >
            <Image
              src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1580860800"
              alt="Download on the App Store"
              width={245}
              height={82}
              className="object-contain align-middle"
            />
          </Link>
        </div>
      </section>

      {/* Screenshots — light gray, full-bleed scroll strip */}
      <section
        id="screenshots"
        className="bg-apple-gray text-apple-near-black py-20"
      >
        <div
          className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-6 sm:px-12 lg:px-24"
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: "1.5rem",
          }}
        >
          {[
            {
              src: "/liquid_glass.png",
              alt: "Find tab preview showing movie posters",
            },
            {
              src: "/reel_insights.png",
              alt: "Movie details preview showing overview and cast",
            },
            {
              src: "/media_showcase.png",
              alt: "Movie media preview showing trailers and backdrops",
            },
            {
              src: "/coming_soon.png",
              alt: "Countdown list preview showing upcoming releases",
            },
            {
              src: "/collections.png",
              alt: "Recents tab preview showing recently viewed items",
            },
            {
              src: "/powerful_discover.png",
              alt: "Ratings and reviews preview for a movie",
            },
          ].map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={300}
              height={600}
              className="flex-shrink-0 rounded-xl"
              style={{
                boxShadow: "3px 5px 30px 0px rgba(0, 0, 0, 0.22)",
                scrollSnapAlign: "center",
              }}
            />
          ))}
        </div>
      </section>

      {/* Reviews — black */}
      <section id="reviews" className="bg-apple-black py-24 text-white">
        <div className="mx-auto max-w-[980px] px-6">
          <h2
            className="mb-12 text-center font-semibold"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              lineHeight: 1.1,
            }}
          >
            What Users Are Saying
          </h2>
          <div className="mx-auto max-w-2xl space-y-12">
            <blockquote
              className="text-white/80"
              style={{
                fontSize: "clamp(1.25rem, 3.5vw, 1.75rem)",
                lineHeight: 1.14,
                letterSpacing: "0.196px",
                fontWeight: 400,
              }}
            >
              {
                "“A wonderful app that has helped me keep track of all the games I'm interested in this fall! Plus, gotta love the Dark Mode integration!”"
              }
            </blockquote>
            <blockquote
              className="text-white/80"
              style={{
                fontSize: "clamp(1.25rem, 3.5vw, 1.75rem)",
                lineHeight: 1.14,
                letterSpacing: "0.196px",
                fontWeight: 400,
              }}
            >
              {
                "“This is a super convenient way for me to keep track of movies/games coming out soon that I'm interested in. I'm often googling release dates for things to loosely follow them and know how long until they come out but with this I can just keep everything I want to follow in one list.”"
              }
            </blockquote>
          </div>
        </div>
      </section>

      {/* Support — light gray */}
      <section
        id="support"
        className="bg-apple-gray text-apple-near-black py-24"
      >
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              lineHeight: 1.1,
            }}
          >
            Support LookForward
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl"
            style={{
              fontSize: "17px",
              lineHeight: 1.47,
              letterSpacing: "-0.374px",
              color: "rgba(0, 0, 0, 0.8)",
            }}
          >
            {
              "This app is built by a single developer, so please consider a donation if you like what I'm making."
            }
          </p>
          <a
            href="https://ko-fi.com/cfoster5"
            className="bg-apple-blue hover:bg-apple-blue-hover mt-8 inline-block rounded-pill px-6 py-3 font-normal text-white transition"
            style={{ fontSize: "17px" }}
          >
            Support Me on Ko-fi
          </a>
        </div>
      </section>
    </>
  );
}
