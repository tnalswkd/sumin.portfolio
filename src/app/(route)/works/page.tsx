"use client";
import { Text } from "@radix-ui/themes";

const Works = () => {
  return (
    <div
      id="works"
      className="h-screen w-full flex items-center justify-center"
    >
      <aside className="min-w-[300px] grid grid-cols-1 gap-4">
        <nav className="flex flex-col gap-2  h-full">
          <h3 className="font-medium text-lg">Projects</h3>
          <Text
            size="2"
            className="hover:underline text-[--gray-9] cursor-pointer"
          >
            Kurv
          </Text>
          <Text
            size="2"
            className="hover:underline text-[--gray-9] cursor-pointer"
          >
            Odiin
          </Text>
          <Text
            size="2"
            className="hover:underline text-[--gray-9] cursor-pointer"
          >
            ATADIN
          </Text>
        </nav>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="grid grid-cols-1 gap-4 w-[50%]">
        <h1 className="text-3xl font-bold mb-6">작업물</h1>

        <section id="project1" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">프로젝트 1</h2>
          <p className="mb-4">
            이 프로젝트에 대한 설명입니다. 어떤 기술을 사용했는지, 어떤 문제를
            해결했는지 소개합니다.
          </p>
          <div className="bg-gray-200 h-48 flex items-center justify-center rounded-md">
            프로젝트 이미지 또는 데모
          </div>
        </section>

        <section id="project2" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">프로젝트 2</h2>
          <p className="mb-4">두 번째 프로젝트에 대한 설명입니다.</p>
          <div className="bg-gray-200 h-48 flex items-center justify-center rounded-md">
            프로젝트 이미지 또는 데모
          </div>
        </section>
      </main>
    </div>
  );
};

export default Works;
