"use client"

const scheduleData: Record<string, { subject: string; time: string; isBreak?: boolean }[]> = {
  Monday: [
    { subject: "Dasar Desain Grafis", time: "08.00-09.20" },
    { subject: "Istirahat", time: "09.20-10.00", isBreak: true },
    { subject: "Dasar Desain Grafis", time: "10.00-11.00" },
    { subject: "TJKT Cloud - NAS", time: "11.00-12.20" },
    { subject: "Istirahat", time: "12.20-13.20", isBreak: true },
    { subject: "Bimbingan Konseling", time: "13.20-14.40" },
  ],
  Tuesday: [
    { subject: "Matematika", time: "08.00-09.20" },
    { subject: "Istirahat", time: "09.20-10.00", isBreak: true },
    { subject: "Bahasa Indonesia", time: "10.00-11.20" },
    { subject: "Istirahat", time: "11.20-12.20", isBreak: true },
    { subject: "Pendidikan Agama", time: "12.20-14.00" },
  ],
  Wednesday: [
    { subject: "TJKT Jaringan", time: "08.00-09.20" },
    { subject: "Istirahat", time: "09.20-10.00", isBreak: true },
    { subject: "TJKT Jaringan", time: "10.00-12.00" },
    { subject: "Istirahat", time: "12.00-13.00", isBreak: true },
    { subject: "PKK", time: "13.00-14.40" },
  ],
  Thursday: [
    { subject: "Bahasa Inggris", time: "08.00-09.20" },
    { subject: "Istirahat", time: "09.20-10.00", isBreak: true },
    { subject: "PPKN", time: "10.00-11.20" },
    { subject: "Istirahat", time: "11.20-12.20", isBreak: true },
    { subject: "Sejarah Indonesia", time: "12.20-14.00" },
  ],
  Friday: [
    { subject: "Olahraga", time: "08.00-09.30" },
    { subject: "Istirahat", time: "09.30-10.00", isBreak: true },
    { subject: "Seni Budaya", time: "10.00-11.30" },
  ],
}

const piketGroups: Record<string, string[]> = {
  Monday: ["Amel", "Helmalia", "Fadli I", "Shera", "Nicollas"],
  Tuesday: ["Windi", "Lista", "Jeriko", "Pratiwi", "Damar"],
  Wednesday: ["Putri", "Paulista", "Firdaus", "Attala", "Ardian"],
  Thursday: ["Cariska", "Nila", "Wahid", "Togi", "Annisa"],
  Friday: ["Sultan", "Zaini", "Fajri", "Arif"],
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function Schedule() {
  const currentDay = daysOfWeek[new Date().getDay()]
  const todaySchedule = scheduleData[currentDay] || []
  const todayPiket = piketGroups[currentDay] || []

  return (
    <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16">
      {/* Schedule */}
      <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
        <div className="text-2xl font-medium mb-5">{currentDay}</div>
        <div>
          {todaySchedule.length > 0 ? (
            todaySchedule.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.isBreak ? "opacity-60" : "border-t-2 border-white"
                } ${
                  index === todaySchedule.length - 1 && !item.isBreak ? "border-b-2" : ""
                } flex justify-between py-[0.50rem] w-72 px-3`}
              >
                <div className="w-[50%] text-base font-medium">{item.subject}</div>
                <div className="flex justify-center items-center text-sm">{item.time}</div>
              </div>
            ))
          ) : (
            <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
          )}
        </div>
      </div>

      {/* Piket */}
      <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
        <div className="text-2xl font-medium mb-5 text-center">Piket</div>
        {todayPiket.length > 0 ? (
          todayPiket.map((name, index) => (
            <div
              key={index}
              className={`border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                index === todayPiket.length - 1 ? "border-b-2" : ""
              }`}
            >
              <div className="text-base font-medium">{name}</div>
            </div>
          ))
        ) : (
          <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
        )}
      </div>
    </div>
  )
}
