import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  "/contact": {
    name: "contact",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight" data-oid="34bo6xp">
      <div className="lg:sticky lg:top-20" data-oid="1khiq06">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          data-oid="3llhb72"
        >
          <div className="flex flex-row space-x-0 pr-10" data-oid="w97ecgg">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  data-oid="6_o-g:v"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
