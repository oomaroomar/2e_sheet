"use client"

import LoginForm from "@/components/FormComponents/LoginForm";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen w-screen flex place-items-center text-black" >
      <div className="flex-1 flex place-items-center">
        <LoginForm/>
      </div>
      <div className="flex-1 flex gap-10 flex-wrap place-content-center ">
        <button onClick={() => {
          console.log('history', window.history)
          router.push('/spells/wizard')}} className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">Wizard</button>
        <button onClick={() => router.push('/spells')} className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">All</button>
        <button  onClick={() => router.push('/spells/priest')} className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl" >Cleric</button>
      </div>
      <div className="flex-1 flex gap-10 flex-wrap place-content-center ">
        <button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl" >Admin</button>
      </div>
    </div>
  );
}
