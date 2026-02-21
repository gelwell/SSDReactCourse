import { useState, useRef, useEffect } from "react";
//import Chatbot from "./Chatbot";
import { Chatbot } from "supersimpledev";
import robotPng from "./assets/robot.png";
import userPng from "./assets/user.png";

import "./App.css";

function ChatInput({ chatMessages, setChatMessages }) {
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
    //console.log("Bot response: " + botResponse);
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
        onClick={(e) => {
          sendMessage();
          document.getElementById("chat-input").style.backgroundColor = "white";
        }}
      >
        Send
      </button>
    </div>
  );
}

function ChatMsg({ message, sender }) {
  return (
    <div
      className={
        sender.toLowerCase() === "bot" || sender.toLowerCase() === "robot"
          ? "chat-bot-message"
          : "chat-user-message"
      }
    >
      {(sender.toLowerCase() === "bot" || sender.toLowerCase() === "robot") && (
        <img src={robotPng} alt="Chatbot GIF" className="chatbot-gif" />
      )}
      <div className="message-content">
        <strong>{sender}:</strong> {message}
      </div>
      {sender.toLowerCase() === "user" && (
        //<img src=".\user.png" alt="ChatUser GIF" className="chatuser-gif" />
        <img src={userPng} alt="ChatUser GIF" className="chatuser-gif" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesEndRef = useRef(null);
  useEffect(() => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollTop =
        chatMessagesEndRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesEndRef}>
      {chatMessages.map((chatMessage, index) => (
        <ChatMsg
          key={index}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  );
}

function App() {
  // const chatArray =
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
