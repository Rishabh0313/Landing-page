import Background from "@/components/background/background";
import BackgroundImage from "@/components/background/bgImage";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { DM_Sans } from 'next/font/google';
const openSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
  });
export default function Home() {
  return (
    <div className={`z-50 flex flex-col ${openSans.className}`}>
        <p className="text-white">Hello</p>
        <BackgroundImage/>
        <Background></Background>
        <Navbar></Navbar>
        <Hero/>
    </div>
  );
}
