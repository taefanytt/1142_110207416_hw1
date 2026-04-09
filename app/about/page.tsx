"use client"
import Image from "next/image"

export default function About() {
  const skillGroups = [
    { category: "數據分析", items: ["Python", "R", "SQL"] },
    { category: "地理資訊", items: ["ArcGIS", "QGIS"] },
    { category: "網頁前端", items: ["JavaScript", "Processing"] },
    { category: "建模繪圖", items: ["Blender", "Figma"] },
  ];
  
  return (
    <div className="relative min-h-full w-full"> 
      
      {/* --- 全局背景圖 --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image 
          src="/tulip_new.jpg" 
          alt="background decoration" 
          fill 
          className="object-cover opacity-[0.12] blur-[20px] scale-110" 
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-20 px-10 animate-in fade-in duration-1000 pb-24">
        
        {/* --- 1. 頂部介紹 (About Me) --- */}
        <header className="mb-20 border-b-2 border-black pb-8">
          <h1 className="text-7xl font-black tracking-tighter text-black uppercase mb-4">
            Hello ✿
          </h1>
          <div className="space-y-2">
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl font-bold italic">
              我是子0！這裡是我在數位世界裡蓋的小花園，收集了各種奇思妙想。
            </p>
          </div>
        </header>
        

        {/* --- 2. 技能標籤雲 --- */}
        <section className="mb-20">
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {skillGroups.map((group, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-black text-white rounded-full text-[12px] font-black tracking-wider uppercase border-2 border-black">
                  {group.category}
                </span>
                <div className="flex gap-2">
                  {group.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white border border-black text-black rounded-lg text-[12px] font-bold shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. Education & Experience：黑框 + 彩色線條細節 --- */}
        <div className="flex flex-col gap-12 relative z-20">
          
          {/* Education：黑框 + 藍色線條 */}
          <section className="relative bg-white border-2 border-black rounded-[24px] p-10 shadow-[6px_6px_0px_black]">
            <h2 className="text-3xl font-black mb-10 uppercase text-black inline-block border-b-4 border-[#70D6FF]">
              Education
            </h2>
            
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1 pl-4 border-l-4 border-[#70D6FF]">
                  <h3 className="text-xl font-black text-black">國立政治大學</h3>
                  <p className="text-[14px] text-gray-700 font-medium">地政學系土地測量與資訊組 / 數位內容學士學位學程</p>
                  <p className="text-[14px] font-bold text-[#70D6FF]">學士</p>
                </div>
                <span className="text-[14px] font-black text-gray-400 tabular-nums italic">2021.09 — 2026.06</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1 pl-4 border-l-4 border-[#70D6FF]">
                  <h3 className="text-xl font-black text-black">Utrecht University</h3>
                  <p className="text-[14px] font-bold text-[#70D6FF]">交換學生</p>
                </div>
                <span className="text-[14px] font-black text-gray-400 tabular-nums italic">2025.01 — 2025.06</span>
              </div>
            </div>
          </section>

          {/* Experience：黑框 + 黃色線條 */}
          <section className="relative bg-white border-2 border-black rounded-[24px] p-10 shadow-[6px_6px_0px_black]">
            <h2 className="text-3xl font-black mb-10 uppercase text-black inline-block border-b-4 border-[#FEE440]">
              Experience
            </h2>
            
            <div className="space-y-10">
              <div className="flex flex-col gap-3 pl-4 border-l-4 border-[#FEE440]">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
                  <h3 className="text-xl font-black text-black">政大研究助理</h3>
                  <span className="text-[14px] font-black text-gray-400 tabular-nums italic">2024.09 — 2025.01</span>
                </div>
                <p className="text-[14px] text-gray-700 leading-relaxed max-w-3xl font-medium">
                  利用 ArcGIS、QGIS 和 Excel 進行全國空間分析，繪製台灣各地的交通可及性地圖，評估區域在實現 17 項聯合國永續發展目標 (SDG) 方面的進展。
                </p>
              </div>

              <div className="flex flex-col gap-3 pl-4 border-l-4 border-[#FEE440]">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
                  <h3 className="text-xl font-black text-black">55688 台灣大車隊研發處實習生</h3>
                  <span className="text-[14px] font-black text-gray-400 tabular-nums italic">2024.07 — 2024.08</span>
                </div>
                <div className="text-[14px] text-gray-600 space-y-3">
                  <p className="font-bold text-black/80">參與「圖資與地址顯示優化」專案</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-1 text-[14px] font-medium">
                    <li>透過模糊搜索技術優化搜尋準確度。</li>
                    <li>建立測試框架以評估現有APP相對於競品的表現。</li>
                    <li>繪製大規模地標的 POI 座標與邊界圖資。</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 pl-4 border-l-4 border-[#FEE440]">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
                  <h3 className="text-xl font-black text-black">崧旭資訊 GIS 實習生</h3>
                  <span className="text-[14px] font-black text-gray-400 tabular-nums italic">2024.04 — 2024.06</span>
                </div>
                <div className="text-[14px] text-gray-600 space-y-3">
                  <p className="font-bold text-black/80">參與「馬祖文化景觀圖臺建置」專案</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-1 text-[14px] font-medium">
                    <li>處理航測影像與地標的圖片文字。</li>
                    <li>使用 Figma 優化圖臺網頁的 UI。</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>

        <footer className="mt-24 text-center border-t border-black/5 pt-12">
          <p className="text-[11px] text-gray-300 font-bold tracking-[0.3em] uppercase">
            Tiff&apos;s Portfolio ✿ 2026
          </p>
        </footer>
      </div>
    </div>
  );
}