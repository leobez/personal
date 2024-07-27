import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/sidebar/Sidebar";
import HiddenSidebar from "@/components/sidebar/HiddenSidebar";
import Animation from "@/components/Animation";
import Overlay from "@/components/Overlay";

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

        <body className={`${poppins.className} neutralLight`} id="root">

            {/* ANIMATION */}
            <Animation/>

            <div className="min-h-screen h-fit flex flex-col">

              {/* HEADER */}
              <Header/>

              {/* MAIN */}
              <main className="flex-grow w-full p-1 bg-color01 text-colorText" id="main">
                
                <div className="flex max-w-[1300px] gap-1 h-full w-fit mx-auto">
                  
                  <HiddenSidebar/>
                  <Overlay/>

                  {/* SIDEBAR */}
                  <div className="w-1/4 rounded-lg bg-color01 sticky top-[100px] h-screen z-20 hidden xl:block">
                    <Sidebar/>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="xl:w-3/4 w-11/12 z-10 mx-auto">
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
