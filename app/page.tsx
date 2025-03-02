"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {



  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('Service worker registered.', reg))
          .catch(err => console.log('Service worker registration failed:', err));
      });
    }
  }, [])

 


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div><h1>Offline</h1></div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
       
   
      </main>
   
    </div>
  );
}
