"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

export default function Marquee({ partners }: { partners: Partner[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // px per frame

    const animate = () => {
      position -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(animate);
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const doubled = [...partners, ...partners];

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #0a0a0f, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #0a0a0f, transparent)" }}
      />
      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}
        >
          {doubled.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              title={p.name}
              style={{
                flexShrink: 0,
                width: "120px",
                height: "48px",
                margin: "0 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={48}
                style={{
                  objectFit: "contain",
                  maxHeight: "36px",
                  maxWidth: "110px",
                  width: "auto",
                  height: "auto",
                  opacity: 0.45,
                  filter: "grayscale(30%)",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.45"; }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
