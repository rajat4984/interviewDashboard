import {
  ChartColumnIncreasing,
  ClipboardCheck,
  House,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const sideBarMenu = [
  {
    icon: <House size={21} color="#a1a3a7" />,
    iconName: "home",
  },
  {
    icon: <ChartColumnIncreasing size={21} color="#a1a3a7" />,
    iconName: "chart",
  },
  {
    icon: <ClipboardCheck size={21} color="#a1a3a7" />,
    iconName: "clip",
  },
  {
    icon: <Wallet size={21} color="#a1a3a7" />,
    iconName: "wallet",
  },
  {
    icon: <ShoppingBag size={21} color="#a1a3a7" />,
    iconName: "bag",
  },
];

const SideBar = ({ showSideBar }) => {
  const [activeItem, setActiveItem] = useState("home");
  return (
    <div>
      {showSideBar && (
        <div className="bg-cstm-bg-light-gray py-3 w-12 h-full flex  flex-col  gap-5 fixed top-[8%] md:top-[10%] xl:top-[9%] left-0 ">
          {sideBarMenu.map((menuItem) => {
            return menuItem.iconName === activeItem ? (
              <div
                className="flex gap-2 cursor-pointer"
                key={menuItem.iconName}
                onClick={() => setActiveItem(menuItem.iconName)}
              >
                <div className="bg-[#7290ff] w-1 left-0"></div>
                {menuItem.icon}
              </div>
            ) : (
              <div
                className="pl-2 cursor-pointer ml-1"
                key={menuItem.iconName}
                onClick={() => setActiveItem(menuItem.iconName)}
              >
                {menuItem.icon}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
