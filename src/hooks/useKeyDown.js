import React from "react";

function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleKey(event) {
      if (event.key === key) {
        callback(event);
      }
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [key, callback]);
}

export default useKeyDown;
