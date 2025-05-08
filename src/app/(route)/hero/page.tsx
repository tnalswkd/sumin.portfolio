"use client";

import HeroBackground from "@/app/_components/HeroBackground";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white">
      <div>
        <h1 className="text-[58px] font-extrabold text-center text-gray-900 mb-6">
          Hello! I'm Sumin Lee.
        </h1>
        <p className="text-xl	text-[#666] text-center mb-10">
          Welcome to my frontend developer portfolio.
          <br />
          hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi
          {/* <br />I enjoy creating new technologies and awesome UI/UX experiences. */}
        </p>
      </div>
    </section>
  );
};

export default Hero;
