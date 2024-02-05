import React from 'react';
import useEscapeKey from '../../hooks/useKeyDown';
import useKeyDown from '../../hooks/useKeyDown';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown("Escape", handleEscape);


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
