import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";

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
    </>
  );
};

export default Home;
