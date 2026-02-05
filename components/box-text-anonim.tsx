"use client"

import { useState } from "react"
import { Send, ChevronRight, X } from "lucide-react"
import { ChatAnonim } from "./chat-anonim"

export function BoxTextAnonim() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <div className="glass-box p-[10%] h-auto w-full mt-[5%]">
          <div className="flex justify-between">
            <Send className="w-6 h-6 text-white" />
            <ChevronRight className="h-3 w-3 text-white" />
          </div>
          <h1 className="capitalize text-white text-left pr-5 text-base font-semibold mt-5">
            Text Anonim
          </h1>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="chat-modal relative w-[90%] max-w-lg p-4 z-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mt-6">
              <ChatAnonim />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
