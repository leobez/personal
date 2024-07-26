import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <div className="min-h-screen h-fit flex flex-col">

              {/* HEADER */}
              <Header/>

              {/* MAIN */}
              <div className="flex-grow w-full p-1 bg-color02 text-colorText">
                <div className="max-w-[1024px] h-full mx-auto">
                    {children}
                </div>
              </div>

              {/* FOOTER */}
              <Footer/>

            </div>
        </body>

      </html>
  );
}
