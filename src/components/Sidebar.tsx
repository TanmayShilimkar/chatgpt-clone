import { PanelLeft, SquarePen, Search } from "lucide-react";
import { useState } from "react";
import Logo from "../openai-logo.png";

type HeaderProps = {
  onNewChat: () => void;
};

function Sidebar({ onNewChat }: HeaderProps) {
  const [isActive, setActive] = useState(true);

  const closeSidebar = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <aside className={`${isActive === true ? "w-64" : "w-15 pl-0"} bg-neutral-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col duration-200 sticky`}>
        <div className="p-4 flex justify-between items-center dark:border-gray-700">
          <img className={`${isActive === false ? "hidden" : ""} w-10 hover:bg-gray-300 rounded-xl p-2 cursor-pointer dark:invert dark:hover:bg-gray-700`} src={Logo} alt="ChatGPT Clone"/>
          <button onClick={closeSidebar} className="p-2 hover:bg-gray-300 rounded-lg cursor-pointer" title={`${isActive === true ? "Close Sidebar" : "Open Sidebar  "}`}>
            <PanelLeft className="hover:text-black" />
          </button>
        </div>
        <div className={`${isActive === false ? "hidden" : ""} flex-1 overflow-y-auto`}>
          <div className="flex flex-col justify-self-start px-4 py-2 cursor-pointer">
            <button onClick={onNewChat} className="flex p-2 rounded-lg cursor-pointer mb-1 text-left gap-2 hover:bg-gray-300 text-sm dark:hover:text-dark">
              <SquarePen size={22} />
              New Chat
            </button>
            <button className="flex p-2 rounded-lg cursor-pointer mb-1 tex-left gap-2 hover:bg-gray-300 text-sm">
              <Search size={22} />
              Search Chats
            </button>
          </div>
        </div>
        <div className={`${isActive === false ? "hidden" : ""} p-2 font-semibold text-md text-center text-stone-900 dark:text-white`}>
          Made with ❤️ <br />
          By Tanmay Shilimkar
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
