import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider"

function ToastShelf() {

  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map((obj) => {
        return (
          <li key={obj.id} className={styles.toastWrapper}>
            <Toast id={obj.id} variant={obj.variant}>
              {obj.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
