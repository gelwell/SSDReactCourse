import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
//import "../App.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState(""); // [state, setState]

  function handleInputClick(event) {
    //event.target.style.backgroundColor = "yellow";
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  function sendMessage() {
    const newMessage = {
      message: inputValue,
      sender: "User",
      id: crypto.randomUUID(),
    };
    setChatMessages([...chatMessages, newMessage]);
    const botResponse = Chatbot.getResponse(inputValue);
    const newBotMessage = {
      message: botResponse,
      sender: "Bot",
      id: crypto.randomUUID(),
    };
    setChatMessages([...chatMessages, newMessage, newBotMessage]);
    setInputValue("");
  }

  return (
    <div className="chat-input-container">
      <input
        id="chat-input"
        type="text"
        className="chat-input"
        placeholder="Type your message here..."
        size="50"
        onClick={handleInputClick}
        //onChange={(e) => setInputValue(e.target.value)}
        onChange={(e) => {
          setInputValue(e.target.value);
          e.target.style.backgroundColor = "yellow";
        }}
        value={inputValue}
      />
      <button
        className="send-button"
        //onClick={sendMessage}
        onClick={() => {
          sendMessage();
          document.getElementById("chat-input").style.backgroundColor = "white";
        }}
      >
        Send
      </button>
    </div>
  );
}
