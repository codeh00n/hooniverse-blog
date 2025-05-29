import Link from "next/link";

export default function Page() {
  return (
    <section data-oid="fi82tdz" className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-6" data-oid="p98ldp0">
        <div className="space-y-4" data-oid="qdnbhzn">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-oid="-e_02v2"
          >
            안녕하세요, 훈입니다! 👋
          </h1>
          <p
            className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
            data-oid="com3k.0"
          >
            소프트웨어 엔지니어링을 공부하는 한국의 학생으로, 웹과 소프트웨어
            개발에 열정을 가지고 있습니다.
          </p>
        </div>

        {/* Quick intro cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
          data-oid="7npf8u0"
        >
          <div
            className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-800/50"
            data-oid="jyeex:6"
          >
            <div
              className="flex items-center space-x-3 mb-3"
              data-oid="n6yuvt3"
            >
              <div
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
                data-oid="9f5-c4e"
              >
                <span className="text-white text-sm" data-oid="4naly06">
                  💻
                </span>
              </div>
              <h3
                className="font-semibold text-blue-900 dark:text-blue-100"
                data-oid="h-3cb25"
              >
                개발자
              </h3>
            </div>
            <p
              className="text-sm text-blue-700 dark:text-blue-300"
              data-oid="5su65ll"
            >
              웹 개발과 소프트웨어 엔지니어링에 집중하고 있습니다.
            </p>
          </div>

          <div
            className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border border-purple-200/50 dark:border-purple-800/50"
            data-oid="1xvjb:i"
          >
            <div
              className="flex items-center space-x-3 mb-3"
              data-oid="67bc1rb"
            >
              <div
                className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
                data-oid="yc:6t0q"
              >
                <span className="text-white text-sm" data-oid="g5rdspa">
                  🎓
                </span>
              </div>
              <h3
                className="font-semibold text-purple-900 dark:text-purple-100"
                data-oid="c-7my4b"
              >
                학생
              </h3>
            </div>
            <p
              className="text-sm text-purple-700 dark:text-purple-300"
              data-oid="92ivf3i"
            >
              끊임없이 배우고 성장하는 것을 즐깁니다.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="space-y-4" data-oid="k1b:0xl">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="z9eufr:"
        >
          주요 기술
        </h2>
        <div className="flex flex-wrap gap-2" data-oid="o5qm_69">
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
              data-oid="un-t5xc"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4" data-oid="rx3enzr">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="z.j:7zn"
        >
          둘러보기
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-oid="_9fqjzv"
        >
          <Link
            href="/about"
            className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
            data-oid="yqypd9."
          >
            <div className="flex items-center space-x-3" data-oid="b_f3l6g">
              <span className="text-2xl" data-oid="jadygu_">
                👤
              </span>
              <div data-oid="h1d80-y">
                <h3
                  className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  data-oid="p56xazl"
                >
                  About
                </h3>
                <p
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                  data-oid="wevkqou"
                >
                  저에 대해 더 알아보세요
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/projects"
            className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
            data-oid="t7r7woh"
          >
            <div className="flex items-center space-x-3" data-oid="35t5hak">
              <span className="text-2xl" data-oid="sf39369">
                🚀
              </span>
              <div data-oid="go5a16t">
                <h3
                  className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  data-oid="ef1f01g"
                >
                  Projects
                </h3>
                <p
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                  data-oid="1w1h3_9"
                >
                  제가 만든 프로젝트들
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
            data-oid="kal9:ms"
          >
            <div className="flex items-center space-x-3" data-oid="kohlyqv">
              <span className="text-2xl" data-oid="6xon_xy">
                📧
              </span>
              <div data-oid="prc-v5e">
                <h3
                  className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  data-oid="d7l8ebf"
                >
                  Contact
                </h3>
                <p
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                  data-oid="frm-guv"
                >
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
