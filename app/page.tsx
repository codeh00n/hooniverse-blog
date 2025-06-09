import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-8">
          {" "}          <h1 className="font-bold tracking-tight leading-tight">
            <span
              className="text-2xl md:text-3xl lg:text-4xl text-blue-500"
            >
              안녕하세요. 저는 웹 개발자
            </span>
            <br />
            <div className="mt-2"></div>
            <span
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              홍석훈입니다.
            </span>
          </h1><p
            className="text-2xl md:text-3xl leading-relaxed max-w-4xl"
            style={{ color: "var(--text-muted)" }}
          >
            새로운 기술을 탐구하고 사용자 경험을 개선하는 일에 열정을 가지고
            있습니다.
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-4xl"
            style={{ color: "var(--text-muted)" }}
          >
            사용자와 직접 만나는 프론트엔드 개발을 전문으로 하며, 코드를 통해
            아이디어를 현실로 만드는 과정을 즐깁니다. 제 포트폴리오를 방문해
            주셔서 진심으로 감사드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
