// hooks/useCustomKeyPress.ts
import { useEffect } from "react";

type KeyPressHandler = {
  key: string;
  handler: () => void;
};

const useCustomKeyPress = (keyPressHandlers: KeyPressHandler[]) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      keyPressHandlers.forEach(({ key, handler }) => {
        if (event.key === key) {
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

export default useCustomKeyPress;
