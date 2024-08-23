import { useRef, useState } from "react";
import useKeyPress from "../../hooks/useKeyPress";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";

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

  // Focus on the input when the "s" key is pressed
  useKeyPress('s', () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  // Remove focus, clear the input, and reset search state when the "Escape" key is pressed
  useKeyPress('Escape', () => {
    if (inputRef.current) {
      inputRef.current.blur();
      inputRef.current.value = "";
      setSearch("");
    }
  });

  // Open the AddTodoModal when the "a" key is pressed
  useKeyPress('a', () => {
    setIsModalOpen(true);
  });

  return (
    <div className="flex mb-1 gap-2">

      <Button onClick={() => setIsModalOpen(true)}>Add todo</Button>
      <TodoFilter priority={priority} setPriority={setPriority} />
      <Button onClick={() => setIsModalOpen(true)}>Shortcut</Button>
      <input
        ref={inputRef}
        placeholder="search.."
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[black] focus-within:outline-none text-[white] px-3 rounded-full placeholder:text-[white]"
      />
      <AddTodoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;
