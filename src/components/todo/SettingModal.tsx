import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings2, Moon, Bell, Layout, Key, Trash2, Download, Info } from 'lucide-react'
import { useState } from 'react'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

type Section = 'general' | 'appearance' | 'notifications' | 'data' | 'shortcuts' | 'about'

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<Section>('general')

  const navigationItems = [
    { id: 'general' as Section, label: 'General', icon: Settings2 },
    { id: 'appearance' as Section, label: 'Appearance', icon: Moon },
    { id: 'notifications' as Section, label: 'Notifications', icon: Bell },
    { id: 'data' as Section, label: 'Data Management', icon: Layout },
    { id: 'shortcuts' as Section, label: 'Shortcuts', icon: Key },
    { id: 'about' as Section, label: 'About', icon: Info },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
          <Dialog.Portal>   
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[900px] h-[600px] bg-gray-900 rounded-lg shadow-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex h-full"
              >
                {/* Sidebar */}
                <div className="w-64 border-r border-gray-800 p-4">
                  <div className="space-y-1">
                    {navigationItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-left transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <item.icon size={18} />
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      {navigationItems.find((item) => item.id === activeSection)?.label}
                    </h2>
                    <Dialog.Close asChild>
                      <button className="text-gray-400 hover:text-white">
                        <X size={24} />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Settings Content */}
                  <div className="space-y-6">
                    {activeSection === 'general' && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-400">Default Priority</label>
                          <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-400">Todo Sort Order</label>
                          <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                            <option value="priority">Priority</option>
                            <option value="date">Date Created</option>
                            <option value="alphabetical">Alphabetical</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {activeSection === 'appearance' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Dark Mode</span>
                          <div className="w-11 h-6 bg-gray-700 rounded-full relative">
                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-400">Accent Color</label>
                          <div className="flex gap-2">
                            {['blue', 'purple', 'green', 'red'].map((color) => (
                              <button
                                key={color}
                                className={`w-8 h-8 rounded-full bg-${color}-500`}
                                aria-label={`${color} theme`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === 'data' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Download size={20} className="text-gray-400" />
                            <div>
                              <h3 className="text-white">Export Data</h3>
                              <p className="text-sm text-gray-400">Download all your todos as JSON</p>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Export
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Trash2 size={20} className="text-red-400" />
                            <div>
                              <h3 className="text-white">Clear All Data</h3>
                              <p className="text-sm text-gray-400">Remove all todos and settings</p>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                            Clear
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Add more section content as needed */}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  )
}

export default SettingsModal

