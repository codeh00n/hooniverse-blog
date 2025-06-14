"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  },
  "/contact": {
    name: "Contact",
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">        <nav
          className="flex flex-row items-center justify-end relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          {/* Navigation Menu */}
          <div className="flex flex-row space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    group relative flex items-center px-3 py-2 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "hover:bg-opacity-10 hover:bg-gray-500"
                    }
                  `}                  style={{
                    backgroundColor: isActive
                      ? "#4A90E2"
                      : "transparent",
                    color: isActive
                      ? "#ffffff"
                      : "#ffffff",
                  }}
                >
                  <span className="font-medium">{name}</span>{" "}                  {isActive && (
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#ffffff" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
