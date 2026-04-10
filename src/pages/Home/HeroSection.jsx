import { Dot, Download, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import laptopImage from "../../assets/laptopImage1.avif";
import { a, p, span } from "motion/react-client";
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import { useState } from "react";
import FillButton from "../../components/FillButton";

export default function HeroSection() {
  const linkList = [
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/haider-ali-hassan-8079763a1",
      icon: linkedin,
    },
    {
      platform: "Telegram",
      link: "https://t.me/haid_er_ali",
      icon: telegram,
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com/your.profile",
      icon: facebook,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/ph_49_dev/",
      icon: instagram,
    },
    {
      platform: "GitHub",
      link: "https://github.com/HayU49",
      icon: github,
    },
  ];
  const techStach = [
    "HTML",
    "CSS",
    "js",
    "ts",
    "React",
    "Tailwind",
    "ExpressJs",
    "NestJs",
    "Postgresql",
    "Python",
    "Pandas",
    "numpy",
    "Matplotlib",
    "TensorFlow",
    "Scikit-Learn",
  ];
  return (
    <div className=" my-20 ">
      <div className="py-2 bg-primary/30 text-primary  w-fit flex justify-center items-center rounded-full   ">
        <Dot
          width={"25px"}
          height={"25px"}
          className="text-primary  animate-ping"
        />
        <p className="uppercase pr-4 ">available for work</p>
      </div>
      <div className="my-5  flex flex-col lg:flex-row justify-between">
        {/* left side */}
        <div className="lg:w-[40%] mb-5 lg:mb-0">
          <div className="text-white  mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl  mb-5">
              Hi, I'm a<br /> Full Stack Developer
              <br />
              AI Engineer
            </h1>
            <p>
              What started as a hobby turned into my full-time passion and my
              bread and butter. Now, I help people and businesses bring their
              ideas to life with modern websites that just work—while actively
              mastering AI algorithms to build the next generation of
              intelligent, data-driven applications.
            </p>
          </div>
          <FillButton fillClass="bg-[#9baa8a]" className="text-bold text-xl  leading-[none]">
            View My Portifolio
          </FillButton>
        </div>
        {/* right side */}
        <div className="flex flex-col  justify-between">
          {/* images */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 justify-between ">
            <div className="w-full md:w-60 aspect-4/5 sm:h-70">
              <img
                className="w-full h-full object-cover  rounded-2xl"
                src={profile}
                alt=""
              />
            </div>
            <div className="h-70 w-full lg:w-60 relative overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover"
                src={laptopImage}
                alt="Laptop displaying code"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
                  Haider Ali
                </h3>
                <p className="text-white text-2xl font-bold leading-tight">
                  AI-Powered
                  <br />
                  Websites
                </p>
              </div>
            </div>
          </div>
          <div className="my-4">
            <FillButton className="text-bold w-full text-lg">
              <a
                href="/path-to-your-resume.pdf"
                download="Haider_Ali_Resume.pdf"
                className="w-full  flex items-center justify-center gap-2"
              >
                <Download width={18} />
                Download My CV
              </a>
            </FillButton>
          </div>
          {/* links */}
          <div className="flex justify-between">
            {linkList.map((link) => (
              <FillButton className="flex items-center justify-center py-2! px-2! leading-[none]">
                <a rel="noreferrer" href={link.link} target="_blank">
                  <img className="w-10 h-10 " src={link.icon} color="white" />
                </a>
              </FillButton>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl mt-20">
        <h2 className="text-xl sm:text-2xl font-medium text-black">
          My mission is to craft beautiful, responsive applications that solve
          real-world problems through a blend of thoughtful engineering and
          Machine Learning. By combining solid full-stack architecture with Deep
          Learning insights, I build seamless, data-driven experiences that
          perform intelligently across all platforms.
        </h2>

        <div className="relative flex overflow-x-hidden  py-4  border-gray-200">
          {/* Container for the moving text */}
          <div className="animate-ticker whitespace-nowrap flex">
            {/* Render the list twice for a seamless loop */}
            {[...techStach, ...techStach].map((tech, index) => (
              <span
                key={index}
                className="mx-8 text-lg font-medium text-gray-500 uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Optional: Gradient Overlays for a "fading" edge effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r  to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
