"use client"

import Image from "next/image"
import Link from "next/link";
import Folder from '@/components/Folder'


export default function Home() {
  
  return (
    <>
      首頁
      <div style={{ height: '600px', position: 'relative' }}>
        <Folder size={2} color="#5227FF" className="custom-folder"/>
      </div>
    </>
  );
}
