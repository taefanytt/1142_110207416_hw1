"use client"
import Image from "next/image"

export default function Home() {
  return (
    // justify-start + pt-32 讓整體內容上移到背景中湖泊的位置
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start pt-45 overflow-hidden">
      
      {/* 滿版背景圖片 */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/bg.jpg" 
          alt="Tulip Background" 
          fill 
          className="object-cover brightness-105" 
          priority
        />
        {/* 輕微的明亮度調整，確保標題突出 */}
        <div className="absolute inset-0 bg-white/5" /> 
      </div>

      {/* 主標題：套用 Bubblegum 字體、白色描邊與白色硬陰影 */}
      <div className="relative animate-in fade-in zoom-in duration-1000 scale-90 md:scale-80">
        <h1 
          className="font-bubble text-[120px] md:text-[160px] font-black leading-[0.75] tracking-tighter uppercase text-center select-none"
          style={{
            color: "#FEE440", 
            // 白色粗描邊：增加圓潤感
            WebkitTextStroke: "1px #e6465c",
            // 白色硬邊陰影：營造泡泡糖貼紙的厚度立體感
            filter: "drop-shadow(10px 10px 0px #e6465c)"
          }}
        >
          <span className="block">Tiff's</span>
          <span className="block">Garden</span>
        </h1>
      </div>

      {/* 底部裝飾 */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <p className="font-bold text-lg text-black bg-[#FEE440] border-2 border-black px-6 py-2 rotate-[-2deg] shadow-[4px_4px_0px_black]">
          WELCOME TO MY PAGE ✿
        </p>
      </div>

    </div>
  );
}