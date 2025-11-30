"use client"
import { useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(1500);
  
  return (
    <div className="flex flex-col h-screen font-sans bg-[#dad7cd]">

      {/* Header */}
      <div className="p-7 font-bold text-xl gap-4 flex justify-between bg-[#a3b18a] text-[#3a5a40] px-[3%]" >
        <h1 className="p-2 text-[#344e41]">Tomodoro</h1>
        <button className="border-2 rounded-lg p-2 bg-[#588157] text-[#dad7cd] border-[#344e41]">Login</button>
      </div>

      {/* Middle - Timer */}
      <div className="flex-1 flex items-center justify-center">
        <div className="border-4 border-[#344e41] p-8 rounded-lg">
          <h1 className="text-8xl font-bold text-[#3a5a40]">25:00</h1>
        </div>
      </div>

      {/* Controls */}
      <div className="flex p-8 justify-center items-center space-apart gap-4">
        <button className="font-bold text-xl bg-[#588157] text-[#dad7cd] p-4 rounded-lg">Start</button>
    </div>

      {/* Details Section */}
      <div className="flex flex-col items-center bg-[#344e41]">
        <h1 className="text-[#dad7cd] p-10 text-xl max-w-4xl">A pomodoro timer to improve focus, track productivity and improve results!</h1>
    </div>
    </div>
  )
}