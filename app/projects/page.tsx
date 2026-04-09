"use client"
import { useState } from "react"
import Image from "next/image"

export default function Projects() {
  const [activeIndices, setActiveIndices] = useState<{ [key: number]: number }>({});

  const handleScroll = (projectIdx: number, e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    
    if (activeIndices[projectIdx] !== newIndex) {
      setActiveIndices(prev => ({ ...prev, [projectIdx]: newIndex }));
    }
  };

  const projects = [
    {
      title: "感知漂流：內在宇宙觀測計劃",
      desc: "畢業製作。透過視線追蹤作為互動媒介，喚醒內在星球上的光影與紋理。",
      color: "#FF7EB9",
      images: ["/grad-1.jpg", "/grad-2.jpg"],
      fit: "cover",
      position: "object-bottom"
    },
    {
      title: "Ubike 介面重新設計",
      desc: "優化 APP 流程，提升通勤族在租借地圖交互上的使用效率。",
      color: "#70D6FF",
      images: ["/ubike-1.png", "/ubike-2.png"],
      fit: "cover",
      position: "object-center"
    },
    {
      title: "圖資與地址搜尋優化",
      desc: "55688 實習專案。利用模糊比對技術優化搜尋準確度並建立測試框架。",
      color: "#A29BFE", 
      images: ["/search-1.png"],
      fit: "cover",
      position: "object-center"
    },
    {
      title: "StoryMap：沉沒村莊",
      desc: "運用 ArcGIS pro 進行古今地圖對比，視覺化水庫建設前後的聚落變遷。",
      color: "#00F5D4",
      images: ["/沉沒村莊1.png", "/沉沒村莊2.png", "/沉沒村莊3.png"],
      fit: "cover",
      position: "object-center"
    },
    {
      title: "交通可及性與 SDG 評估",
      desc: "使用 ArcGIS 進行空間分析，繪製全台交通可及性地圖並評估 SDG 發展進度。",
      color: "#FEE440",
      images: ["/sdg-1.png", "/sdg-2.png", "/sdg-3.png"],
      fit: "contain",
      position: "object-center",
      bgColor: "bg-white"
    },
    {
      title: "AI 跨域：農地違建辨識",
      desc: "結合航測影像與 AI 辨識，自動偵測航照圖中的非法建物與面積計算。",
      color: "#000000",
      images: ["/ai-1.png", "/ai-2.png", "/ai-3.png"],
      fit: "cover",
      position: "object-center"
    }
  ];

  return (
    <div className="relative min-h-full w-full"> 
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
        
        <header className="mb-12 border-b-2 border-black pb-8">
          <h1 className="text-7xl font-black tracking-tighter text-black uppercase mb-4">
            Projects ✿
          </h1>
          <div className="space-y-2">
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl font-bold italic">
              Selected Works Catalog 
            </p>
            <p className="text-[10px] text-right text-gray-500 font-black uppercase tracking-[0.4em] animate-pulse">
              Scroll to explore more →
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col">
              <div className={`relative aspect-[16/10] w-full border-[3px] border-black rounded-xl overflow-hidden shadow-[10px_10px_0px_black] transition-all duration-300 ${project.bgColor || 'bg-white'}`}>
                
                <div 
                  onScroll={(e) => handleScroll(index, e)}
                  className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                >
                  {project.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="relative h-full w-full flex-shrink-0 snap-center">
                      <Image 
                        src={imgSrc} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`${project.fit === 'contain' ? 'object-contain' : 'object-cover'} ${project.position}`} 
                        unoptimized 
                      />
                    </div>
                  ))}
                </div>

                {/* 指示點：活動與非活動皆套用 project.color，僅透明度不同 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                  {project.images.length > 1 && project.images.map((_, dotIdx) => {
                    const isActive = (activeIndices[index] || 0) === dotIdx;
                    return (
                      <div 
                        key={dotIdx} 
                        className={`h-[3px] rounded-full transition-all duration-300 ${isActive ? 'w-8' : 'w-4'}`}
                        style={{ 
                          // 關鍵修改：活動中 100% 顯色，非活動 20% 顯色
                          backgroundColor: project.color,
                          opacity: isActive ? 1 : 0.2 
                        }} 
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 px-1 text-left">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: project.color }} />
                    <h3 className="text-2xl font-black tracking-tight text-black">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed mt-1 max-w-[95%]">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 text-center border-t border-black/5 pt-16">
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