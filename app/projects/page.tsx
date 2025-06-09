import Link from "next/link";

const projects = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 사용하여 제작한 개인 포트폴리오 사이트입니다. 반응형 디자인과 다크 모드를 지원합니다.",
    status: "완료",
    github: "https://github.com/codeh00n",
    demo: "#",
  },  {
    title: "Arcana Rounds",
    description:
      "Unity 엔진을 사용하여 개발중인 액션 RPG 게임입니다. 마법과 전투 시스템을 중심으로 한 라운드 기반 게임플레이를 제공합니다.",
    status: "개발중",
  },  {
    title: "Unity 드론\n시뮬레이터",
    description:
      "Unity 엔진을 사용하여 제작한 드론 시뮬레이션 프로그램입니다. 물리 기반 드론 조종과 다양한 환경을 체험할 수 있습니다.",
    status: "완료",
    driveLink:
      "https://drive.google.com/drive/folders/1rHhize6eWd5lQdWBhbV53sozMsesRcxS?usp=drive_link",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">      <div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)]">Projects</h1>
        <p className="text-lg text-[var(--text-muted)]">
          제가 개발한 프로젝트들을 소개합니다. 각 프로젝트를 통해 새로운 기술을 배우고 개발 역량을 키워가고 있습니다.
        </p>
      </div>
        {/* Featured Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">주요 프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg"
            >
              {/* Project Header */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>                  <span
                    className={`px-2 py-1 text-xs rounded-lg ${
                      project.status === "완료"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : project.status === "개발중"
                        ? "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
                        : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>              {/* Project Links */}
              <div className="flex space-x-3">
                {project.github && (
                  <Link
                    href={project.github}
                    className="flex-1 px-3 py-2 text-sm text-center text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    GitHub
                  </Link>
                )}
                {project.driveLink && (
                  <Link
                    href={project.driveLink}
                    className={`px-3 py-2 text-sm text-center text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors ${
                      project.github || project.demo ? 'flex-1' : 'w-full'
                    }`}
                  >
                    다운로드
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    className="flex-1 px-3 py-2 text-sm text-center text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            더 많은 프로젝트
          </h3>
          <p className="text-[var(--text-muted)]">
            GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다.
          </p>          <Link
            href="https://github.com/codeh00n"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            GitHub 방문하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
