import Link from "next/link";

const projects = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 사용하여 제작한 개인 포트폴리오 사이트입니다. 반응형 디자인과 다크 모드를 지원합니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "완료",
    github: "#",
    demo: "#",
    image: "🌐",
  },
  {
    title: "블로그 시스템",
    description:
      "MDX를 활용한 정적 블로그 시스템입니다. 마크다운으로 작성된 글을 웹페이지로 변환합니다.",
    tech: ["React", "MDX", "Next.js", "CSS"],
    status: "진행중",
    github: "#",
    demo: "#",
    image: "📝",
  },
  {
    title: "할 일 관리 앱",
    description:
      "React와 로컬 스토리지를 활용한 간단한 할 일 관리 애플리케이션입니다.",
    tech: ["React", "JavaScript", "CSS", "Local Storage"],
    status: "완료",
    github: "#",
    demo: "#",
    image: "✅",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          제가 개발한 프로젝트들을 소개합니다. 각 프로젝트를 통해 새로운 기술을
          배우고 실무 경험을 쌓고 있습니다.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">주요 프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 hover:shadow-lg"
            >
              {/* Project Icon */}
              <div className="text-4xl mb-4">{project.image}</div>

              {/* Project Header */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "완료"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3">
                <Link
                  href={project.github}
                  className="flex-1 px-3 py-2 text-sm text-center bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demo}
                  className="flex-1 px-3 py-2 text-sm text-center bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-lg transition-colors"
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Used */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">사용 기술</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "Git",
            "Vercel",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 text-center rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <span className="font-medium text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200/50 dark:border-blue-800/50">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">더 많은 프로젝트</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            GitHub 방문하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
