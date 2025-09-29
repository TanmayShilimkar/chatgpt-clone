import { useState } from "react";
import { SendHorizontal } from 'lucide-react';

function Footer() {
  const [input, setInput] = useState("");
  console.log(input);
  

  return (
    <footer className="p-4 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto flex gap-2 border rounded-4xl p-4 px-6 resize-none border-gray-300 focus:ring focus:border-blue-400">
        <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();              }
            }}
            placeholder="Ask Anything..."
            className="flex-1 focus:outline-none"
          />
          <button className="cursor-pointer rounded-4xl hover:bg-gray-200"><SendHorizontal /></button>
      </div>
    </footer>
  );
}

export default Footer;
