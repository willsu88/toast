import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({toasts, handleDismiss}) {

  return (
    <ol className={styles.wrapper}>
      {toasts.map((obj) => {
        return (
          <li key={obj.id} className={styles.toastWrapper}>
            <Toast id={obj.id} variant={obj.variant} handleDismiss={handleDismiss}>
              {obj.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
