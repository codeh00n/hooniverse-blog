export default function About() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="mb-8 text-3xl font-bold tracking-tight">About Me</h1>
      </div>

      {/* Personal Introduction */}
      <div className="space-y-6">        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-white">
            안녕하세요! 소프트웨어공학과 학부생으로 웹 개발 분야의 전문성을 키워가고 있는 개발자입니다.
          </p>
          <p className="text-lg leading-relaxed text-white">
            학부 과정에서 습득한 이론적 지식을 바탕으로 다양한 개인 프로젝트와 팀 프로젝트를 진행하며 개발 경험을 쌓고 있습니다. 새로운 기술을 학습하고 사용자 중심의 서비스를 만드는 일에 열정을 가지고 있으며, 지속적인 성장을 통해 더 나은 개발자가 되고자 합니다.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">기술 스택</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">
              Frontend
            </h3>
            <div className="space-y-3">
              {[
                { name: "React", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "TypeScript", level: 75 },
                { name: "Tailwind CSS", level: 90 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-neutral-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-purple-600 dark:text-purple-400">
              Backend & Tools
            </h3>
            <div className="space-y-3">
              {[
                { name: "Node.js", level: 70 },
                { name: "Python", level: 75 },
                { name: "Git", level: 85 },
                { name: "Database", level: 65 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-neutral-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>      </div>

      {/* Algorithm Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">알고리즘</h2>
        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🧮</div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">백준 온라인 저지</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                알고리즘 문제 해결을 통해 논리적 사고력과 프로그래밍 실력을 향상시키고 있습니다.
              </p>
              <a
                href="https://solved.ac/profile/ghdtjr9ns"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
              >
                백준 프로필 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">관심사</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "🌐",
              title: "웹 개발",
              description: "현대적이고 반응형인 웹 애플리케이션 개발",
            },
            {
              icon: "🤖",
              title: "AI 활용",
              description: "AI 도구들을 활용한 개발과 창작 활동",
            },
            {
              icon: "🎮",
              title: "게임 개발",
              description: "Unity를 활용한 2D/3D 게임 개발",
            },
          ].map((interest, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="text-3xl mb-3">{interest.icon}</div>
              <h3 className="font-semibold mb-2">{interest.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Experience */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">학습 여정</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-6 py-4">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold">소프트웨어 엔지니어링 전공</h3>
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                현재
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              컴퓨터 과학의 기초부터 실무까지, 체계적인 소프트웨어 개발 방법론을
              학습하고 있습니다.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-4">
            <h3 className="font-semibold mb-2">개인 프로젝트 개발</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              웹 애플리케이션, Unity 게임, AI 도구 활용 프로젝트 등 다양한
              분야의 개발을 통해 실무 경험을 쌓고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
