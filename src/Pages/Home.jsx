import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import Total from "../Components/Total";
import NetProfit from "../Components/NetProfit";
import Orders from "../Components/Orders";
import FeedBack from "../Components/Feedback";
import Chart from "../Components/Chart";
import Goals from "../Components/Goals";

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
    <div>
      <Navbar
        showSideBar={showSideBar}
        screenWidth={screenWidth}
        setShowSidebar={setShowSidebar}
      />
      <SideBar showSideBar={showSideBar} />

      <div
        className={`${showSideBar && "ml-12"} bg-[#151516] text-white p-5 px-8`}
      >
        <h1 className="font-semibold text-2xl mb-4 pt-3 mt-12">Dashboard</h1>
        <div className="flex-col lg:flex-row flex gap-3 mb-6">
          <Total />
          <NetProfit />
        </div>

        <div className="flex-col lg:flex-row flex gap-3 mb-6">
          <Chart />
          <Goals />
        </div>

        <div className="flex-col lg:flex-row flex gap-3">
          <Orders />
          <FeedBack />
        </div>
      </div>
    </div>
  );
};

export default Home;
