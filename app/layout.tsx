import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

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
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <body className={`${poppins.className}`} id="root">
        <Layout>
          {children}
        </Layout>
      </body>
      
    </html>
  );
}

export default RootLayout;