"use client";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import './slider.css'
import Link from "next/link";

const slides = [
  {
    bgimage: "/onboarding1.png",
    title: "Unlock wealth by smart investing in real estate with Invidux.",
    subTitle:
      "Earn regular and stable passive income regardless of your budget while you lead a premium living.",
  },
  {
    bgimage: "/onboarding2.png",
    title: "Unlock wealth by smart investing in real estate with Invidux.",
    subTitle:
      "Earn regular and stable passive income regardless of your budget while you lead a premium living. ",
  },
  {
    bgimage: "/onboarding3.png",
    title: "Unlock wealth by smart investing in real estate with Invidux.",
    subTitle:
      "Earn regular and stable passive income regardless of your budget while you lead a premium living.",
  },
];

const Slider = () => {
  const delay = 8000;
  const [index, setIndex] = useState(0);
  const timeoutRef: any = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="hidden md:block slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide h-[92vh] w-[100%] bg-center bg-cover bg-no-repeat font-bold rounded-2xl px-6 py-5`}
            key={index}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgimage})`}}
          >
            <Link href='/token-issuers/login'><Image src={logo} alt="Invidux logo" className="w-[145px] block cursor-pointer" /></Link>
            <div className="w-[504px] mt-[40vh] mb-[50px]">
              <h2 className="text-white text-wrap text-[30px] font-semibold leading-10 mb-[16px]">
                {slide.title}
              </h2>
              <p className="w-[504px] text-wrap text-white text-base font-normal leading-normal">
                {slide.subTitle}
              </p>
            </div>
            <div className="slideshowDots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
