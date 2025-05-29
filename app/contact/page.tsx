"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ghdtjr9ns@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "#",
      description: "코드와 프로젝트를 확인하세요",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
      description: "전문적인 네트워킹",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
      description: "일상과 개발 이야기",
    },
  ];

  return (
    <section data-oid="ubcr6o3" className="space-y-8">
      <div data-oid="ba-mb1k">
        <h1
          className="mb-4 text-3xl font-bold tracking-tight"
          data-oid=".r.9afx"
        >
          연락하기
        </h1>
        <p
          className="text-lg text-neutral-600 dark:text-neutral-400"
          data-oid="_gt_dm6"
        >
          새로운 아이디어나 기회에 항상 열려있습니다. 언제든지 연락주세요!
        </p>
      </div>

      {/* Email Section */}
      <div className="space-y-6" data-oid="wf14bxj">
        <div
          className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/50 dark:border-blue-800/50"
          data-oid="qea8mjn"
        >
          <div className="flex items-center space-x-3 mb-4" data-oid="ci__ctt">
            <div
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
              data-oid=".z.uetb"
            >
              <span className="text-white text-lg" data-oid="p7wnots">
                📧
              </span>
            </div>
            <div data-oid="0x5ynia">
              <h3
                className="font-semibold text-blue-900 dark:text-blue-100"
                data-oid="3pj4mzs"
              >
                이메일
              </h3>
              <p
                className="text-sm text-blue-700 dark:text-blue-300"
                data-oid="qmup9kf"
              >
                가장 빠른 연락 방법
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-between p-4 bg-white dark:bg-neutral-900 rounded-lg border border-blue-200 dark:border-blue-800"
            data-oid=":9e5:eh"
          >
            <span className="font-mono text-lg" data-oid="0xgtaa-">
              ghdtjr9ns@gmail.com
            </span>
            <button
              onClick={copyEmail}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                copied
                  ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                  : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
              }`}
              aria-label="Copy email address"
              data-oid="4qw80v7"
            >
              {copied ? "✅ 복사됨!" : "📋 복사"}
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-6" data-oid="-3u5_y7">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="logqh7b"
        >
          소셜 미디어
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-oid="qmza6gv"
        >
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              className="group p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 hover:shadow-lg"
              data-oid="ss43v7v"
            >
              <div
                className="flex items-center space-x-3 mb-3"
                data-oid="rs5ddqt"
              >
                <span className="text-2xl" data-oid="4ul_4mh">
                  {social.icon}
                </span>
                <h3
                  className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  data-oid="1xekpfz"
                >
                  {social.name}
                </h3>
              </div>
              <p
                className="text-sm text-neutral-600 dark:text-neutral-400"
                data-oid="sgso:3."
              >
                {social.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-6" data-oid="x27kr:n">
        <h2
          className="text-2xl font-semibold tracking-tight"
          data-oid="zr614ix"
        >
          메시지 보내기
        </h2>
        <div
          className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
          data-oid="2a6zgdg"
        >
          <form className="space-y-4" data-oid="249aiuw">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="ld3djxo"
            >
              <div data-oid="rfz2ttl">
                <label
                  className="block text-sm font-medium mb-2"
                  data-oid="we34.n4"
                >
                  이름
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="홍길동"
                  data-oid="j6l9n3v"
                />
              </div>
              <div data-oid="yhazx8i">
                <label
                  className="block text-sm font-medium mb-2"
                  data-oid="-3uc-5r"
                >
                  이메일
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="example@email.com"
                  data-oid="5e3n3x:"
                />
              </div>
            </div>
            <div data-oid=":vm5vwi">
              <label
                className="block text-sm font-medium mb-2"
                data-oid="-d.ak3:"
              >
                제목
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="문의 제목"
                data-oid="h_kc0zd"
              />
            </div>
            <div data-oid="ytj7_iq">
              <label
                className="block text-sm font-medium mb-2"
                data-oid="u62h-87"
              >
                메시지
              </label>
              <textarea
                rows={5}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="메시지를 입력해주세요..."
                data-oid="r4my_:x"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              data-oid="r3vuc-e"
            >
              메시지 보내기
            </button>
          </form>
        </div>
      </div>

      {/* Response Time */}
      <div
        className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800"
        data-oid="dv5adv4"
      >
        <div className="flex items-center space-x-2" data-oid="bmxg804">
          <span
            className="text-yellow-600 dark:text-yellow-400"
            data-oid="-160nzn"
          >
            ⏰
          </span>
          <p
            className="text-sm text-yellow-700 dark:text-yellow-300"
            data-oid="zn43-8z"
          >
            보통 24시간 이내에 답변드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
