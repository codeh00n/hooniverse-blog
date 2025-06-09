export default function About() {
  return (
    <section className="space-y-8" data-oid="gs_0-i.">
      <div data-oid="x9:2-tn">
        <h1
          className="mb-8 text-3xl font-bold tracking-tight"
          data-oid="rz2.s60"
        >
          About Me
        </h1>
      </div>

      {/* Personal Introduction */}
      <div className="space-y-6" data-oid="iqsv_kl">
        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          data-oid="6wi6jfp"
        >
          <p
            className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
            data-oid="v-rqf9-"
          >
            안녕하세요! 저는 소프트웨어 엔지니어링을 공부하고 있는 한국의
            학생입니다. 웹 개발과 소프트웨어 개발에 깊은 관심을 가지고 있으며,
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 즐깁니다.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6" data-oid="z_4icld">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="_7zqftx"
        >
          기술 스택
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="jtxxxhq"
        >
          <div className="space-y-4" data-oid="5aepifu">
            <h3
              className="text-lg font-medium text-blue-600 dark:text-blue-400"
              data-oid="0x-zyj_"
            >
              Frontend
            </h3>
            <div className="space-y-3" data-oid="8u6g:qf">
              {[
                { name: "React", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "TypeScript", level: 75 },
                { name: "Tailwind CSS", level: 90 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2" data-oid="76oejfa">
                  <div className="flex justify-between" data-oid=":.h-mqy">
                    <span className="text-sm font-medium" data-oid="fv17u.1">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-neutral-500"
                      data-oid="lwtemxp"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2"
                    data-oid="7h.7omh"
                  >
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                      data-oid="iz.86ss"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4" data-oid="s2z5z5t">
            <h3
              className="text-lg font-medium text-purple-600 dark:text-purple-400"
              data-oid="50h_q8u"
            >
              Backend & Tools
            </h3>
            <div className="space-y-3" data-oid="y3jj:04">
              {[
                { name: "Node.js", level: 70 },
                { name: "Python", level: 75 },
                { name: "Git", level: 85 },
                { name: "Database", level: 65 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2" data-oid="4mtxx:l">
                  <div className="flex justify-between" data-oid="7bo7vp-">
                    <span className="text-sm font-medium" data-oid="oofah1l">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-neutral-500"
                      data-oid="olgz09i"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2"
                    data-oid="e.1k.mq"
                  >
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                      data-oid="25pedig"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-6" data-oid="f:_3_e4">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="6ir-m8y"
        >
          관심사
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-oid="v_zjgl:"
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
              data-oid="gmlk7ei"
            >
              <div className="text-3xl mb-3" data-oid="mi8kya6">
                {interest.icon}
              </div>
              <h3 className="font-semibold mb-2" data-oid="1_6-hr2">
                {interest.title}
              </h3>
              <p
                className="text-sm text-neutral-600 dark:text-neutral-400"
                data-oid="t65s1-p"
              >
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Experience */}
      <div className="space-y-6" data-oid="y:rke-p">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="girhxt1"
        >
          학습 여정
        </h2>
        <div className="space-y-4" data-oid="n:8yjud">
          <div
            className="border-l-4 border-blue-500 pl-6 py-4"
            data-oid="0w8nm3."
          >
            <div
              className="flex items-center space-x-2 mb-2"
              data-oid="o_tnl_5"
            >
              <h3 className="font-semibold" data-oid="gz.dq65">
                소프트웨어 엔지니어링 전공
              </h3>
              <span
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                data-oid="8is1bny"
              >
                현재
              </span>
            </div>
            <p
              className="text-sm text-neutral-600 dark:text-neutral-400"
              data-oid="9d7:_0u"
            >
              컴퓨터 과학의 기초부터 실무까지, 체계적인 소프트웨어 개발 방법론을
              학습하고 있습니다.
            </p>
          </div>

          <div
            className="border-l-4 border-green-500 pl-6 py-4"
            data-oid="y_:poz1"
          >
            <h3 className="font-semibold mb-2" data-oid="dmm9boy">
              개인 프로젝트 개발
            </h3>
            <p
              className="text-sm text-neutral-600 dark:text-neutral-400"
              data-oid="5wisprr"
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
