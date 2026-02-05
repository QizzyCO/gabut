"use client"

function BorderStruktur({
  jabatan,
  nama,
  width = "120px",
}: {
  jabatan?: string
  nama: string
  width?: string
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      {jabatan && <div className="text-white text-sm mb-1">{jabatan}</div>}
      <div
        className="bg-white text-black rounded-3xl text-[0.8rem] px-2 py-[0.30rem] text-center font-semibold"
        style={{ width }}
      >
        {nama}
      </div>
    </div>
  )
}

function VerticalLine({ className = "" }: { className?: string }) {
  return (
    <div className={`w-0.5 h-8 bg-white/60 ${className}`} />
  )
}

function HorizontalLine({ className = "" }: { className?: string }) {
  return (
    <div className={`h-0.5 w-16 bg-white/60 ${className}`} />
  )
}

function CircleDot({ className = "" }: { className?: string }) {
  return (
    <div className={`w-3 h-3 rounded-full bg-white ${className}`} />
  )
}

export function StrukturKelas() {
  return (
    <div className="z-1 relative h-auto overflow-hidden px-4 pb-20">
      {/* Wali Kelas */}
      <div className="flex flex-col items-center mt-14 md:mt-10">
        <BorderStruktur jabatan="Wali Kelas" nama="Abdul Wahab S.Pdi" width="150px" />
        
        <VerticalLine className="my-2" />
        
        {/* Ketua & Wakil */}
        <div className="flex items-center gap-4 lg:gap-16 mt-2">
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Ketua Kelas" nama="Putry" width="120px" />
          </div>
          <HorizontalLine className="w-24 lg:w-48" />
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Wakil Ketua" nama="Jeriko" width="120px" />
          </div>
        </div>

        <VerticalLine className="my-4 h-12" />

        {/* Sekretaris & Bendahara */}
        <div className="flex items-start gap-4 lg:gap-16 mt-2">
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Sekertaris" nama="Pratiwi" width="120px" />
            <div className="py-2" />
            <BorderStruktur nama="Paulista" width="120px" />
          </div>
          <HorizontalLine className="w-24 lg:w-48 mt-1" />
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Bendahara" nama="Lista" width="120px" />
            <div className="py-2" />
            <BorderStruktur nama="Davina" width="120px" />
          </div>
        </div>

        <VerticalLine className="my-4 h-12" />

        {/* Keamanan, Kebersihan, Kesehatan */}
        <div className="flex items-start gap-4 lg:gap-8 mt-2 flex-wrap justify-center">
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Keamanan" nama="Damar" width="120px" />
            <div className="py-2" />
            <BorderStruktur nama="Windi" width="120px" />
          </div>
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Kebersihan" nama="Jeriko" width="120px" />
            <div className="py-2" />
            <BorderStruktur nama="Raka" width="120px" />
          </div>
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Kesehatan" nama="Eki" width="120px" />
            <div className="py-2" />
            <BorderStruktur nama="Hendri" width="120px" />
          </div>
        </div>

        <VerticalLine className="my-4 h-12" />

        {/* Peralatan */}
        <div className="flex items-start gap-4 lg:gap-16 mt-2">
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Peralatan" nama="Fajri" width="120px" />
          </div>
          <HorizontalLine className="w-24 lg:w-48 mt-1" />
          <div className="flex flex-col items-center">
            <CircleDot />
            <VerticalLine className="h-4" />
            <BorderStruktur jabatan="Peralatan" nama="Windi" width="120px" />
          </div>
        </div>

        <VerticalLine className="my-4 h-12" />

        {/* Peralatan Tambahan */}
        <div className="flex flex-col items-center mt-2">
          <CircleDot />
          <VerticalLine className="h-4" />
          <BorderStruktur jabatan="Peralatan" nama="Fadly" width="120px" />
        </div>
      </div>
    </div>
  )
}
