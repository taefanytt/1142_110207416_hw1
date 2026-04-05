"use client"

export default function About() {
  // 定義技能資料結構
  const skillGroups = [
    { category: "數據分析", items: ["Python", "R", "SQL"] },
    { category: "地理資訊", items: ["ArcGIS", "QGIS"] },
    { category: "網頁前端", items: ["JavaScript", "Processing"] },
    { category: "建模繪圖", items: ["Blender", "Figma"] },
  ];
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-24">
      
      {/* --- 頂部介紹與融合後的 Skills Hashtags --- */}
      <section className="mb-16">
        <h1 className="font-bubble text-5xl mb-8 tracking-tight text-black">Hello ✿ </h1>
        
        {/* 新增：輕鬆可愛的自我介紹 */}
        <div className="mb-10 space-y-2">
          <p className="text-[15px] text-black leading-relaxed max-w-2xl font-medium">
            我是子0！這裡是我在數位世界裡蓋的小花園，收集了各種奇思妙想。<br />
          </p>
        </div>

        {/* 技能標籤雲 */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 max-w-4xl">
          {skillGroups.map((group, index) => (
            <div key={index} className="flex items-center gap-2">
              {/* 大分類：黑底白字 */}
              <span className="px-4 py-1.5 bg-black text-white rounded-full text-[12px] font-black tracking-wider uppercase">
                {group.category}
              </span>
              {/* 小技能：白底黑字（帶細邊框） */}
              <div className="flex gap-2">
                {group.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white border-2 border-black/10 text-black rounded-full text-[12px] font-bold hover:border-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 剩下的圓角區塊容器 (Education & Experience) --- */}
      <div className="flex flex-col gap-10">
        
        {/* --- 1. Education 區塊 (藍色調) --- */}
        <section className="bg-[#70D6FF]/5 border-[3px] border-[#70D6FF] rounded-[20px] p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-black text-[#70D6FF] mb-8 uppercase opacity-90">
            Education
          </h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-2">
              <div className="space-y-1">
                <h3 className="text-[18px] font-bold text-black">國立政治大學</h3>
                <p className="text-[14px] text-gray-600">地政學系土地測量與資訊組 / 數位內容學士學位學程</p>
                <p className="text-[14px] font-bold text-[#70D6FF]">學士</p>
              </div>
              <span className="text-[14px] font-black text-[#70D6FF] tabular-nums">2021.09 — 2026.06</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2">
              <div className="space-y-1">
                <h3 className="text-[18px] font-bold text-black">Utrecht University</h3>
                <p className="text-[14px] font-bold text-[#70D6FF]">交換學生</p>
              </div>
              <span className="text-[14px] font-black text-[#70D6FF] tabular-nums">2025.01 — 2025.06</span>
            </div>
          </div>
        </section>

        {/* --- 2. Experience 區塊 (黃色調) --- */}
        <section className="bg-[#FEE440]/5 border-[3px] border-[#FEE440] rounded-[20px] p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-black text-[#Fee540] mb-8 uppercase opacity-90">
            Experience
          </h2>
          
          <div className="space-y-8">
            {/* 經歷內容保持不變 */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row justify-between items-baseline">
                <h3 className="text-[18px] font-bold text-black">政大研究助理</h3>
                <span className="text-[14px] font-black text-[#Fee540] tabular-nums">2024.09 — 2025.01</span>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-2xl">
                利用 ArcGIS、QGIS 和 Excel 進行全國空間分析，繪製台灣各地的交通可及性地圖，評估區域在實現 17 項聯合國永續發展目標 (SDG) 方面的進展。
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row justify-between items-baseline">
                <h3 className="text-[18px] font-bold text-black">55688 台灣大車隊研發處實習生</h3>
                <span className="text-[14px] font-black text-[#Fee540] tabular-nums">2024.07 — 2024.08</span>
              </div>
              <div className="text-[14px] text-gray-600 space-y-2">
                <p className="font-bold text-black/70">參與「圖資與地址顯示優化」專案</p>
                <ul className="list-disc list-inside space-y-1 ml-1 text-[14px]">
                  <li>透過模糊搜索技術優化搜尋準確度。</li>
                  <li>建立測試框架以評估現有APP相對於競品的表現。</li>
                  <li>繪製大規模地標的 POI 座標與邊界圖資。</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row justify-between items-baseline">
                <h3 className="text-[18px] font-bold text-black">崧旭資訊 GIS 實習生</h3>
                <span className="text-[14px] font-black text-[#Fee540] tabular-nums">2024.04 — 2024.06</span>
              </div>
              <div className="text-[14px] text-gray-600 space-y-2">
                <p className="font-bold text-black/70">參與「馬祖文化景觀圖臺建置」專案</p>
                <ul className="list-disc list-inside space-y-1 ml-1 text-[14px]">
                  <li>處理航測影像與地標的圖片文字。</li>
                  <li>使用 Figma 優化圖臺網頁的 UI。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer className="mt-20 text-center">
        <p className="text-[11px] text-gray-400 font-bold tracking-[0.3em] uppercase">
          Digital Portfolio ✿ 2026
        </p>
      </footer>
    </div>
  );
}