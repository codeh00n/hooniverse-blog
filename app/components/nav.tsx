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
    <aside className="-ml-[8px] mb-16 tracking-tight" data-oid="uc9c50l">
      <div className="lg:sticky lg:top-20" data-oid="7u9t14m">
        {/* Logo/Brand */}
        <div className="mb-8" data-oid="f5o4-df">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            data-oid="b7v-shp"
          >
            HOONIVERSE
          </Link>
        </div>

        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          data-oid="vpaoexl"
        >
          <div className="flex flex-row space-x-1 pr-10" data-oid="yh283-x">
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
                  data-oid="2c6pl46"
                >
                  <span className="text-sm" data-oid="c.oc11-">
                    {icon}
                  </span>
                  <span className="font-medium" data-oid="3c21rd:">
                    {name}
                  </span>
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                      data-oid="bqjzq:7"
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
