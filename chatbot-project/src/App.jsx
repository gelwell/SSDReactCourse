import { useState, useRef, useEffect } from "react";
import { ChatInput } from "./components/ChatInput.jsx";
import { ChatMessages } from "./components/ChatMessages.jsx";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello Chatbot", sender: "User", id: crypto.randomUUID() },
    { message: "!!WHAT!!!", sender: "Bot", id: crypto.randomUUID() },
    { message: "Shhhhhsh!!", sender: "User", id: crypto.randomUUID() },
    { message: "You Shhhhhsh!!", sender: "Bot", id: crypto.randomUUID() },
    { message: "YOU Shhhhhsh!!", sender: "User", id: crypto.randomUUID() },
    { message: "...what??", sender: "Bot", id: crypto.randomUUID() },
    {
      message: "What do you mean What?!!",
      sender: "User",
      id: crypto.randomUUID(),
    },
    { message: "I forgot what!", sender: "Bot", id: crypto.randomUUID() },
  ]);

  return (
    <div className="app-container">
      <h1>Chatbot</h1>
      <p>
        Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        {Date()}
      </p>

      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
