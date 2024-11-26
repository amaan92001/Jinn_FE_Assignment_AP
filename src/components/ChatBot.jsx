import React from 'react';
import styles from '../styles/ChatBot.module.css';

const ChatBot = ({ config }) => {
  const {
    buttonIcon,
    borderColor,
    borderRadius,
    titleBgColor,
    botBubbleBg,
    botTextColor,
    userBubbleBg,
    userTextColor,
    font,
  } = config;

  return (
    <div
      className={styles.chatbot}
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius,
        fontFamily: font,
      }}
    >
      <div
        className={styles.title}
        style={{
          backgroundColor: titleBgColor,
        }}
      >
        <img className='botLogo' src="/botLogo.png" alt="" />
        <span><strong>Jinn Live</strong> <br /> <p style={{"fontSize":"14px", "color":"gray"}}>&nbsp;Demo Bot</p></span>
        
      </div>

      <div className={styles.chatArea}>
      
        <div
          className={styles.userMessage}
          style={{
            backgroundColor: userBubbleBg,
            color: userTextColor,
          }}
        >
          Hello Jinn
        </div>

        
        <div
          className={styles.botMessage}
          style={{
            backgroundColor: botBubbleBg,
            color: botTextColor,
          }}
        >
          
          Hello Amaan! How can I Help you today?
        </div>
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask us anything..."
          className={styles.input}
        />
        <button style={{"background":"white" , "border" : "white"}}><img style={{"height":"35px", "width":"35px" }} src="/sendLogo.png" alt="" /></button>
      </div>
    </div>
  );
};

export default ChatBot;
