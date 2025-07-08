import BGAnimation from "./BGAnimation";
import Footer from "./Footer";
import Header from "./Header";
import Overlay from "./Overlay";
import HiddenSidebar from "./sidebar/HiddenSidebar";
import Sidebar from "./sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <div className="relative w-full min-h-screen">
      <BGAnimation />

      {/* conteúdo acima da animação */}
      <div className="relative z-10">
        <Header maxWidth={920} />
        <main className="max-w-[920px] mx-auto">
          {children}
        </main>
        <Footer maxWidth={920} />
      </div>
    </div>
  );
}