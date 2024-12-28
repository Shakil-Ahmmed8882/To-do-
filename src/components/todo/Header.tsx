// import { useRef, useState } from "react"
// import { Button } from "../ui/button"
// import AddTodoModal from "./AddTodoModal"
// import TodoFilter from "./TodoFilter"
// import ShortcutModal from "./ShortcutModel"
// import { motion } from "framer-motion"
// import useKeyPress from "../../hooks/useCustomKeyPress"
// import { Search, Keyboard } from 'lucide-react'

// type THeaderParams = {
//   priority: string
//   setPriority: React.Dispatch<React.SetStateAction<string>>
//   setSearch: (param: string) => void
// }

// const Header = ({ priority, setPriority, setSearch }: THeaderParams): JSX.Element => {
//   const inputRef = useRef<HTMLInputElement>(null)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false)
//   const [isShortcutModalOpen, setIsShortcutModalOpen] = useState(false)

//   const keyPressHandlers = [
//     {
//       key: 'm',
//       ctrlKey: true,
//       handler: () => {
//         if (inputRef.current) {
//           inputRef.current.focus()
//         }
//       }
//     },
//     {
//       key: 'Escape',
//       handler: () => {
//         if (inputRef.current) {
//           inputRef.current.blur()
//           inputRef.current.value = ""
//           setSearch("")
//         }
//       }
//     },
//     {
//       key: 'a',
//       ctrlKey: true,
//       handler: () => {
//         setIsAddModalOpen(true)
//       }
//     }
//   ]

//   useKeyPress(keyPressHandlers)

//   return (
//     <motion.div 
//       className="flex mb-1 gap-2 items-center" 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ duration: 0.5 }}
//     >
//       <Button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2">
//         <span>Add Todo</span>
//         <span className="text-xs opacity-50">(Ctrl+A)</span>
//       </Button>
//       <AddTodoModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
//       <TodoFilter priority={priority} setPriority={setPriority} />
//       <Button onClick={() => setIsShortcutModalOpen(true)} className="flex items-center gap-2">
//         <Keyboard size={16} />
//         <span>Shortcuts</span>
//       </Button>
//       <ShortcutModal isOpen={isShortcutModalOpen} onClose={() => setIsShortcutModalOpen(false)} />
//       <div className="relative flex-grow">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//         <motion.input
//           ref={inputRef}
//           placeholder="Search todos..."
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full bg-gray-800 text-white px-10 py-2 rounded-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">Ctrl+M</span>
//       </div>
//     </motion.div>
//   )
// }

// export default Header



import { useRef, useState } from "react"
import { Button } from "../ui/button"
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter"
import SettingsModal from "./SettingModal"
import { motion } from "framer-motion"
import useKeyPress from "../../hooks/useCustomKeyPress"
import { Settings } from 'lucide-react'

type THeaderParams = {
  priority: string
  setPriority: React.Dispatch<React.SetStateAction<string>>
  setSearch: (param: string) => void
}

const Header = ({ priority, setPriority, setSearch }: THeaderParams): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const keyPressHandlers = [
    {
      key: 'm',
      ctrlKey: true,
      handler: () => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    },
    {
      key: 'Escape',
      handler: () => {
        if (inputRef.current) {
          inputRef.current.blur()
          inputRef.current.value = ""
          setSearch("")
        }
      }
    },
    {
      key: 'a',
      ctrlKey: true,
      handler: () => {
        setIsAddModalOpen(true)
      }
    }
  ]

  useKeyPress(keyPressHandlers)

  return (
    <motion.div 
      className="flex mb-1 gap-2" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <Button onClick={() => setIsAddModalOpen(true)}>Add Todo</Button>
      <AddTodoModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <TodoFilter priority={priority} setPriority={setPriority} />
      <Button onClick={() => setIsSettingsOpen(true)} variant="outline" className="bg-[black] text-white hover:bg-[#1e1e1e] hover:text-[white]">
        <Settings className="w-4 h-4" />
      </Button>
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
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
  )
}

export default Header

