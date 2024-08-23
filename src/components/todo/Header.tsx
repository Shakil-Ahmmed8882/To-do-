import { useRef, useState } from "react";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import useCustomKeyPress from "../../hooks/useCustomKeyPress";

type THeaderParams = {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  setSearch: (param: string) => void;
};

const Header = ({
  priority,
  setPriority,
  setSearch,
}: THeaderParams): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define key press handlers
  const keyPressHandlers = [
    {
      key: 's',
      handler: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    },
    {
      key: 'Escape',
      handler: () => {
        if (inputRef.current) {
          inputRef.current.blur();
          inputRef.current.value = "";
          setSearch("");
          setPriority("");
        }
      }
    },
    {
      key: 'a',
      handler: () => {
        setIsModalOpen(true);
      }
    }
  ];

  // Use the custom hook
  useCustomKeyPress(keyPressHandlers);

  return (
    <div className="flex mb-1 gap-2">
      <Button onClick={() => setIsModalOpen(true)}>Add Todo</Button>
      <TodoFilter priority={priority} setPriority={setPriority} />
      <Button onClick={() => setIsModalOpen(true)}>Shortcut</Button>
      <input
        ref={inputRef}
        placeholder="search.."
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[black] focus-within:outline-none text-[white] px-3 rounded-full placeholder:text-[white]"
      />
      {/* modal open on add tood */}
      <AddTodoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;