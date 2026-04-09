import type { Metadata } from "next";
import { Geist, Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaArrowLeft, FaUser, FaFolderOpen, FaHeart } from "react-icons/fa"; 

const primaryBubbleFont = Bubblegum_Sans({
  variable: "--font-bubble",
  subsets: ["latin"],
  weight: ["400"], 
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiff's Garden",
  description: "Digital Profile",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const socialLinks = [
    { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/taefanytt" },
    { icon: <FaFacebookF size={14} />, href: "https://www.facebook.com/huang.zi.ling.42830?locale=zh_TW" },
    { icon: <FaLinkedinIn size={16} />, href: "https://www.linkedin.com/in/zihling-huang-4865b4259/" },
  ];

  const menuItems = [
    { name: "About Me", href: "/about", color: "#FF7EB9", icon: <FaUser /> },
    { name: "Projects", href: "/projects", color: "#70D6FF", icon: <FaFolderOpen /> },
    { name: "Others", href: "/others", color: "#FEE440", icon: <FaHeart /> }
  ];

  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${primaryBubbleFont.variable} h-full antialiased`}>
      <body className="h-full bg-[#FBFBFB] text-black">
        <div className="flex flex-col sm:flex-row w-full min-h-screen relative">
          
          {/* --- 1. 電腦版側邊欄 (sm 以上顯示，低於 640px 才消失) --- */}
          <aside className="hidden sm:flex bg-white w-[230px] lg:w-[300px] h-screen sticky top-0 p-7 lg:p-10 border-r-[3px] border-black flex-col z-50 transition-all duration-300">
            
            {/* Home 按鈕 */}
            <div className="mb-6 lg:mb-8"> 
              <Link href="/" className="group inline-flex items-center gap-2 py-1 text-black/40 hover:text-black transition-colors">
                <FaArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-black text-[10px] uppercase tracking-[0.3em]">Home</span>
              </Link>
            </div>

            {/* 頭像與名字 (隨寬度縮放) */}
            <div className="flex flex-col items-center gap-5 lg:gap-6 mb-8">
              <div className="relative w-[110px] lg:w-[130px] aspect-square border-[3px] border-black rounded-full overflow-hidden bg-white">
                <Image 
                  src="/me_new.jpg" 
                  alt="me" 
                  fill 
                  className="object-cover object-[center_80%]" 
                  priority 
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl lg:text-2xl font-black tracking-tighter uppercase leading-tight">
                  ZihLing Huang
                </h2>
              </div>
            </div>

            {/* 社群連結 (拿掉 Icon 陰影，走平面簡約風) */}
            <div className="flex justify-center flex-wrap gap-2 lg:gap-3 mb-8">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 lg:w-9 h-8 lg:h-9 flex items-center justify-center border-2 border-black rounded-full bg-white hover:bg-black hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <hr className="border-t-[1.5px] border-black/10 mb-10 w-full" />

            {/* 導覽選單 */}
            <nav className="flex flex-col gap-6 lg:gap-8 flex-1">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} className="group flex items-center gap-4 lg:gap-5">
                  <div 
                    className="w-8 h-8 lg:w-9 lg:h-9 relative flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-[360deg] shadow-[3px_3px_0px_black]" 
                    style={{ 
                      backgroundColor: item.color, 
                      borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%", 
                      border: "2.5px solid black" 
                    }}
                  >
                    <div className="w-2 lg:w-2.5 h-2 lg:h-2.5 bg-white border-2 border-black rounded-full" />
                  </div>
                  <span className="font-black text-xs lg:text-sm uppercase tracking-[0.2em] lg:tracking-[0.3em] group-hover:underline decoration-2 underline-offset-8 transition-all">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <p className="text-[9px] text-gray-400 font-bold text-center tracking-[0.2em]">© TIFF GARDEN 2026</p>
            </div>
          </aside>

          {/* --- 2. 手機版頂部標頭 (sm 隱藏) --- */}
          <header className="sm:hidden flex justify-between items-center p-5 bg-white border-b-2 border-black sticky top-0 z-40">
            <Link href="/" className="font-black tracking-tighter text-lg uppercase">Tiff&apos;s Garden</Link>
            <div className="flex gap-4">
              {socialLinks.slice(0, 2).map((social, i) => (
                <a key={i} href={social.href} className="text-black/80">{social.icon}</a>
              ))}
            </div>
          </header>

          {/* --- 3. 右側內容區 --- */}
          <main className="flex-1 min-w-0 relative">
            {/* 全局背景圖 */}
            <div className="fixed inset-0 -z-20 pointer-events-none">
              <Image 
                src="/tulip_new.jpg" 
                alt="bg" 
                fill 
                className="object-cover opacity-[0.3] blur-[10px] scale-110" 
                priority 
              />
            </div>
            <div className="relative z-10 w-full">
              {children}
            </div>
          </main>

          {/* --- 4. 手機版底部導覽 (sm 隱藏，輕量化設計) --- */}
          <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 px-8 pb-5 pt-3 flex justify-between items-center border-t border-black/5">
            
            {/* Home */}
            <Link href="/" className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-black bg-white">
                <FaArrowLeft size={12} />
              </div>
              <span className="text-[8px] font-black uppercase">Home</span>
            </Link>

            {/* 其他選單 */}
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1">
                <div 
                  className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-black active:scale-90 transition-transform" 
                  style={{ backgroundColor: item.color }}
                >
                  <span className="text-black text-xs">{item.icon}</span>
                </div>
                <span className="text-[8px] font-black uppercase">{item.name}</span>
              </Link>
            ))}
          </nav>

        </div>
      </body>
    </html>
  );
}