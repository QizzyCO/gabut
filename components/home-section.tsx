"use client"

import { Navbar } from "./navbar"
import { BoxClassIg } from "./box-class-ig"
import { BoxOldWeb } from "./box-old-web"
import { BoxTextAnonim } from "./box-text-anonim"

export function HomeSection() {
  return (
    <div className="text-white px-[10%] home-section" id="home">
      <Navbar />
      
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="font-bold text-5xl text-center py-20">XII TKJ 3</div>
        <div className="glass-box flex justify-between px-10 text-4xl font-bold py-2 relative rounded-3xl mb-8">
          <div className="gradient-blue flex items-center justify-center">25</div>
          <div className="">
            <span className="gradient-blue text-5xl">3</span>
            <span className="gradient-pink text-5xl">7</span>
          </div>
          <div className="gradient-pink flex items-center justify-center">12</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-7 md:gap-5 pb-20">
          <div className="grid gap-2 md:gap-0 md:grid-cols-1">
            <BoxClassIg />
          </div>
          <div className="grid gap-2 md:gap-0 md:grid-cols-1">
            <BoxOldWeb />
            <BoxTextAnonim />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="flex justify-center items-center flex-col h-[100vh]">
          <h5 className="text-[1.4rem] font-semibold">hai teman!</h5>
          <h1 className="text-7xl font-extrabold text-glow">WELCOME</h1>
          <h6 className="text-sm" style={{ letterSpacing: "5px" }}>
            TO XII TKJ 3
          </h6>
        </div>
      </div>
    </div>
  )
}
