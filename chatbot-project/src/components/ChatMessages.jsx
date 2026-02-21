import { useRef, useEffect } from "react";
import { ChatMsg } from "./ChatMsg.jsx";
import "./ChatMessages.css";
//import "../App.css";

export function ChatMessages({ chatMessages }) {
  const chatMessagesEndRef = useRef(null);
  useEffect(() => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollTop =
        chatMessagesEndRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesEndRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMsg
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  );
}

//export default ChatMessages;

// function ChatMessages({ chatMessages }) {
