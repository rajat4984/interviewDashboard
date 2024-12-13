import { Bell, Grid2x2, Mail, Search, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-cstm-bg-light-gray flex items-center justify-between">
        <div className="flex items-center">
          <Grid2x2 color="#7290ff" strokeWidth={1.5} />
          <div className="relative">
            <Search color="#dedee2" size={15} className="absolute top-1/2 left-1 transform -translate-y-1/2" />
            <input placeholder="Search" className="bg-[#2a2a31] pl-6" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="bg-icon-bg p-2 rounded-full">
            <Mail color="#a1a3a7" size={18} />
          </div>
          <div className="bg-icon-bg p-2 rounded-full">
            <Settings size={18} color="#a1a3a7" />
          </div>
          <div className="bg-icon-bg p-2 rounded-full">
            <Bell size={18} color="#a1a3a7" />
          </div>
          <div className="w-10 h-10">
            <img className="rounded-full" src="/images/profile_picture.jpg" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
