import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "XII TKJ 3",
  description:
    "Selamat datang di halaman resmi kelas XII TKJ 3 SMK Persada Husada Indonesia! Mari mengenal lebih dekat tentang kami, siswa-siswi kelas XII TKJ 3, yang tertarik pada Teknik Komputer dan Jaringan.",
  openGraph: {
    type: "website",
    url: "https://xitkj3.vercel.app/",
    title: "XII TKJ 3",
    description:
      "Selamat datang di halaman resmi kelas XII TKJ 3 SMK Persada Husada Indonesia! Mari mengenal lebih dekat tentang kami, siswa-siswi kelas XII TKJ 3, yang tertarik pada Teknik Komputer dan Jaringan.",
    images: ["https://xitkj3.vercel.app/Welcome.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "XII TKJ 3",
    description:
      "Selamat datang di halaman resmi kelas XII TKJ 3 SMK Persada Husada Indonesia! Mari mengenal lebih dekat tentang kami, siswa-siswi kelas XII TKJ 3, yang tertarik pada Teknik Komputer dan Jaringan.",
    images: ["https://xitkj3.vercel.app/Welcome.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
