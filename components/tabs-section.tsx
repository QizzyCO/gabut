"use client"

import { useState } from "react"
import { StrukturKelas } from "./struktur-kelas"
import { Schedule } from "./schedule"

export function TabsSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="md:px-[10%] md:mt-5 mt-8 tabs-bg" id="tabs">
      <div className="font-medium text-[1.6rem] md:text-[1.8rem] relative md:top-[2.8rem] top-[2.7rem] text-center text-white text-glow">
        &
      </div>
      
      <div className="w-full">
        {/* Tabs */}
        <div className="flex justify-center mt-16 gap-4 px-[10%]">
          <button
            onClick={() => setActiveTab(0)}
            className={`text-white text-[1.5rem] font-medium px-4 py-2 transition-all border-b-2 ${
              activeTab === 0 ? "border-white text-glow" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            Structure
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`text-white text-[1.5rem] font-medium px-4 py-2 transition-all border-b-2 ${
              activeTab === 1 ? "border-white text-glow" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            Schedule
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 0 && <StrukturKelas />}
          {activeTab === 1 && <Schedule />}
        </div>
      </div>
    </div>
  )
}
