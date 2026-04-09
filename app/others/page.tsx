"use client"
import Image from "next/image"

export default function Others() {
  const items = [
    { 
      title: "Reading List", 
      desc: "Books that shaped my thoughts and sparked new ideas this year.", 
      color: "#FF7EB9", 
      images: ["/book-1.jpg", "/book-2.jpg", "/book-3.jpg", "/book-4.jpg"] 
    },
    { 
      title: "Series & Movies", 
      desc: "A collection of stories and visual journeys from the screen.", 
      color: "#70D6FF", 
      images: ["/drama-1.jpg", "/drama-2.jpg", "/drama-3.jpg", "/drama-4.jpg"] 
    },
    { 
      title: "Music & Albums", 
      desc: "Soundtracks of my daily life and the melodies I keep on repeat.", 
      color: "#FEE440", 
      images: ["/music-1.jpg", "/music-2.jpg", "/music-3.jpg", "/music-4.jpg"] 
    },
  ];

  return (
    <div className="relative min-h-full w-full"> 
      
      {/* --- 全局背景圖 --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image 
          src="/tulip_new.jpg" 
          alt="background" 
          fill 
          className="object-cover opacity-[0.15] blur-[20px] scale-110" 
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-10 animate-in fade-in duration-1000">
        
        {/* --- 1. 頂部標題區 --- */}
        <header className="mb-20 border-b-2 border-black pb-8">
          <h1 className="text-7xl font-black tracking-tighter text-black uppercase mb-4">
            Others ✿
          </h1>
          <div className="space-y-2">
            <p className="text-[15px] text-gray-800 leading-relaxed max-w-2xl font-bold italic">
              Lifestyle / Inspiration / A collection of moments from 2026.
            </p>
          </div>
        </header>

        {/* --- 2. 橫向滑動卡片區 --- */}
        <div className="relative z-20 flex gap-12 overflow-x-auto pb-24 no-scrollbar snap-x snap-mandatory">
          {items.map((item, index) => (
            <div key={index} className="flex-none w-[340px] md:w-[420px] snap-center">
              
              <div className="bg-white border-[3px] border-black rounded-[32px] p-8 shadow-[10px_10px_0px_black] h-[600px] flex flex-col">
                
                {/* 標題區：彩色點點移到標題前方 */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3.5 h-3.5 rounded-full shadow-[2px_2px_0px_black]" style={{ backgroundColor: item.color }} />
                  <h3 className="text-3xl font-black text-black tracking-tight">{item.title}</h3>
                </div>

                {/* 圖片展示區：四格網格 */}
                <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
                  {item.images.slice(0, 4).map((imgSrc, imgIdx) => (
                    <div 
                      key={imgIdx} 
                      className="relative w-full h-full rounded-xl overflow-hidden bg-gray-50"
                    >
                      <Image 
                        src={imgSrc} 
                        alt="collection" 
                        fill 
                        className="object-cover" 
                        unoptimized 
                      />
                    </div>
                  ))}
                </div>

                {/* 底部描述內容 */}
                <div className="mt-8 border-t-[1.5px] border-black/5 pt-6">
                  <p className="text-[14px] text-gray-500 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* 只保留三個點點 */}
                  <div className="flex justify-center gap-1.5 mt-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/10" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 結尾符號 */}
          <div className="flex-none w-[100px] flex items-center justify-center">
             <div className="w-[2px] h-32 bg-black/5 rounded-full" />
          </div>
        </div>

        <footer className="mt-12 text-center border-t border-black/5 pt-12 pb-10">
          <p className="text-[10px] text-gray-300 font-bold tracking-[0.5em] uppercase">
            Tiff&apos;s Lifestyle Archive ✿ 2026
          </p>
        </footer>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}