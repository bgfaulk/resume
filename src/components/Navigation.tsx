"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/#resume", label: "Resume" },
  { href: "/#portfolio", label: "Initiatives" },
  { href: "/sites", label: "Sites" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] bg-white/90 backdrop-blur-[10px] border-b border-border-light transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold text-text-dark hover:scale-105 transition-transform"
        >
          Brian<span className="text-gradient">Faulk</span>
        </Link>

        <ul
          className={`flex items-center gap-8 list-none max-md:fixed max-md:top-[60px] max-md:left-0 max-md:right-0 max-md:flex-col max-md:bg-white max-md:py-8 max-md:gap-6 max-md:shadow-lg transition-transform max-md:duration-300 ${
            menuOpen ? "max-md:translate-x-0" : "max-md:translate-x-[-100%]"
          }`}
        >
          {navLinks.map((link) => {
            const isHash = link.href.startsWith("/#");
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/sites"
                  ? pathname === "/sites"
                  : false;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium text-[#1e293b] py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full ${
                    isActive ? "after:w-full" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="hidden max-md:flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-text-dark transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span className={`block w-6 h-0.5 bg-text-dark ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-text-dark transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
