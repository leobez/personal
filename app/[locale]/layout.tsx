import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import HiddenSidebar from "../../components/sidebar/HiddenSidebar";
import Animation from "../../components/Animation";
import Overlay from "../../components/Overlay";
import { Providers } from "../provider";

const poppins = Poppins({subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"]})

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Website pessoal com Next.js",
};

type Props = {
  children: React.ReactNode;
  params: {locale:string},
}

async function RootLayout({children, params:{locale}}: Props) {

  return (
      <html lang={locale} suppressHydrationWarning>
      
        <body className={`${poppins.className}`} id="root">

            {/* ANIMATION */}
            <Animation/>

            <div className="min-h-screen h-fit flex flex-col">

              {/* HEADER */}
              <Header/>

              {/* MAIN */}
              <main className="flex-grow w-full p-1 bg-color01 text-colorText" id="main">
                
                <div className="flex w-full xl:w-[1250px] gap-1 h-full mx-auto">
                  
                  <HiddenSidebar/>
                  <Overlay/>

                  {/* SIDEBAR */}
                  <div className="w-1/4 rounded-lg bg-color01 sticky top-[100px] h-screen z-20 hidden xl:block">
                    <Sidebar/>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="2xl:w-3/4 lg:w-11/12 w-full z-10 mx-auto">
                    <Providers>
                      {children}
                    </Providers>
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

export default RootLayout;