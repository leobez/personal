import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import BGAnimation from "@/components/BGAnimation";

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Leo B.",
  description: "Portfolio pessoal",
};

type Props = {
  children: React.ReactNode;
}

async function RootLayout({ children }: Props) {

  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={`${poppins.className}`} id="root">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;