"use client"
import { useState } from "react"
import Image from "next/image"

export default function DigitalProjects() {
  const [activeIndices, setActiveIndices] = useState<{ [key: string]: number }>({});

  const handleScroll = (projectId: string, e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
    if (activeIndices[projectId] !== newIndex) {
      setActiveIndices(prev => ({ ...prev, [projectId]: newIndex }));
    }
  };

  const projects = [
    {
      id: "grad",
      title: "感知漂流：內在宇宙觀測計劃",
      desc: "畢業製作。透過視線的落點、手勢的選擇、頭部的轉向作為感官延伸，在暫時脫離既有框架的漂流之中，個體得以重新構建屬於自己的星球。",
      color: "#FF7EB9",
      images: ["/grad-1.jpg", "/grad-2.jpg"],
      fit: "cover",
      position: "object-bottom"
    },
    {
      id: "ubike",
      title: "YouBike: More Than a Ride",
      desc: "優化租借流程與站點狀態提示，重新設計資訊層級、App介面與新增代表人物LUMO，從需求出發打造生活化、充滿陪伴感的App。",
      color: "#70D6FF",
      images: ["/ubike-1.png", "/ubike-2.png"],
      fit: "cover"
    },
    {
      id: "tpass",
      title: "TPASS 行政院通勤月票使用研究",
      desc: "正在進行中。透過問卷、訪談、社群觀察等方式，針對高頻率通勤族研究與痛點挖掘，以此結果作為優化Tpass官網的依據，重新設計資訊架構、增加回饋金即時查看功能。",
      color: "#FF9F43",
      images: ["/tpass-1.jpg"],
      fit: "cover"
    },
    {
      id: "monkey",
      title: "JavaScript 遊戲：三道猴子",
      desc: "遊戲發想自熱門影片《山道猴子的一生》，玩家控制摩托車騎士移動，目標是在彎曲的山路上躲避障礙物，並遵守交通規則，盡量生存更長的時間。",
      color: "#2ECC71",
      images: ["/monkey-1.jpg"],
      fit: "cover"
    }
  ];

  return (
    <div className="relative min-h-full w-full"> 
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image src="/tulip_new.jpg" alt="bg" fill className="object-cover opacity-[0.15] blur-[20px] scale-110" priority />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 md:px-10 animate-in fade-in duration-1000 pb-24">
        <header className="mb-20 border-b-2 border-black pb-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase mb-4">Digital Content ✿</h1>
          <div className="flex justify-between items-end">
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl font-bold italic">UI/UX Design / Interactive Narrative / Service Design</p>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em] animate-pulse">Scroll to explore more →</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              <div className="relative aspect-[16/10] w-full border-[3px] border-black rounded-xl overflow-hidden shadow-[10px_10px_0px_black] bg-white transition-all duration-300">
                <div onScroll={(e) => handleScroll(project.id, e)} className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {project.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="relative h-full w-full flex-shrink-0 snap-center">
                      <Image src={imgSrc} alt={project.title} fill className={`${project.fit === 'contain' ? 'object-contain' : 'object-cover'} ${project.position || 'object-center'}`} unoptimized />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                  {project.images.length > 1 && project.images.map((_, dotIdx) => {
                    const isActive = (activeIndices[project.id] || 0) === dotIdx;
                    return (
                      <div key={dotIdx} className={`h-[3px] rounded-full transition-all duration-300 ${isActive ? 'w-8' : 'w-4'}`} style={{ backgroundColor: project.color, opacity: isActive ? 1 : 0.2 }} />
                    );
                  })}
                </div>
              </div>
              <div className="mt-6 px-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: project.color }} />
                  <h3 className="text-2xl font-black tracking-tight text-black">{project.title}</h3>
                </div>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed mt-1 max-w-[95%]">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`.scrollbar-hide::-webkit-scrollbar { display: none; }.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
}