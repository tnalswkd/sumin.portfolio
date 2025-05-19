"use client";
import { Text } from "@radix-ui/themes";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col items-center justify-center gap-4"
    >
      <Text
        size="9"
        className="text-[var(--gray-dark-1)] font-extrabold p-[24px]"
      >
        안녕하세요, 이수민입니다.
      </Text>
      <Text
        size="5"
        className="text-[var(--gray-11)] text-center"
        weight="regular"
      >
        빠르고 섬세하며, 팀이 함께 일하기 좋은 UI를 만드는 걸 좋아합니다.
        <br />
        코드를 잘 짜는 것도 중요하지만, “수민 덕분에 일이 쉬워졌어요”라는 말을
        들을 때 더 큰 보람을 느낍니다.
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
            href="mailto:tnalswkd1122@naver.com"
            target="_blank"
            className="px-[14px] py-[10px] rounded-md border text-black hover:bg-[var(--gray-2)] transition"
          >
            Email
          </a>
        </div>

        <Text color="gray" size="1" weight="regular">
          궁금한 점이 있다면 언제든지 편하게 연락 주세요! 👋
        </Text>
      </div>
    </section>
  );
};

export default Hero;
