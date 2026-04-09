"use client"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "感知漂流：內在宇宙觀測計劃",
      desc: "畢業製作。透過視線追蹤作為互動媒介，喚醒內在星球上的光影與紋理。",
      tag: "Interactive / Vision",
      color: "#FF7EB9",
      images: ["/grad-1.jpg", "/grad-2.jpg"] 
    },
    {
      title: "Ubike 介面重新設計",
      desc: "優化 APP 流程，提升通勤族在租借地圖交互上的使用效率。",
      tag: "UI/UX Research",
      color: "#70D6FF",
      images: ["/ubike-1.png", "/ubike-2.png"]
    },
    {
      title: "圖資與地址搜尋優化",
      desc: "55688 實習專案。利用模糊比對技術優化搜尋準確度並建立測試框架。",
      tag: "Search Engineering",
      color: "#A29BFE", 
      images: ["/search-1.png"]
    },
    {
      title: "StoryMap：沉沒村莊",
      desc: "運用 ArcGIS 進行古今地圖對比，視覺化水庫建設前後的聚落變遷。",
      tag: "GIS / Storytelling",
      color: "#00F5D4",
      images: ["/沉沒村莊1.png", "/沉沒村莊2.png", "/沉沒村莊3.png"]
    },
    {
      title: "交通可及性與 SDG 評估",
      desc: "使用 ArcGIS 進行全國空間分析，繪製全台交通圖資並評估發展進度。",
      tag: "Spatial Analysis",
      color: "#FEE440",
      images: ["/sdg-1.png", "/sdg-2.png", "/sdg-3.png"]
    },
    {
      title: "AI 跨域：農地違建辨識",
      desc: "結合航測影像與 AI 辨識，自動偵測航照圖中的非法建物與面積計算。",
      tag: "AI / Photogrammetry",
      color: "#000000",
      images: ["/ai-1.png", "/ai-2.png", "/ai-3.png"]
    }
  ];

  return (
    <div className="relative min-h-full w-full"> 
      
      {/* --- 全局背景圖 --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image 
          src="/tulip_new.jpg" 
          alt="background" 
          fill 
          className="object-cover opacity-[0.15] blur-[20px] scale-110" 
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-10 animate-in fade-in duration-1000 pb-24">
        
        {/* --- 1. 頂部介紹 (與 About Me 統一規格) --- */}
        <header className="mb-20 border-b-2 border-black pb-8">
          <h1 className="text-7xl font-black tracking-tighter text-black uppercase mb-4">
            Projects
          </h1>
          <div className="space-y-2">
            <p className="text-[15px] text-gray-800 leading-relaxed max-w-2xl font-bold italic">
              Selected Works Catalog / 這裡收集了我近期在 GIS、UI/UX 與數據分析領域的實踐。
            </p>
          </div>
        </header>

        {/* --- 2. 櫥窗網格 (加上響應式 grid-cols-1 md:grid-cols-2) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
            >
              <div className="relative aspect-[16/10] w-full border-[3px] border-black rounded-[20px] overflow-hidden bg-white shadow-[10px_10px_0px_black] transition-all duration-300">
                
                <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-[#FBFBFB]">
                  {project.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="relative h-full w-full flex-shrink-0 snap-center">
                      <Image 
                        src={imgSrc} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-4" 
                        unoptimized 
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, dotIdx) => (
                    <div key={dotIdx} className="w-5 h-[2.5px] bg-black/10 rounded-full" />
                  ))}
                </div>
              </div>

              <div className="mt-8 px-2 text-left">
                <div className="flex flex-col gap-2">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: project.color }}>
                    {project.tag}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight text-black">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed mt-1 max-w-[95%]">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        <footer className="mt-32 text-center border-t border-black/5 pt-16">
          <p className="text-[10px] text-gray-300 font-bold tracking-[0.5em] uppercase">
            Tiff&apos;s Portfolio Gallery ✿ 2026
          </p>
        </footer>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}