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

      <Header maxWidth={1080}/>
      
      <main className="max-w-[1080px] mx-auto">
        {children}
      </main>

      <Footer maxWidth={1080}/>

      {/* <Header/>

      <main className="flex-grow w-full p-1 bg-color01 text-colorText" id="main">
        
        <div className="flex w-full xl:w-[1250px] gap-1 h-full mx-auto">
          
          <HiddenSidebar/>
          <Overlay/>

          <div className="w-1/4 rounded-lg bg-color01 sticky top-[100px] h-screen z-20 hidden xl:block">
            <Sidebar/>
          </div>

          <div className="2xl:w-3/4 lg:w-11/12 w-full z-10 mx-auto">
            {children}
          </div>

        </div>

      </main>

       */}

    </div>
  );
}

export default Layout;