import { Instagram, ChevronRight } from "lucide-react"
import Link from "next/link"

export function BoxClassIg() {
  return (
    <div className="glass-box p-[10%] h-auto w-full mt-[5%] relative min-h-[140px]">
      <Link href="https://www.instagram.com/acetkjthree/?hl=id" target="_blank">
        <div className="flex justify-between relative">
          <Instagram className="w-10 h-10 text-white" />
          <ChevronRight className="h-4 w-4 text-white" />
        </div>
        <h1 className="text-white text-lg font-semibold pr-3 mt-3 absolute bottom-10">
          Class Instagram
        </h1>
        <div className="text-white flex py-2 opacity-60 absolute bottom-1 text-xs">
          View More
        </div>
      </Link>
    </div>
  )
}
