import { useEffect } from "react";

type KeyPressHandler = {
  key: string;
  handler: () => void;
  ctrlKey?: boolean;
};

const useKeyPress = (keyPressHandlers: KeyPressHandler[]) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      keyPressHandlers.forEach(({ key, handler, ctrlKey }) => {
        if (
          event.key.toLowerCase() === key.toLowerCase() &&
          ctrlKey === event.ctrlKey // This ensures Ctrl must be pressed
        ) {
          handler();
        }
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyPressHandlers]);
};

export default useKeyPress;
