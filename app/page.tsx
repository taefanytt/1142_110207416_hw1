"use client"
import Image from "next/image"
import Link from "next/link" // 1. 引入 Link 元件

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. 首頁專屬背景 */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/tulip_new.jpg" 
          alt="My Tulip Garden" 
          fill 
          className="object-cover opacity-50 blur-[30px] scale-110" 
          priority
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* 2. 主標題 */}
      <header className="relative animate-in fade-in zoom-in duration-1000 flex flex-col items-center">
        <p className="text-[10px] font-black tracking-[0.8em] text-[#344E41]/40 uppercase mb-10 opacity-80">
          Down the Rabbit Hole
        </p>

        <div className="relative">
          <h1 className="text-center select-none uppercase tracking-tighter"
              style={{ color: "#344E41", filter: "drop-shadow(8px 8px 0px #FEE440)" }}>
            <span className="block text-[130px] md:text-[180px] font-black leading-[0.75] -rotate-2">
              Tiff's
            </span>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="h-[1px] w-16 bg-[#344E41]/20" />
              <span className="text-[36px] md:text-[50px] font-medium tracking-[0.4em] text-[#344E41]/80">
                Garden
              </span>
              <div className="h-[1px] w-16 bg-[#344E41]/20" />
            </div>
          </h1>
          <span className="absolute -top-10 -right-12 text-5xl text-[#FF7EB9]/40 animate-pulse hidden md:block">✿</span>
        </div>
      </header>

      {/* 3. 進入按鈕 (加上 Link) */}
      <div className="absolute bottom-24">
        <Link href="/about" className="group cursor-pointer block relative active:scale-95 transition-transform">
          <div className="relative">
            {/* 按鈕文字 */}
            <p className="font-black text-[11px] md:text-[12px] text-white bg-[#344E41] px-10 md:px-14 py-4 rounded-full tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-300 group-hover:bg-[#FEE440] group-hover:text-[#344E41] shadow-[10px_10px_0px_rgba(52,78,65,0.1)]">
              Open the Door
            </p>
            {/* 裝飾小圓點 */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF7EB9] rounded-full border-[3px] border-white shadow-[2px_2px_0px_black] group-hover:rotate-[360deg] transition-transform duration-500" />
          </div>
        </Link>
      </div>
    </div>
  );
}