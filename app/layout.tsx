import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

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

            <div className="min-h-screen h-fit flex flex-col">

              {/* HEADER */}
              <Header/>

              {/* MAIN */}
              <main className="flex-grow w-full p-1 bg-color01 text-colorText">
                
                <div className="flex max-w-[1300px] gap-2 h-full w-fit mx-auto">

                  {/* SIDEBAR */}
                  <div className="w-1/4 rounded-lg shadow-lg bg-color01 sticky h-fit top-[100px]">
                    <Sidebar/>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="w-3/4">
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
