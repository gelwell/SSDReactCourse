import robotPng from "../assets/robot.png";
import userPng from "../assets/user.png";
import "./ChatMsg.css";

export function ChatMsg({ message, sender }) {
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
