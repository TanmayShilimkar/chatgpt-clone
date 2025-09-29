import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState<{ id: number; role: string; text: string }[]>([]);
  
  const newChat = () => {
    setMessages([]);
  };

  return (
    <ThemeProvider>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Sidebar onNewChat={newChat} />
          <div className="flex-1 flex flex-col">
            <Header onNewChat={newChat} />
            <Main messages={messages} setMessages={setMessages}/>
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
