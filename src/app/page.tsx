import Image from "next/image";
import Hero from "./(route)/hero/page";
import AboutMe from "./(route)/about-me/page";
import Skills from "./(route)/skills/page";
export default function Home() {
  return (
    <div className="[scroll-behavior:smooth] grid items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full ">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
