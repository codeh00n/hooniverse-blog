export default function About() {
  return (
    <section className="space-y-8" data-oid="pgohrvu">
      <div data-oid="97sucbs">
        <h1
          className="mb-8 text-3xl font-bold tracking-tight"
          data-oid="wjkwa15"
        >
          About Me
        </h1>
      </div>

      {/* Personal Introduction */}
      <div className="space-y-6" data-oid="m1dmgx4">
        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          data-oid="uob-l1m"
        >
          <p
            className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
            data-oid="lu:ayxn"
          >
            안녕하세요! 저는 소프트웨어 엔지니어링을 공부하고 있는 한국의
            학생입니다. 웹 개발과 소프트웨어 개발에 깊은 관심을 가지고 있으며,
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 즐깁니다.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6" data-oid="y2c8_ea">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="w3mp_4j"
        >
          기술 스택
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="l3tlt.z"
        >
          <div className="space-y-4" data-oid="zmfu-md">
            <h3
              className="text-lg font-medium text-blue-600 dark:text-blue-400"
              data-oid="qc5pkgo"
            >
              Frontend
            </h3>
            <div className="space-y-3" data-oid="y82s8l-">
              {[
                { name: "React", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "TypeScript", level: 75 },
                { name: "Tailwind CSS", level: 90 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2" data-oid="n4tuwv8">
                  <div className="flex justify-between" data-oid="dl1irt-">
                    <span className="text-sm font-medium" data-oid=":f1t9tt">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-neutral-500"
                      data-oid="osx6-tp"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2"
                    data-oid="duv2mv:"
                  >
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                      data-oid="irhtqv8"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4" data-oid="ey4d4vv">
            <h3
              className="text-lg font-medium text-purple-600 dark:text-purple-400"
              data-oid="8yioft."
            >
              Backend & Tools
            </h3>
            <div className="space-y-3" data-oid="ic7n.sv">
              {[
                { name: "Node.js", level: 70 },
                { name: "Python", level: 75 },
                { name: "Git", level: 85 },
                { name: "Database", level: 65 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2" data-oid="7igmjzk">
                  <div className="flex justify-between" data-oid="us4hjq2">
                    <span className="text-sm font-medium" data-oid="dxjk5ox">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-neutral-500"
                      data-oid="1nu804z"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2"
                    data-oid=":enw8yn"
                  >
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                      data-oid="r_jgf_f"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-6" data-oid="s1tt3n1">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid=":njus-q"
        >
          관심사
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-oid="ktl8e4q"
        >
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
              data-oid="m8283:g"
            >
              <div className="text-3xl mb-3" data-oid="9yvet2r">
                {interest.icon}
              </div>
              <h3 className="font-semibold mb-2" data-oid="ssxh6.n">
                {interest.title}
              </h3>
              <p
                className="text-sm text-neutral-600 dark:text-neutral-400"
                data-oid="0lxlfse"
              >
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Experience */}
      <div className="space-y-6" data-oid="wfkcz7_">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="_gv2dl4"
        >
          학습 여정
        </h2>
        <div className="space-y-4" data-oid="vz9ci5p">
          <div
            className="border-l-4 border-blue-500 pl-6 py-4"
            data-oid="6:vd1ur"
          >
            <div
              className="flex items-center space-x-2 mb-2"
              data-oid="4c.hc.z"
            >
              <h3 className="font-semibold" data-oid="pgbo9c7">
                소프트웨어 엔지니어링 전공
              </h3>
              <span
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                data-oid="2ywwwcx"
              >
                현재
              </span>
            </div>
            <p
              className="text-sm text-neutral-600 dark:text-neutral-400"
              data-oid="hl23h3a"
            >
              컴퓨터 과학의 기초부터 실무까지, 체계적인 소프트웨어 개발 방법론을
              학습하고 있습니다.
            </p>
          </div>

          <div
            className="border-l-4 border-green-500 pl-6 py-4"
            data-oid="qeer0ll"
          >
            <h3 className="font-semibold mb-2" data-oid="mh:fiv3">
              개인 프로젝트 개발
            </h3>
            <p
              className="text-sm text-neutral-600 dark:text-neutral-400"
              data-oid="mbr59zx"
            >
              웹 애플리케이션, Unity 게임, AI 도구 활용 프로젝트 등 다양한
              분야의 개발을 통해 실무 경험을 쌓고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
