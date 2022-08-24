import styles from "./DeleteVerificationOverlay.module.css";
import { useState } from "react";

function DeleteVerificationOverlay({ setShowOverlay, setContent }) {
  const confirmHandler = () => {
    setShowOverlay(false);
    setContent([]);
  };
  const declineHandler = () => {
    setShowOverlay(false);
  };
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlay}>
        <h2>Are you sure you want to delete all the content?</h2>
        <div className={styles.buttons}>
          <button onClick={confirmHandler}>Yes</button>
          <button onClick={declineHandler}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteVerificationOverlay;
