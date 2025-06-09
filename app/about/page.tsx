export default function About() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="mb-8 text-3xl font-bold tracking-tight">About Me</h1>
      </div>

      {/* Personal Introduction */}
      <div className="space-y-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            안녕하세요! 저는 소프트웨어 엔지니어링을 공부하고 있는 한국의
            학생입니다. 웹 개발과 소프트웨어 개발에 깊은 관심을 가지고 있으며,
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 즐깁니다.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">기술 스택</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-neutral-200 dark:border-neutral-700">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-800">
                <th className="px-4 py-2 border-b">분야</th>
                <th className="px-4 py-2 border-b">주요 기술 (Top 3)</th>
                <th className="px-4 py-2 border-b">숙련도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">프론트엔드</td>
                <td className="px-4 py-2 border-b">React, Next.js, Tailwind CSS</td>
                <td className="px-4 py-2 border-b">50%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">백엔드 &amp; 툴</td>
                <td className="px-4 py-2 border-b">Python, Git, Node.js</td>
                <td className="px-4 py-2 border-b">55%</td>
              </tr>
              <tr>
                <td className="px-4 py-2">3D/게임 개발</td>
                <td className="px-4 py-2">Unity, Three.js</td>
                <td className="px-4 py-2">50%</td>
              </tr>
            </tbody>
          </table>
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
              소프트웨어 개발의 기초부터 심화까지, 체계적인 개발 방법론을
              학습하고 있습니다.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-4">
            <h3 className="font-semibold mb-2">개인 프로젝트 개발</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              웹 애플리케이션, Unity 게임, AI 도구 등 다양한 분야의 개발
              프로젝트 경험을 쌓고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
