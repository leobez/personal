import Footer from "./Footer";
import Header from "./Header";
import Overlay from "./Overlay";
import HiddenSidebar from "./sidebar/HiddenSidebar";
import Sidebar from "./sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
}

async function Layout({ children }: Props) {

  return (
    <div className="w-full min-h-full">

      <Header maxWidth={920}/>
      
      <main className="max-w-[920px] mx-auto">
        {children}
      </main>

      <Footer maxWidth={920}/>
      
    </div>
  );
}

export default Layout;