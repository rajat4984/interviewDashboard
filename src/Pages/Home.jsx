import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import Total from "../Components/Total";
import NetProfit from "../Components/NetProfit";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSideBar, setShowSidebar] = useState(window.innerWidth > 468);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <>
      <Navbar
        showSideBar={showSideBar}
        screenWidth={screenWidth}
        setShowSidebar={setShowSidebar}
      />
      <SideBar showSideBar={showSideBar} />

      <div
        className={`${showSideBar && "ml-12"} bg-[#151516] text-white p-5 px-8 h-screen`}
      >
        <h1 className="font-semibold text-2xl py-3">Dashboard</h1>
        <div className="flex-col lg:flex-row flex gap-2">
          <Total />
          <NetProfit />
        </div>
      </div>
    </>
  );
};

export default Home;
