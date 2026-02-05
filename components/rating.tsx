"use client"

import { useState } from "react"
import { Star } from "lucide-react"

const ratingEmojis = ["😢", "😕", "😐", "🙂", "😊"]

export function Rating() {
  const [value, setValue] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (newValue: number) => {
    if (!isSubmitting) {
      setValue(newValue)
    }
  }

  const emojiIndex = Math.min(Math.floor(value / 2), ratingEmojis.length - 1)

  return (
    <div className="w-full max-w-[200px]">
      <div className="flex justify-between text-white relative mb-2">
        <div className="font-bold text-xs">RATE US</div>
        <div className="font-bold text-xs">{value.toFixed(1)}</div>
      </div>
      
      <div className="flex justify-center mb-3">
        <span className="text-4xl filter brightness-0 invert">{ratingEmojis[emojiIndex]}</span>
      </div>
      
      <div className="flex gap-1 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            onClick={() => handleChange(star)}
            className="transition-transform hover:scale-110"
            disabled={isSubmitting}
          >
            <Star
              className={`w-4 h-4 ${
                star <= value
                  ? "fill-white text-white"
                  : "text-white/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
