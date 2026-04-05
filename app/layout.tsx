import type { Metadata } from "next";
import { Geist, Geist_Mono, Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

// 設定超圓潤泡泡字體
const primaryBubbleFont = Bubblegum_Sans({
  variable: "--font-bubble",
  subsets: ["latin"],
  weight: ["400"], 
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiff's Garden",
  description: "Digital Profile",
};

const FlowerIcon = ({ color }: { color: string }) => (
  <div 
    className="w-10 h-10 relative flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45"
    style={{ 
      backgroundColor: color, 
      borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%",
      border: "3px solid black"
    }}
  >
    <div className="w-3 h-3 bg-white border-2 border-black rounded-full" />
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} ${primaryBubbleFont.variable} h-full antialiased`}>
      <body className="h-full flex overflow-hidden">
        <div className="flex w-full h-full">
          {/* --- 左側導覽列 --- */}
          <aside className="bg-white w-[320px] h-full p-8 border-r-[5px] border-black flex flex-col gap-6 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-[120px] h-[120px] border-[4px] border-black rounded-full overflow-hidden shadow-[6px_6px_0px_black] bg-white">
                <Image src="/cat.png" alt="cat" width={120} height={120} className="object-cover h-full w-full" />
              </div>
              <h1 className="text-2xl font-black italic tracking-tighter">ZihLing Huang</h1>
            </div>

            <hr className="border-[1.5px] border-black my-2" />

            <nav className="flex flex-col gap-4 flex-1">
              <Link href="/" className="group flex items-center gap-4">
                <FlowerIcon color="#FF7EB9" />
                <span className="font-bold text-xl group-hover:underline decoration-4">Home</span>
              </Link>
              <Link href="/about" className="group flex items-center gap-4">
                <FlowerIcon color="#70D6FF" />
                <span className="font-bold text-xl group-hover:underline decoration-4">About Me</span>
              </Link>
              <Link href="/projects" className="group flex items-center gap-4">
                <FlowerIcon color="#00F5D4" />
                <span className="font-bold text-xl group-hover:underline decoration-4">Projects</span>
              </Link>
              <Link href="/others" className="group flex items-center gap-4">
                <FlowerIcon color="#FEE440" />
                <span className="font-bold text-xl group-hover:underline decoration-4">Others</span>
              </Link>
            </nav>

            <div className="content-box bg-white !p-3 flex items-center justify-around border-[3px] border-black shadow-[4px_4px_0px_black] rounded-xl">
              <TbActivity size={24} />
              <div className="font-bold text-sm">Socials</div>
              <div className="w-6 h-6 bg-black rounded-full" />
            </div>
          </aside>

          {/* --- 右側內容區 --- */}
          <main className="flex-1 h-full overflow-y-auto p-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}