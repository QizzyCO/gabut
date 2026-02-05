"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, User, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Mobile */}
      <div className="flex justify-between relative top-3 lg:hidden">
        <button
          className="w-10 h-10 rounded-full flex justify-center items-center glass-box"
          onClick={toggleMenu}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        <div className={`text-center text-white ${isMenuOpen ? "hidden" : ""}`}>
          <div className="text-[0.7rem]">Hi, visitor!</div>
          <div className="font-bold text-[1rem]">WELCOME</div>
        </div>

        <div className="w-10 h-10 rounded-full flex justify-center items-center glass-box">
          <User className="w-6 h-6 text-white" />
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 glass-box shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <ul className="mt-16 px-4">
            <li className="mb-4">
              <a href="#" className="text-white opacity-80 text-lg font-bold">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#gallery" className="text-white opacity-80 text-lg font-bold">
                Gallery
              </a>
            </li>
            <li>
              <a href="#tabs" className="text-white opacity-80 text-lg font-bold">
                Structure & Schedule
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-between relative top-3">
        <div>
          <Image
            src="/LogoPHI.png"
            width={48}
            height={48}
            alt="Logo PHI"
            className="rounded-full"
          />
        </div>
        <ul className="mt-2 flex gap-5">
          <li className="mb-4">
            <a href="#" className="text-white opacity-80 text-[1rem] font-semibold hover:opacity-100 transition-opacity">
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#gallery" className="text-white opacity-80 text-[1rem] font-semibold hover:opacity-100 transition-opacity">
              Gallery
            </a>
          </li>
          <li>
            <a href="#tabs" className="text-white opacity-80 text-[1rem] font-semibold hover:opacity-100 transition-opacity">
              Structure & Schedule
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
