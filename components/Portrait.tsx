"use client";

import Image from "next/image";
import leftPortrait from "../images/mifoto2.jpg";
import rightPortrait from "../images/mifotoringh.jpg";

interface PortraitProps {
  blend: number;
}

export default function Portrait({ blend }: PortraitProps) {
  const leftBoundary = Number((100 - blend).toFixed(2));
  const leftClip = `polygon(0 0, ${leftBoundary}% 0, ${leftBoundary}% 100%, 0 100%)`;
  const rightClip = `polygon(${leftBoundary}% 0, 100% 0, 100% 100%, ${leftBoundary}% 100%)`;

  return (
    <div
      className="relative mx-auto w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] md:w-[360px] md:h-[500px] lg:w-[420px] lg:h-[560px] overflow-hidden rounded-2xl"
      style={{
        filter:
          "drop-shadow(0 25px 50px rgba(2, 6, 23, 0.7)) drop-shadow(0 12px 28px rgba(30, 41, 59, 0.5))",
      }}
    >
      {/* Vista para pantallas táctiles y celulares */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={rightPortrait}
          alt="Retrato profesional - Desarrollador de Software"
          fill
          priority
          sizes="(max-width: 767px) 90vw"
          className="object-cover"
          style={{ objectPosition: "50% 15%" }}
        />
      </div>

      {/* Capa izquierda (Desktop): Revelada al mover cursor hacia la izquierda */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ clipPath: leftClip }}
      >
        <Image
          src={leftPortrait}
          alt="Retrato - Perfil"
          fill
          priority
          sizes="(min-width: 768px) 50vw"
          className="object-cover"
          style={{ objectPosition: "50% 15%" }}
        />
      </div>

      {/* Capa derecha (Desktop): Revelada al mover cursor hacia la derecha */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ clipPath: rightClip }}
      >
        <Image
          src={rightPortrait}
          alt="Retrato - Frontal"
          fill
          priority
          sizes="(min-width: 768px) 50vw"
          className="object-cover"
          style={{ objectPosition: "50% 15%" }}
        />
      </div>
    </div>
  );
}