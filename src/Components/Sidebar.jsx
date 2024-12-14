import {
  ChartColumnIncreasing,
  ClipboardCheck,
  House,
  ShoppingBag,
  Wallet,
} from "lucide-react";
const SideBar = ({ showSideBar }) => {
  return (
    <div>
      {showSideBar && (
        <div className="bg-cstm-bg-light-gray py-3 w-12 h-screen flex  flex-col  gap-5 absolute left-0">
          <div className="flex gap-2">
            <div className="bg-[#7290ff] w-1  left-0"></div>
            <House size={21} color="#a1a3a7" />
          </div>
          <div className="pl-2">
            <ChartColumnIncreasing size={21} color="#a1a3a7" />
          </div>
          <div className="pl-2">
            <ClipboardCheck size={21} color="#a1a3a7" />
          </div>
          <div className="pl-2">
            <Wallet size={21} color="#a1a3a7" />
          </div>
          <div className="pl-2">
            <ShoppingBag size={21} color="#a1a3a7" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
