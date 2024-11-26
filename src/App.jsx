import React, { useState } from "react";
import ChatBot from "./components/ChatBot";
import Customizer from "./components/Customizer";
import ChatingBox from "./components/ChatingBox";
import styles from "./styles/App.module.css";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [config, setConfig] = useState({
    buttonIcon: "",
    borderColor: "#111",
    borderRadius: "15px",
    titleBgColor: "#111",
    botBubbleBg: "#E8F5FF",
    botTextColor: "#111",
    userBubbleBg: "#111",
    userTextColor: "#FFFFFF",
    font: "Arial",
  });

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className={styles.container}>
      <Customizer config={config} setConfig={setConfig} />
      

      {isChatOpen ? (
        <ChatingBox onClose={toggleChat}>
          <ChatBot config={config} /> 
        </ChatingBox>
      ):(
        <button className={styles.chatButton} onClick={toggleChat}>
        Chat with Us
        </button>
      )}
    </div>
  );
};

export default App;



