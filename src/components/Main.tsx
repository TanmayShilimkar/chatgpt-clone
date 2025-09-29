import { useState } from "react";
import { SendHorizontal } from "lucide-react";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

type Message = { id: number; role: string; text: string };
type MainProps = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};
function Main({ messages, setMessages }: MainProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), role: "user", text: input.trim() };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: newMsg.text }],
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "⚠️ No response";

      const botMsg = { id: Date.now(), role: "assistant", text: reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.log("API error:", error);
      setMessages((prev) => [...prev, { id: Date.now(), role: "assistant", text: "⚠️ Error calling API" }]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && <h1 className="text-4xl text-center font-semibold pt-60">What can I help with?</h1>}
          {messages.map((msg, idx) => (
            <div>
              <div key={msg.id} className={`flex mb-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div key={idx} className={`px-4 py-2 rounded-4xl max-w-xl text-dark ${msg.role === "user" ? "bg-cyan-200 dark:bg-cyan-700" : "bg-gray-100 text-gray-800"}`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-2">
              <div className="px-4 py-2 rounded-4xl max-w-xs bg-gray-200 text-gray-700 italic">Typing...</div>
            </div>
          )}
        </div>
      </main>

      <footer className={`p-4 dark:border-gray-700 bg-white dark:bg-gray-900 duration-10 ${messages.length === 0 ? "flex-1" : ""}`}>
        <div className="max-w-3xl mx-auto flex gap-2 border rounded-4xl p-4 px-8 resize-none border-gray-300 focus:ring focus:border-blue-400">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask Anything..."
            className="flex-1 focus:outline-none text-dark dark:text-white"
          />
          <button className="cursor-pointer rounded-4xl hover:bg-gray-400 bg-stone-900 p-1 dark:bg-gray-800" onClick={sendMessage}>
            <SendHorizontal className="text-white hover:text-black" />
          </button>
        </div>
      </footer>
    </>
  );
}

export default Main;
