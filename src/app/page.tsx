import Image from "next/image";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Body from "@/Components/Body";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-slate-500 to-slate-800">
      <div>
        <Header/>
      </div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
