"use client"

import { useState, useRef, useEffect } from "react"
import { Send, User } from "lucide-react"


type Message = {
  id: string
  message: string
  sender: {
    image: string
  }
  timestamp: Date
}

// Demo messages for preview (Firebase not connected)
const demoMessages: Message[] = [
  {
    id: "1",
    message: "Halo semua!",
    sender: { image: "/AnonimUser.png" },
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Selamat datang di kelas XII TKJ 3",
    sender: { image: "/AnonimUser.png" },
    timestamp: new Date(),
  },
  {
    id: "3",
    message: "Website keren banget!",
    sender: { image: "/AnonimUser.png" },
    timestamp: new Date(),
  },
]

export function ChatAnonim() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>(demoMessages)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (message.trim() !== "") {
      const newMessage: Message = {
        id: Date.now().toString(),
        message: message.trim().substring(0, 60),
        sender: { image: "/AnonimUser.png" },
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="text-white">
      <div className="text-center text-4xl font-semibold text-glow">Text Anonim</div>

      <div
        className="mt-5 glass-box rounded-2xl p-4 h-[40vh] overflow-y-auto overflow-y-scroll-no-thumb"
      >
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start text-sm py-2">
            <div className="w-7 h-7 mr-2 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="relative top-[0.30rem]">{msg.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="glass-box rounded-full flex items-center mt-5 px-4 py-3">
        <input
          className="bg-transparent flex-grow pr-4 w-4 placeholder:text-white placeholder:opacity-60 outline-none text-white"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ketik pesan Anda..."
          maxLength={60}
        />
        <button onClick={sendMessage} className="ml-2 hover:opacity-80 transition-opacity">
          <Send className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  )
}
