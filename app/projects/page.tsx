import Link from "next/link";

const projects = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 사용하여 제작한 개인 포트폴리오 사이트입니다. 반응형 디자인과 다크 모드를 지원합니다.",
    status: "완료",
    github: "https://github.com/codeh00n",
    demo: "#",
  },
  {
    title: "블로그 시스템",
    description:
      "MDX를 활용한 정적 블로그 시스템입니다. 마크다운으로 작성된 글을 웹페이지로 변환합니다.",
    status: "진행중",
    github: "https://github.com/codeh00n",
    demo: "#",
  },
  {
    title: "Unity 드론 시뮬레이터",
    description:
      "Unity 엔진을 사용하여 제작한 드론 시뮬레이션 프로그램입니다. 물리 기반 드론 조종과 다양한 환경을 체험할 수 있습니다.",
    status: "완료",
    driveLink:
      "https://drive.google.com/drive/folders/1rHhize6eWd5lQdWBhbV53sozMsesRcxS?usp=drive_link",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      {" "}
      <div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">Projects</h1>{" "}
        <p className="text-lg text-[var(--text-secondary)]">
          제가 개발한 프로젝트들을 소개합니다. 각 프로젝트를 통해 새로운 기술을
          배우고 실무 경험을 쌓고 있습니다.
        </p>
      </div>
      {/* Featured Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">주요 프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-[var(--color-1)] border border-[var(--color-3)] hover:border-[var(--color-4)] transition-all duration-200 hover:shadow-lg"
            >
              {/* Project Header */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "완료"
                        ? "bg-[var(--color-2)] text-[var(--color-5)]"
                        : "bg-[var(--color-3)] text-[var(--color-5)]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
              </div>{" "}
              {/* Project Links */}
              <div className="flex space-x-3">
                {project.github && (
                  <Link
                    href={project.github}
                    className="flex-1 px-3 py-2 text-sm text-center text-[var(--text-primary)] bg-[var(--color-2)] hover:bg-[var(--color-3)] rounded-lg transition-colors"
                  >
                    GitHub
                  </Link>
                )}
                {project.driveLink && (
                  <Link
                    href={project.driveLink}
                    className="flex-1 px-3 py-2 text-sm text-center text-[var(--text-primary)] bg-[var(--color-2)] hover:bg-[var(--color-3)] rounded-lg transition-colors"
                  >
                    다운로드
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    className="flex-1 px-3 py-2 text-sm text-center text-[var(--text-primary)] bg-[var(--color-2)] hover:bg-[var(--color-3)] rounded-lg transition-colors"
                  >
                    Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>{" "}
      {/* Call to Action */}
      <div className="p-6 rounded-xl bg-[var(--color-2)] border border-[var(--color-3)]">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            더 많은 프로젝트
          </h3>
          <p className="text-[var(--text-secondary)]">
            GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다.
          </p>
          <Link
            href="https://github.com/codeh00n"
            className="inline-flex items-center px-4 py-2 bg-[var(--color-4)] hover:bg-[var(--color-5)] text-[var(--color-1)] rounded-lg transition-colors"
          >
            GitHub 방문하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
