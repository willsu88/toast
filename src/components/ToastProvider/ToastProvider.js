import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const toast = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
    };
    setToasts([...toasts, toast]);
  }

  function dismissToast(id) {
    console.log("called");
    const newToasts = toasts.filter((item) => item.id !== id);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{toasts, addToast, dismissToast}}>
        {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
