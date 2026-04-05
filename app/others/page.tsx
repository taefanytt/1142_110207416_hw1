"use client"
import Image from "next/image"

export default function Others() {
  const items = [
    { title: "2026 看過的書", emoji: "📚", color: "#FF7EB9", list: ["《設計心理學》", "《原子習慣》", "《三體》"] },
    { title: "追過的劇", emoji: "📺", color: "#70D6FF", list: ["《怪奇物語 S5》", "《黑鏡》", "《重啟人生》"] },
    { title: "電影清單", emoji: "🎬", color: "#00F5D4", list: ["《奧本海默》", "《沙丘 2》", "《可憐的東西》"] },
    { title: "音樂清單", emoji: "🎧", color: "#FEE440", list: ["K-Pop Mix", "IVE - Baddie", "Le Sserafim"] },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* 標題區塊 */}
      <div className="flex items-center gap-4">
        <h2 className="text-5xl font-black italic tracking-tighter bg-[#FF7EB9] px-4 py-2 border-[4px] border-black shadow-[6px_6px_0px_black] -rotate-1">
          2026 LOGS
        </h2>
        <p className="font-bold text-sm bg-black text-white px-2 py-1 self-end">Scroll to explore →</p>
      </div>

      {/* 橫向滑動容器 */}
      <div className="flex gap-8 overflow-x-auto pb-10 px-4 scroll-smooth snap-x snap-mandatory no-scrollbar">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex-none w-[300px] md:w-[350px] snap-center"
          >
            <div 
              className="retro-box h-[450px] flex flex-col group transition-all hover:-translate-y-2"
              style={{ backgroundColor: `${item.color}20` }} // 加上 20% 透明度
            >
              {/* 卡片頂部 */}
              <div 
                className="h-32 border-b-[3px] border-black -mx-6 -mt-6 rounded-t-[16px] flex items-center justify-center text-6xl shadow-[inset_0_-4px_0_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: item.color }}
              >
                {item.emoji}
              </div>

              {/* 卡片內容 */}
              <div className="mt-8 flex-1">
                <h3 className="text-2xl font-black mb-6 underline decoration-4">{item.title}</h3>
                <ul className="space-y-4">
                  {item.list.map((content, i) => (
                    <li key={i} className="flex items-center gap-2 font-bold">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      {content}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 卡片裝飾 */}
              <div className="mt-auto pt-4 border-t-2 border-black/10 flex justify-between items-center text-xs font-black italic">
                <span>MODERN STYLE</span>
                <span>VOL. 0{index + 1}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* 結尾裝飾方框 */}
        <div className="flex-none w-[200px] snap-center flex items-center justify-center">
          <div className="accent-flower w-24 h-24 animate-spin-slow" style={{ backgroundColor: '#FEE440' }} />
        </div>
      </div>

      {/* 隱藏捲軸的 CSS (可放入 globals.css) */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}