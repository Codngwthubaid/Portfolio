import { VT323 } from "next/font/google";
import Left from "@/components/Left";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const VT323_init = VT323({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--vt323',
  weight: '400'
});


export const metadata = {
  title: "Ubaid's Portfolio",
  description: "Hey, My Name is Ubaid, and I'm a Web developer currently pursing BCA degree. With a passion for coding and love for creativity. I have embarked on this existing journey to explore the vast world of the Web Developement.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={VT323_init.className}>
        <div className='flex justify-between'>
          <div>
            <Left />
          </div>
          <div className='w-[90vw] absolute left-[5vw] border border-[#3c3c3c]'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>

      </body>
    </html>
  );
}