import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  
    <div className="w-screen h-screen bg-black bg-cars-bg">
    <Login/>
    </div>
  );
}
// export async function get
