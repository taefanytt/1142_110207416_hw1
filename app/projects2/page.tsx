"use client"
import { useState } from "react"
import Image from "next/image"

export default function GeospatialProjects() {
  // 修正 1: 明確定義 State 類型，避免 index 存取錯誤
  const [activeIndices, setActiveIndices] = useState<{ [key: string]: number }>({});

  const handleScroll = (projectId: string, e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth; // 使用 clientWidth 獲取實際內部寬度
    
    if (width === 0) return;

    // 修正 2: 使用更精準的四捨五入計算索引
    const newIndex = Math.round(scrollLeft / width);
    
    // 修正 3: 只有當 Index 真的改變時才更新 State，減少效能消耗
    if (activeIndices[projectId] !== newIndex) {
      setActiveIndices(prev => ({ 
        ...prev, 
        [projectId]: newIndex 
      }));
    }
  };

  type Project = {
    id: string;
    title: string;
    desc: string;
    color: string;
    images: string[];
    fit: string;
    bgColor?: string;
    position?: string;
  };

  const projects: Project[] = [
    {
      id: "search",
      title: "55688 實習：圖資與地址搜尋優化",
      desc: "在 55688 實習期間，利用模糊搜索技術（Fuzzy Matching）與空間演算法優化 App 地址搜尋準確度。建立自動化測試框架進行地圖圖資校正，有效降低 15% 的圖資誤判率與人工檢核成本。",
      color: "#A29BFE", 
      images: ["/search-1.png"],
      fit: "cover"
    },
    {
      id: "submerged",
      title: "StoryMap：沉沒村莊的集體記憶",
      desc: "運用 ArcGIS Pro 進行多時序地圖疊合（Map Overlay），透過歷史圖籍與現有 DEM 地形資料對比，視覺化水庫建設淹沒區的聚落變遷，以數位敘事重建消失的地景記憶。",
      color: "#00F5D4",
      images: ["/沉沒村莊1.png", "/沉沒村莊2.png", "/沉沒村莊3.png"],
      fit: "cover"
    },
    {
      id: "sdg",
      title: "交通可及性與 SDG 永續指標評估",
      desc: "執行全國尺度之空間大數據分析，建構多運具交通圖資網路（Network Analysis）。量化評估城鄉醫療與教育資源之可及性，為永續發展目標提供量化的決策支撐指標。",
      color: "#FEE440",
      images: ["/sdg-1.png", "/sdg-2.png", "/sdg-3.png"],
      fit: "contain",
      bgColor: "bg-white"
    },
    {
      id: "ai",
      title: "AI 跨域：航測影像之農地違建辨識",
      desc: "結合卷積神經網絡（CNN）與高解析度遙測影像（Remote Sensing），開發自動化目標偵測模型。精準辨識農地違規建物並即時計算非法開發面積，提升國土監測之行政查緝效率。",
      color: "#000000",
      images: ["/ai-1.png", "/ai-2.png", "/ai-3.png"],
      fit: "cover"
    }
  ];

  return (
    <div className="relative min-h-full w-full"> 
      {/* 背景圖層 */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image src="/tulip_new.jpg" alt="bg" fill className="object-cover opacity-[0.15] blur-[20px] scale-110" priority />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 md:px-10 animate-in fade-in duration-1000 pb-24">
        {/* Header 區塊 */}
        <header className="mb-20 border-b-2 border-black pb-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase mb-4">Geospatial Analysis ✿</h1>
          <div className="flex justify-between items-end">
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-2xl font-bold italic">GIS / Spatial Data Science / Remote Sensing / AI Integration</p>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em] animate-pulse hidden sm:block">Scroll cards to explore →</p>
          </div>
        </header>

        {/* 專案網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              {/* 卡片容器 */}
              <div className={`relative aspect-[16/10] w-full border-[3px] border-black rounded-xl overflow-hidden shadow-[10px_10px_0px_black] transition-all duration-300 ${project.bgColor || 'bg-white'}`}>
                
                {/* 橫向捲動圖片區 */}
                <div 
                  onScroll={(e) => handleScroll(project.id, e)}
                  className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {project.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="relative h-full w-full flex-shrink-0 snap-center">
                      <Image 
                        src={imgSrc} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`${project.fit === 'contain' ? 'object-contain' : 'object-cover'} ${project.position || 'object-center'}`} 
                        unoptimized 
                      />
                    </div>
                  ))}
                </div>

                {/* 指示燈 (Dots) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                  {project.images.length > 1 && project.images.map((_, dotIdx) => {
                    const isActive = (activeIndices[project.id] || 0) === dotIdx;
                    return (
                      <div 
                        key={dotIdx} 
                        className={`h-[3px] rounded-full transition-all duration-300 ${isActive ? 'w-8' : 'w-4'}`}
                        style={{ 
                          backgroundColor: project.color,
                          opacity: isActive ? 1 : 0.2 
                        }} 
                      />
                    );
                  })}
                </div>
              </div>

              {/* 文字介紹 */}
              <div className="mt-7 px-1">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: project.color }} />
                    <h3 className="text-2xl font-black tracking-tight text-black">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed max-w-[98%]">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-32 text-center border-t border-black/5 pt-16">
          <p className="text-[10px] text-gray-300 font-bold tracking-[0.5em] uppercase">
            Tiff&apos;s Geospatial Archive ✿ 2026
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