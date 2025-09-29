import { useTheme } from "./ThemeContext";

type HeaderProps = {
  onNewChat: () => void;
};

function Header({onNewChat} : HeaderProps) {
  const { isDark, toggleTheme } = useTheme();  

  return (
    <div>
      <header className="p-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-xl">ChatGPT Clone</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={toggleTheme} className="cursor-pointer px-2 py-1 rounded bg-gray-200 dark:bg-gray-700" title={`${!isDark ? "Dark Mode" : "Light Mode"}`}>
            {isDark ? "☀️" : "🌙"}
          </button>
          <button onClick={onNewChat} className="text-sm border px-3 py-1 rounded cursor-pointer hover:bg-stone-900 hover:text-white">Clear</button>
          <button className="text-sm border px-3 py-1 rounded">Export</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
