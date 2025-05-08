const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* 왼쪽: 로고 */}
        <div className="flex items-center space-x-2">
          {/* 삼각형 아이콘(예시) */}
          <span className="text-2xl">🐰</span>
          <a href="/">
            <span className="font-bold text-lg tracking-tight">Sumin</span>
          </a>
        </div>
        {/* 오른쪽: 네비게이션 */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            About me
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Skills
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Projects
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Career
          </a>

          <a
            href="https://github.com/tnalswkd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:text-black"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
