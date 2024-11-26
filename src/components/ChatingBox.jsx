import React from "react";
import styles from "../styles/ChatingBox.module.css";

const ChatingBox = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default ChatingBox;
