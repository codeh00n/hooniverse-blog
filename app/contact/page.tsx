"use client";

import { useState } from "react";

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

  return (
    <section className="space-y-8" data-oid="2yftyjg">
      <div data-oid="15yt.wq">
        <h1
          className="mb-4 text-3xl font-bold tracking-tight"
          data-oid="1a9hxpz"
        >
          연락하기
        </h1>
        <p
          className="text-lg text-neutral-600 dark:text-neutral-400"
          data-oid="54.y7p3"
        >
          새로운 아이디어나 기회에 항상 열려있습니다. 언제든지 연락주세요!
        </p>
      </div>

      {/* Email Section */}
      <div className="space-y-6" data-oid="2u-i9rf">
        <div
          className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/50 dark:border-blue-800/50"
          data-oid="lgawe5u"
        >
          <div className="flex items-center space-x-3 mb-4" data-oid="wa7e3vo">
            <div
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
              data-oid="ptdaqbo"
            >
              <span className="text-white text-lg" data-oid="o5xfgr0">
                📧
              </span>
            </div>
            <div data-oid="j..03z:">
              <h3
                className="font-semibold text-blue-900 dark:text-blue-100"
                data-oid="4ygo5d8"
              >
                이메일
              </h3>
              <p
                className="text-sm text-blue-700 dark:text-blue-300"
                data-oid="8sze4za"
              >
                가장 빠른 연락 방법
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-between p-4 bg-white dark:bg-neutral-900 rounded-lg border border-blue-200 dark:border-blue-800"
            data-oid="j103g12"
          >
            <span className="font-mono text-lg" data-oid="dpq3rjs">
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
              data-oid="nszhtsq"
            >
              {copied ? "✅ 복사됨!" : "📋 복사"}
            </button>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div
        className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800"
        data-oid="_-kfivj"
      >
        <div className="flex items-center space-x-2" data-oid="bcad5in">
          <span
            className="text-yellow-600 dark:text-yellow-400"
            data-oid=".xnx1bz"
          >
            ⏰
          </span>
          <p
            className="text-sm text-yellow-700 dark:text-yellow-300"
            data-oid="lest461"
          >
            보통 24시간 이내에 답변드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
