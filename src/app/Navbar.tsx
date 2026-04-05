"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 h-12 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div className="mx-auto h-full max-w-[980px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="flex flex-row items-center gap-2 text-xs font-normal text-white transition hover:text-white/80"
          >
            <Image alt="" src="/app-icon.png" width={28} height={28} />
            LookForward
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="navbarItems"
            aria-label="Toggle navigation menu"
            className="relative transform rounded-full p-2 text-white transition-colors hover:text-white/80 sm:hidden"
          >
            <span className="relative block h-6 w-6">
              <span
                className={`absolute top-[6px] left-1/2 block h-0.5 w-4 origin-center -translate-x-1/2 rounded-sm bg-current transition duration-150 ease-out ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-[11px] left-1/2 block h-0.5 w-4 origin-center -translate-x-1/2 rounded-sm bg-current transition duration-150 ease-out ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-[16px] left-1/2 block h-0.5 w-4 origin-center -translate-x-1/2 rounded-sm bg-current transition duration-150 ease-out ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <div
            id="navbarItems"
            className={`${menuOpen ? "block" : "hidden"} absolute inset-x-0 top-full space-y-2 px-4 py-2 backdrop-blur-xl sm:static sm:flex sm:space-y-0 sm:space-x-6 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none`}
            style={
              menuOpen
                ? {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "saturate(180%) blur(20px)",
                    WebkitBackdropFilter: "saturate(180%) blur(20px)",
                  }
                : undefined
            }
          >
            <Link
              href="https://ko-fi.com/cfoster5"
              className="block px-1 py-1 text-xs font-normal text-white transition hover:text-white/80"
            >
              Buy Me a Coffee
            </Link>
            <Link
              href="/privacy"
              className="block px-1 py-1 text-xs font-normal text-white transition hover:text-white/80"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
