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
      title: "55688 實習專案：圖資與地址搜尋優化",
      desc: "此專案主要目的為使用模糊搜索的技術，優化搜尋app的查詢準確度，使用戶能搜尋到更廣泛的範圍，提高用戶的使用者體驗。在專案中負責建立測試框架檢測模型是否提高正確率、測試現有及競品的app、大型地標的範圍繪製及取得點位。",
      color: "#A29BFE", 
      images: ["/search-1.png"],
      fit: "cover"
    },
    {
      id: "submerged",
      title: "StoryMap競賽：沉沒村莊",
      desc: "探討翡翠水庫與石門水庫淹沒區之移民與徵收。運用 ArcGIS Pro 與 ArcGIS StoryMaps 的工具製作互動地圖，以古地圖對比出淹沒區的範圍，視覺化呈現水庫建設前後聚落變遷與地方故事，探討歷史與社會影響。",
      color: "#00F5D4",
      images: ["/沉沒村莊1.png", "/沉沒村莊2.png", "/沉沒村莊3.png"],
      fit: "cover"
    },
    {
      id: "sdg",
      title: "交通可及性與 SDG 永續指標評估",
      desc: "執行全國尺度的空間分析，蒐集各縣市的人口、交通、空間數據，使用ArcGIS pro、QGIS、excel等工具計算，以地圖方式呈現出各縣市的「交通可達性」，以此評估台灣在聯合國17項永續目標中的現狀。",
      color: "#FEE440",
      images: ["/sdg-1.png", "/sdg-2.png", "/sdg-3.png"],
      fit: "contain",
      bgColor: "bg-white"
    },
    {
      id: "ai",
      title: "AI跨域X永續創新競賽—— 利用影像辨識自動判斷農地違建",
      desc: "受農地違建議題啟發，決定結合航空攝影測量及AI這兩門課所學，使用影像辨識軟體設定參數後，辨識航照圖中的農地建物，計算農地上建物之面積，實際操作中克服資料不足與辨識精度挑戰，偵測出違法的土地。",
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
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase mb-4">Spatial Analysis ✿</h1>
          <div className="flex justify-between items-end">
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-2xl font-bold italic"> Selected Projects Catalog </p>
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