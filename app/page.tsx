"use client"
import { useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(1500);
  
  return (
    <div className="flex flex-col font-sans bg-[#dad7cd]">

      {/* Header */}
      <div className="font-bold text-xl flex justify-between bg-[#a3b18a] text-[#3a5a40] px-[3%] items-center" >
        <h1 className="p-8 text-[#344e41] text-3xl text-italic">tomodoro🕒</h1>
        <div className="flex gap-3">
          <button className="border-2 rounded-md px-3 py-0.5 bg-[#344e41] text-[#dad7cd] border-[#344e41] text-lg">Login</button>

          <button className="border-2 rounded-md px-3 py-0.5 bg-[#344e41] text-[#dad7cd] border-[#344e41] text-lg">Settings</button>
        </div>
      </div>

      {/* Middle - Timer */}
      <div className="p-10 flex-1 flex items-center justify-center">
        <div className="border-4 border-[#344e41] p-8 rounded-lg">
          <h1 className="text-8xl font-bold text-[#3a5a40]">25:00</h1>
        </div>
      </div>

      {/* Controls */}
      <div className="flex py-3 justify-center items-center space-apart gap-4">
        <button className="font-bold text-xl bg-[#588157] text-[#dad7cd] p-4 rounded-lg border-b-4 border-[#344e41] active:border-b-0 active:translate-y-1 active:mb-1 transition-all">Start</button>
      </div>

      {/* Details Section */}
      <div className="flex flex-col bg-[#344e41] p-6">
        <div className="mx-[22%]">
          <h1 className="text-[#dad7cd] text-3xl items-center py-5 font-semibold">A pomodoro timer to improve focus, increase productivity and track results!</h1>

          <h2 className="text-[#dad7cd] text-xl items-left py-2 font-semibold">What is tomodoro?</h2>

          <p className="text-[#a3b18a] text-m items-left">- <strong className="text-[#dad7cd]">tomodoro</strong> is a complete productivity suite built around the <strong className="text-[#dad7cd]">Pomodoro Technique.</strong> Work in focused, custom-length sessions, manage your tasks with an integrated to-do list, and track your progress with detailed productivity graphs. Everything you need to stay focused and get things done.</p>

          <h2 className="text-[#dad7cd] text-xl items-left py-2 font-semibold mt-5">What is the pomodoro technique?</h2>
          
          <p className="text-[#a3b18a] text-m items-left">- The <strong className="text-[#dad7cd]">Pomodoro Technique</strong> breaks work into 25-minute focused intervals separated by short breaks. After four intervals, take a longer break. This simple method helps you stay focused, avoid burnout, and make steady progress on your tasks.</p>
        </div>
    </div>

      {/*footer*/}
      <div className="text-m font-bold flex justify-center gap-10 bg-[#a3b18a] text-[#3a5a40] px-[3%] items-center mx-full py-6">
        <button className="">Home</button>
        <button className="">Terms & Conditions</button>
        <button className="">Contact</button>
    </div>
    </div>
  )
}