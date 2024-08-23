import { useRef, useState } from "react";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { motion } from "framer-motion";
import useKeyPress from "../../hooks/useCustomKeyPress";

type THeaderParams = {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  setSearch: (param: string) => void;
};

const Header = ({ priority, setPriority, setSearch }: THeaderParams): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyPressHandlers = [
    {
      key: 'm',
      ctrlKey: true,
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
        }
      }
    },
    {
      key: 'a',
      ctrlKey: true,
      handler: () => {
        setIsModalOpen(true);
      }
    }
  ];

  useKeyPress(keyPressHandlers);

  return (
    <motion.div className="flex mb-1 gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <AddTodoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <TodoFilter priority={priority} setPriority={setPriority} />
      <Button onClick={() => setIsModalOpen(true)}>Shortcut</Button>
      <motion.input
        ref={inputRef}
        placeholder="search.."
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[black] focus-within:outline-none text-[white] px-3 rounded-full placeholder:text-[white]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Header;