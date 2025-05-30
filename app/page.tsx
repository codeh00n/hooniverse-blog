import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            안녕하세요, 훈입니다! 👋
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            소프트웨어 엔지니어링을 공부하는 한국의 학생으로, 웹과 소프트웨어
            개발에 열정을 가지고 있습니다.
          </p>
        </div>

        {/* Quick intro cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-800/50">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">💻</span>
              </div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                개발자
              </h3>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              웹 개발과 소프트웨어 엔지니어링에 집중하고 있습니다.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border border-purple-200/50 dark:border-purple-800/50">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white text-sm">🎓</span>
              </div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100">
                학생
              </h3>
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              끊임없이 배우고 성장하는 것을 즐깁니다.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">주요 기술</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Python",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">둘러보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/about"
            className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  About
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  저에 대해 더 알아보세요
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/projects"
            className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Projects
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  제가 만든 프로젝트들
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Contact
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  연락하고 싶으시다면
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
