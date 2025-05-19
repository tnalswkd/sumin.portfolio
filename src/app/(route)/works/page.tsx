"use client";

const Works = () => {
  return (
    <div
      id="works"
      className="h-screen w-full flex items-center justify-center gap-4 px-8"
    >
      <aside className="p-6 bg-[#f0f7ff] min-w-[300px] grid grid-cols-1 gap-4">
        <nav className="flex flex-col gap-4">
          <h3 className="font-medium text-lg">Projects</h3>
          <a href="#project1" className="text-blue-600 hover:underline">
            Kurv
          </a>
          <a href="#project2" className="text-blue-600 hover:underline">
            Odiin
          </a>
          <a href="#project3" className="text-blue-600 hover:underline">
            ATADIN
          </a>
        </nav>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="p-8 grid grid-cols-1 gap-4">
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
