import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/sidebar/Sidebar";
import HiddenSidebar from "@/components/sidebar/HiddenSidebar";

const poppins = Poppins({subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"]})

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Website pessoal com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="pt-br" suppressHydrationWarning >

        <body className={`${poppins.className} slateLight`} id="root">

            {/* ANIMATION */}
            <div className="fixed z-50 h-full w-full bg-color01">
              <div className="absolute w-full h-48 bg-color04 bottom-48 flex">
                <div className="absolute left-0   w-1/3 animate-bounce h-full bg-color04 rounded-xl"></div>
                <div className="absolute left-1/3 w-1/3 animate-bounce h-full bg-color04 rounded-xl animate-delay-300"></div>
                <div className="absolute left-2/3 w-1/3 animate-bounce h-full bg-color04 rounded-xl"></div>
              </div>
            </div>

            <div className="min-h-screen h-fit flex flex-col">

              {/* HEADER */}
              <Header/>

              {/* MAIN */}
              <main className="flex-grow w-full p-1 bg-color01 text-colorText" id="main">
                
                <div className="flex max-w-[1300px] gap-1 h-full w-fit mx-auto ">

                  <HiddenSidebar/>

                  {/* SIDEBAR */}
                  <div className="w-1/4 rounded-lg bg-color01 sticky h-fit top-[100px] max-h-[calc(100vh-250px)] z-20 hidden xl:block">
                    <Sidebar/>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="w-3/4 z-20">
                      {children}
                  </div>

                </div>

              </main>

              {/* FOOTER */}
              <Footer/>

            </div>

        </body>

      </html>
  );
}
