"use client";
import Link from "next/link";
import React from "react";
import SocialCard from "./components/SocialCard/SocialCard";
import Logo from "./components/Logo/Logo";
const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute w-[440px] h-[440px] bg-[#87daba] rounded-full blur-[150px] top-[0%] left-[90%] opacity-[50%]" />

      <div className="absolute w-[225px] h-[225px] bg-[#5fcddc] rounded-full blur-[100px]  top-[5%] bottom-[0%] left-[5%] opacity-[0.3]" />
      <div className="absolute w-[225px] h-[225px] bg-[#F24FFF] rounded-full blur-[100px]  top-[5%] right-[0%] bottom-[20%] left-[0.5%] opacity-[0.5]" />
      <div className="absolute w-[225px] h-[225px] bg-[#87DABA] rounded-full blur-[100px]  top-[5%] right-[0%] bottom-[20%] left-[5%] opacity-[0.2]" />
      {/* Navigation */}
      <nav className="flex justify-between items-center py-8 px-16">
        {/* Logo */}
        <div className="grid grid-cols-4 gap-[2px]">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <a
            href="#about"
            className="text-[#f5f5f5] font-nunito font-semibold text-[18px] no-underline hover:opacity-80"
          >
            About Us
          </a>
          <a
            href="#community"
            className="text-[#f5f5f5] font-nunito font-semibold text-[18px] no-underline hover:opacity-80"
          >
            Community
          </a>
          <a
            href="#guide"
            className="text-[#f5f5f5] font-nunito font-semibold text-[18px] no-underline hover:opacity-80"
          >
            Guide
          </a>
          <a
            href="#socials"
            className="text-[#f5f5f5] font-nunito font-semibold text-[18px] no-underline hover:opacity-80"
          >
            Socials
          </a>
          <button className="bg-[#fffd55] rounded-[12px] px-4 py-3 font-nunito font-bold text-[22px] text-[#0f0f0f] cursor-pointer hover:scale-105 transition-transform">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center  px-8 relative z-10">
        <h1 className="font-orbitron font-bold text-[64px] leading-[76.8px] text-[#f5f5f5] mb-4 tracking-[1.28px]">
          Where <span className="text-[#fffd55]">Trends</span> become <br />{" "}
          Tradable
        </h1>
        <p className="font-nunito font-normal text-[20px] leading-[36px] text-[#f5f5f5] mb-4">
          Bet on the Attention Economy, Powered by Sonic.
        </p>
        <Link href="/login">
          <button className="bg-[#fffd55] rounded-[12px] py-3 px-8 font-nunito font-bold text-[22px] text-[#0f0f0f] cursor-pointer hover:scale-105 transition-transform">
            Get Started
          </button>
        </Link>
      </div>

      {/* Carousel Section */}
      <div className=" w-full overflow-hidden">
        <SocialCard />
      </div>
    </div>
  );
};

export default LandingPage;
