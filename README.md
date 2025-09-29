# 🤖 ChatGPT Clone (React + Vite + TypeScript + Groq AI)

A ChatGPT-style AI assistant built with **React, TypeScript, Vite, Tailwind CSS, and Groq AI API**. This project allows users to chat with an AI model (llama-3.3-70b-versatile) and supports light/dark mode and get a quick response from AI.

---

## 🚀 Live Demo

🌐 [https://chatgpt-clone-by-tanmay.vercel.app/](https://chatgpt-clone-by-tanmay.vercel.app/)]

---

## 🚀 Features

+ ⚡ React + Vite + TypeScript for fast development

+ 🎨 Tailwind CSS for styling (dark & light mode support)

+ 💬 Chat UI similar to ChatGPT

+ ⏳ Shows “Typing...” loader while fetching response

+ ➕ New Chat button to reset conversation

+ 🔑 Environment-based API key management

+ 🤝 Powered by Groq AI API

---

## 📦 Tech Stack

+ React + Vite

+ TypeScript

+ Tailwind CSS

+ Lucide Icons

+ Groq AI

---

## 📂 Project Structure
src/
 ├── components/
 │    ├── Header.tsx       # Top navigation (Theme toggle + New Chat button)
 │    ├── Sidebar.tsx      # (Optional) Sidebar for future chat history
 │    ├── Main.tsx         # Chat interface
 │    └── ThemeContext.tsx # Dark/Light mode context
 │
 ├── App.tsx               # Root app (manages state + layout)
 ├── index.css             # Tailwind CSS imports
 └── main.tsx              # Vite entry point

---

## ⚡ Usage
+ Type a message in the input box and press Enter (or click Send).

+ The AI will respond using Groq LLaMA model.

+ Click 🌙 / ☀️ toggle to switch themes.

+ Click ➕ New Chat to reset messages.

---

## 📝 License
This project is licensed under the MIT License.
Feel free to fork, modify, and use for personal or educational purposes.

### ✨ Built with ❤️ using React, TypeScript, and Groq AI
