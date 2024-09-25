"use client";

import { useEffect, useState } from "react";
import { welcomeTour } from "@/constant"
import Image from "next/image";

const WelcomeTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomeTour.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-tour">
      <div className="relative flex flex-col gap-3 overflow-hidden p-12 pr-[311px]">
        <h2 className="text-4xl font-bold text-[color:var(--color-text-primary)]">
          Sign in now for your{" "}
          <span className="text-[color:var(--color-text-white)]">chance</span>{" "}
          to win big in our exciting lucky draw.
        </h2>
        <p className="text-xl font-semibold text-[color:var(--color-text-primary)]">
          {welcomeTour[currentIndex]?.tagline}
        </p>
        <div className="flex gap-1">
          {welcomeTour.map(({ tagline, image }, index) => (
            <div
              key={index}
              className={`h-3 w-6 cursor-pointer rounded-full bg-[#10101040] ${index === currentIndex
                  ? "w-16 bg-[color:var(--color-secondary)]"
                  : ""
                }`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <Image
        src={welcomeTour[currentIndex]?.image as string}
        width={900}
        height={900}
        alt="welcome-tour-img"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default WelcomeTour;
