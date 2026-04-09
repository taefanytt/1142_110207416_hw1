import type { Metadata } from "next";
import { Geist, Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa"; // 圖示

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

const FlowerIcon = ({ color }: { color: string }) => (
  <div 
    className="w-9 h-9 relative flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 shadow-[3px_3px_0px_black]"
    style={{ 
      backgroundColor: color, 
      borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%",
      border: "2.5px solid black"
    }}
  >
    <div className="w-2.5 h-2.5 bg-white border-2 border-black rounded-full" />
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  // 【 社群連結 】
  const socialLinks = [
    { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/taefanytt" },
    { icon: <FaFacebookF size={14} />, href: "https://www.facebook.com/huang.zi.ling.42830?locale=zh_TW" },
    { icon: <FaEnvelope size={16} />, href: "tinahuang1209@gmail.com" },
  ];

  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${primaryBubbleFont.variable} h-full antialiased`}>
      <body className="h-full flex overflow-hidden bg-[#FBFBFB]">
        <div className="flex w-full h-full relative">
          
          {/* --- 左側導覽列 --- */}
          <aside className="bg-white w-[300px] h-full p-10 border-r-[3px] border-black flex flex-col z-50 shadow-[5px_0px_20px_rgba(0,0,0,0.02)]">
            
          {/* 1. 頭像與名字區 */}
          <div className="flex flex-col items-center gap-6 mb-6">
            <div className="relative w-[130px] h-[130px] border-[3px] border-black rounded-full overflow-hidden bg-white">
              <Image 
                src="/me.jpg"
                alt="me" 
                fill
                sizes="130px" 
                className="object-cover object-[center_80%]" // 調整照片重心位置
                priority // 這是首屏重要圖片，建議加上 priority 提升載入速度
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-black tracking-tighter text-black uppercase leading-tight">
                ZihLing Huang
              </h2>
            </div>
          </div>

            {/* 2. 社群連結區 */}
            <div className="flex justify-center flex-wrap gap-3 mb-8">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} // 使用上面定義的連結
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border-2 border-black rounded-full bg-white shadow-[2px_2px_0px_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <hr className="border-t-[1.5px] border-black/10 mb-10 w-full" />

            {/* 3. 導覽選單 */}
            <nav className="flex flex-col gap-8 flex-1">
              {[
                { name: "Home", href: "/", color: "#FF7EB9" },
                { name: "About Me", href: "/about", color: "#70D6FF" },
                { name: "Projects", href: "/projects", color: "#00F5D4" },
                { name: "Others", href: "/others", color: "#FEE440" }
              ].map((item) => (
                <Link key={item.name} href={item.href} className="group flex items-center gap-5">
                  <FlowerIcon color={item.color} />
                  <span className="font-black text-sm uppercase tracking-[0.3em] text-black group-hover:underline decoration-2 underline-offset-8 transition-all">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* 底部版權宣告 */}
            <div className="mt-auto pt-6">
              <p className="text-[9px] text-gray-400 font-bold text-center tracking-[0.2em]">
                © TIFF GARDEN 2026
              </p>
            </div>
          </aside>

          {/* --- 右側內容區 --- */}
          <main className="relative flex-1 h-full overflow-y-auto bg-transparent z-10">
            
            {/* 全局背景圖 */}
            <div className="fixed inset-0 -z-20 pointer-events-none">
              <Image 
                src="/tulip_new.jpg" 
                alt="background decoration" 
                fill 
                className="object-cover opacity-[0.3] blur-[10px] scale-110" 
                priority
              />
            </div>

            <div className="relative z-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}