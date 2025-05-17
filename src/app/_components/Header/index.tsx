import { Text } from "@radix-ui/themes";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 fixed">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🐰</span>
          <a href="#hero">
            <Text size="3" weight="bold" className="text-[var(--gray-dark-1)]">
              Sumin
            </Text>
          </a>
        </div>
        {/* 오른쪽: 네비게이션 */}
        <nav className="flex items-center space-x-6">
          <a href="#skills" className="text-sm text-[var(--gray-dark-1)]">
            Skills
          </a>
          <a href="#" className="text-sm text-[var(--gray-dark-1)]">
            Projects
          </a>
          <a href="#" className="text-sm text-[var(--gray-dark-1)]">
            Career
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
