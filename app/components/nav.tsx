"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
    icon: "🏠",
  },
  "/about": {
    name: "About",
    icon: "👤",
  },
  "/projects": {
    name: "Projects",
    icon: "🚀",
  },
  "/contact": {
    name: "Contact",
    icon: "📧",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight" data-oid="34bo6xp">
      <div className="lg:sticky lg:top-20" data-oid="1khiq06">
        {/* Logo/Brand */}
        <div className="mb-8" data-oid="p:1hegl">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            data-oid="n5gymil"
          >
            HOONIVERSE
          </Link>
        </div>

        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          data-oid="3llhb72"
        >
          <div className="flex flex-row space-x-1 pr-10" data-oid="w97ecgg">
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    group relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    }
                  `}
                  data-oid="6_o-g:v"
                >
                  <span className="text-sm" data-oid="5tk1753">
                    {icon}
                  </span>
                  <span className="font-medium" data-oid=":u2d2e7">
                    {name}
                  </span>
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                      data-oid="uv2bexg"
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
