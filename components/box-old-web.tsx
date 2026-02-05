import { Link2, ChevronRight } from "lucide-react"
import Link from "next/link"

export function BoxOldWeb() {
  return (
    <div className="glass-box p-[10%] h-auto w-full mt-[5%]">
      <Link href="https://base.xtkj3phi.repl.co/" target="_blank">
        <div className="flex justify-between">
          <Link2 className="w-6 h-6 text-white" />
          <ChevronRight className="h-3 w-3 text-white" />
        </div>
        <h1 className="text-white text-base font-semibold pr-0 mt-5">Old Website</h1>
      </Link>
    </div>
  )
}
