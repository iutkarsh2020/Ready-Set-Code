import Image from "next/image";
import Header from "@/Components/Header";
import Body from "@/Components/Body";
import Footer from "@/Components/Footer";

export default function App() {
  return (
    <div className="Background">
      <div className="App" >
        <div>
          <Body/>
        </div>
        <div>
          <Footer/>
        </div>
      </div> 
    </div>
  );
}
