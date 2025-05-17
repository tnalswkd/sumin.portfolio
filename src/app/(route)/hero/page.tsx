"use client";
import { Text } from "@radix-ui/themes";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col items-center justify-center gap-4"
    >
      <Text className="text-[54px] text-[var(--gray-dark-1)] font-extrabold p-[24px]">
        Hi there! I'm Sumin Lee.
      </Text>
      <Text
        size="5"
        className="text-[var(--gray-11)] text-center"
        weight="regular"
      >
        I love building fast, thoughtful, and team-friendly user interfaces.
        <br />
        Writing good code is great — but hearing "It's easier to work thanks to
        Sumin" means even more to me.
      </Text>

      <div className="p-[40px] flex flex-col gap-[16px] items-center">
        <div className="flex gap-[16px]">
          <a
            href="https://github.com/tnalswkd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[14px] py-[10px] rounded-md bg-[#171717] text-white hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://github.com/tnalswkd"
            target="_blank"
            className="px-[14px] py-[10px] rounded-md border text-black hover:bg-[var(--gray-2)] transition"
          >
            Email
          </a>
        </div>

        <Text color="gray" size="1" weight="regular">
          Feel free to reach out if you have any questions! 👋
        </Text>
      </div>
    </section>
  );
};

export default Hero;
