export default function About() {
  return (
    <section className="space-y-8" data-oid="xeo1c3y">
      <div data-oid="khyc_v0">
        <h1
          className="mb-8 text-3xl font-bold tracking-tight"
          data-oid="yf88ha3"
        >
          About Me
        </h1>
      </div>

      {/* Personal Introduction */}
      <div className="space-y-6" data-oid=":x1iik2">
        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          data-oid="oiw8xo0"
        >
          <p
            className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
            data-oid="uy6l1oj"
          >
            안녕하세요! 저는 소프트웨어 엔지니어링을 공부하고 있는 한국의
            학생입니다. 웹 개발과 소프트웨어 개발에 깊은 관심을 가지고 있으며,
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 즐깁니다.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6" data-oid="2ojmfn.">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="ch8lomq"
        >
          기술 스택
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="4bx4.w2"
        >
          <div className="space-y-4" data-oid="xhwn12.">
            <h3
              className="text-lg font-medium text-blue-600 dark:text-blue-400"
              data-oid=":7x1ecl"
            >
              Frontend
            </h3>
            <div className="space-y-3" data-oid="5.9c35_">
              {[
                { name: "React", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "TypeScript", level: 75 },
                { name: "Tailwind CSS", level: 90 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2" data-oid=".pr:l1s">
                  <div className="flex justify-between" data-oid="764.gbb">
                    <span className="text-sm font-medium" data-oid="roztkrt">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-neutral-500"
                      data-oid="d8difu_"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2"
                    data-oid="lanjqp3"
                  >
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                      data-oid="6e8zqwg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4" data-oid="5ri:ne5">
            <h3
              className="text-lg font-medium text-purple-600 dark:text-purple-400"
              data-oid="j8fst_u"
            >
              Backend & Tools
            </h3>
            <div className="space-y-3" data-oid="6d4:msn">
              {[
                { name: "Node.js", level: 70 },
                { name: "Python", level: 75 },
                { name: "Git", level: 85 },
                { name: "Database", level: 65 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2" data-oid="7qs79gn">
                  <div className="flex justify-between" data-oid="wajh7n:">
                    <span className="text-sm font-medium" data-oid="qrcff0z">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-neutral-500"
                      data-oid="grslm2v"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2"
                    data-oid="yzi-ut4"
                  >
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                      data-oid="y26xv6b"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-6" data-oid="epnb_ng">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="okb7cb."
        >
          관심사
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-oid="ct5c7ra"
        >
          {[
            {
              icon: "🌐",
              title: "웹 개발",
              description: "현대적이고 반응형인 웹 애플리케이션 개발",
            },
            {
              icon: "🤖",
              title: "AI/ML",
              description: "인공지능과 머신러닝 기술에 대한 탐구",
            },
            {
              icon: "📱",
              title: "모바일 개발",
              description: "크로스 플랫폼 모바일 앱 개발",
            },
          ].map((interest, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              data-oid="itcwus4"
            >
              <div className="text-3xl mb-3" data-oid="t97lwui">
                {interest.icon}
              </div>
              <h3 className="font-semibold mb-2" data-oid="slb9fmt">
                {interest.title}
              </h3>
              <p
                className="text-sm text-neutral-600 dark:text-neutral-400"
                data-oid="tbn1wja"
              >
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Experience */}
      <div className="space-y-6" data-oid="3jvmed_">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="r7csrwm"
        >
          학습 여정
        </h2>
        <div className="space-y-4" data-oid=".2346g6">
          <div
            className="border-l-4 border-blue-500 pl-6 py-4"
            data-oid="q1i0zrl"
          >
            <div
              className="flex items-center space-x-2 mb-2"
              data-oid="32x:6_j"
            >
              <h3 className="font-semibold" data-oid="3po6zzz">
                소프트웨어 엔지니어링 전공
              </h3>
              <span
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                data-oid="xvhwh2h"
              >
                현재
              </span>
            </div>
            <p
              className="text-sm text-neutral-600 dark:text-neutral-400"
              data-oid="vhxzkpr"
            >
              컴퓨터 과학의 기초부터 실무까지, 체계적인 소프트웨어 개발 방법론을
              학습하고 있습니다.
            </p>
          </div>

          <div
            className="border-l-4 border-green-500 pl-6 py-4"
            data-oid="5-a57tv"
          >
            <h3 className="font-semibold mb-2" data-oid=":5zoli8">
              개인 프로젝트 개발
            </h3>
            <p
              className="text-sm text-neutral-600 dark:text-neutral-400"
              data-oid="sx88tov"
            >
              다양한 웹 애플리케이션과 도구들을 직접 개발하며 실무 경험을 쌓고
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
