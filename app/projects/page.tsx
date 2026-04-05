"use client"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "畢業製作「感知漂流：內在宇宙觀測計劃」",
      desc: "透過視線追蹤、頭部與手部動作作為互動媒介，喚醒你的內在星球上的光影與紋理。",
      tag: "Interactive Design",
      color: "#FF7EB9",
    },
    {
      title: "Ubike 介面重新設計",
      desc: "透過訪問了解使用者痛點，以此優化APP，提升用戶使用體驗。",
      tag: "UI/UX",
      color: "#70D6FF",
    },
    {
      title: "StoryMap：沉沒村莊",
      desc: "運用 ArcGIS 進行古今地圖對比與居民訪談，視覺化翡翠水庫、石門水庫建設前後的聚落變遷。",
      tag: "GIS/Data Analysis",
      color: "#00F5D4",
    },
    {
      title: "交通可及性與 SDG 評估",
      desc: "使用 ArcGIS 與 Excel進行全國空間分析，繪製全台交通可及性地圖，評估永續發展進度。",
      tag: "GIS/Data Analysis",
      color: "#FEE440",
    },
    {
      title: "AI 跨域：農地違建辨識",
      desc: "結合航空攝影測量與 AI 影像辨識，自動偵測航照圖中的非法建物與面積計算。",
      tag: "AI / Photogrammetry",
      color: "#000000",
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* --- 1. 頂部標題與簡介 --- */}
      <section className="mb-16">
        <div className="flex items-baseline gap-4 mb-6">
          <h1 className="font-bubble text-6xl md:text-7xl text-[#70D6FF] italic uppercase tracking-tighter"
              style={{ WebkitTextStroke: "2px #000000", filter: "drop-shadow(4px 4px 0px black)" }}>
            Projects
          </h1>
          <span className="text-gray-400 font-bold italic">/ Selected Works</span>
        </div>
        <p className="max-w-2xl text-[14px] text-gray-500 leading-relaxed font-medium border-l-4 border-black pl-6">
          從 GIS 空間分析到 UI/UX 實踐，我致力於將複雜的數據轉化為直覺的視覺敘事。
          透過 AI 影像辨識、地圖建模與使用者研究，探索數位內容的多元可能。
        </p>
      </section>

      {/* --- 2. 專案網格 (交錯佈局) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group relative flex flex-col transition-transform hover:-translate-y-2 duration-300 ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
          >
            {/* 預覽圖容器 */}
            <div className="relative aspect-[16/9] w-full border-[3px] border-black rounded-[32px] overflow-hidden bg-white shadow-[8px_8px_0px_black] group-hover:shadow-[12px_12px_0px_black] transition-all">
              <div className="absolute inset-0 flex items-center justify-center text-gray-200 font-black italic uppercase tracking-widest text-lg opacity-10">
                {project.tag}
              </div>
              
              {/* 這裡未來放入圖片: <Image src={...} fill className="object-cover" /> */}

              {/* 圖片上方的彩色標籤 (Home Style) */}
              <div 
                className="absolute top-5 left-5 px-4 py-1.5 border-2 border-black rounded-full text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0px_black]"
                style={{ backgroundColor: project.color, color: project.color === '#000000' ? 'white' : 'black' }}
              >
                {project.tag}
              </div>
            </div>

            {/* 文字說明區 */}
            <div className="mt-8 px-2">
              <h3 className="text-2xl font-black italic tracking-tight mb-3 group-hover:underline decoration-4 underline-offset-4">
                {project.title}
              </h3>
              <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        ))}

        {/* 底部 Want to collab? 方塊 */}
        <div className="md:mt-32 border-4 border-black border-dashed rounded-[32px] p-12 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity">
           <div className="text-4xl mb-4">✿</div>
           <p className="font-black text-xl italic mb-1 uppercase">Ready for Next?</p>
           <p className="text-xs font-bold underline">tiff@garden.design</p>
        </div>

      </div>

      <footer className="mt-32 text-center pb-12">
        <p className="text-[11px] text-gray-400 font-bold tracking-[0.3em] uppercase">
          Digital Portfolio ✿ 2026
        </p>
      </footer>
    </div>
  );
}