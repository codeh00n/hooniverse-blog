"use client";

import { useRef, useEffect } from "react";

// Elegant animated background with CSS and subtle animations
export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const createFloatingElement = () => {
      const element = document.createElement("div");
      element.className = "floating-element";

      // Random position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      // Random animation duration
      const duration = 15 + Math.random() * 25; // 15-40s

      // Random size and opacity
      const size = 4 + Math.random() * 8; // 4-12px
      const opacity = 0.1 + Math.random() * 0.3; // 0.1-0.4

      // Random colors from a sophisticated palette
      const colors = [
        "rgba(79, 70, 229, opacity)", // indigo
        "rgba(139, 92, 246, opacity)", // violet
        "rgba(236, 72, 153, opacity)", // pink
        "rgba(8, 145, 178, opacity)", // cyan
        "rgba(5, 150, 105, opacity)", // emerald
        "rgba(245, 158, 11, opacity)", // amber
      ];
      const color = colors[Math.floor(Math.random() * colors.length)].replace(
        "opacity",
        opacity.toString(),
      );

      element.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        animation: float ${duration}s linear infinite;
        filter: blur(1px);
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      container.appendChild(element);

      // Remove element after animation
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, duration * 1000);
    };

    // Create elements periodically
    const interval = setInterval(createFloatingElement, 2000);

    // Create initial elements
    for (let i = 0; i < 20; i++) {
      setTimeout(createFloatingElement, i * 500);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style jsx data-oid="9xp.c4o">{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes subtle-pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        .background-orbs::before {
          content: "";
          position: absolute;
          top: 20%;
          left: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(79, 70, 229, 0.15) 0%,
            transparent 70%
          );
          border-radius: 50%;
          animation: subtle-pulse 8s ease-in-out infinite;
          filter: blur(40px);
        }

        .background-orbs::after {
          content: "";
          position: absolute;
          bottom: 20%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.15) 0%,
            transparent 70%
          );
          border-radius: 50%;
          animation: subtle-pulse 10s ease-in-out infinite reverse;
          filter: blur(40px);
        }
      `}</style>

      <div
        ref={containerRef}
        className="fixed inset-0 -z-10 pointer-events-none background-orbs overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg, 
              #000000 0%, 
              #0a0a0a 25%, 
              #000514 50%, 
              #0a0a0a 75%, 
              #000000 100%
            )
          `,
          backgroundSize: "400% 400%",
          animation: "gradient-shift 20s ease infinite",
        }}
        data-oid="j61m5ka"
      >
        {/* Static subtle gradient overlays */}
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 60%)",
            filter: "blur(60px)",
            animation: "subtle-pulse 12s ease-in-out infinite",
          }}
          data-oid="ii9uwrv"
        />

        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(8, 145, 178, 0.3) 0%, transparent 60%)",
            filter: "blur(50px)",
            animation: "subtle-pulse 15s ease-in-out infinite reverse",
          }}
          data-oid="m44la32"
        />

        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 60%)",
            filter: "blur(45px)",
            animation: "subtle-pulse 18s ease-in-out infinite",
          }}
          data-oid="1b775y:"
        />
      </div>
    </>
  );
}
