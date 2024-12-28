import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const shortcuts = [
  { key: 'Ctrl + M', description: 'Focus search input' },
  { key: 'Ctrl + A', description: 'Open Add Todo modal' },
  { key: 'Esc', description: 'Clear search input' },
]

interface ShortcutModalProps {
  isOpen: boolean
  onClose: () => void
}

const ShortcutModal: React.FC<ShortcutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-6 rounded-lg shadow-xl w-96">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Dialog.Title className="text-2xl font-bold mb-4">Keyboard Shortcuts</Dialog.Title>
                <div className="space-y-4">
                  {shortcuts.map((shortcut, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-mono bg-gray-800 px-2 py-1 rounded">{shortcut.key}</span>
                      <span>{shortcut.description}</span>
                    </div>
                  ))}
                </div>
                <Dialog.Close asChild>
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  )
}

export default ShortcutModal

