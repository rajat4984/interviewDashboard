import { Bell, Grid2x2, Mail, Search, Settings } from "lucide-react";

const Navbar = ({ showSideBar, setShowSidebar, screenWidth }) => {
  return (
    <>
      <nav className="bg-cstm-bg-light-gray flex items-center justify-between p-3 fixed w-full top-0 z-10">
        <div className="flex items-center gap-4">
          <Grid2x2
            color="#7290ff"
            onClick={() => {
              if (screenWidth < 468) {
                setShowSidebar(!showSideBar);
              }
            }}
            strokeWidth={1.5}
            size={30}
            className="cursor-pointer"
          />
          <div className="relative cursor-pointer">
            <Search
              color="#dedee2"
              size={15}
              className="absolute top-1/2 left-1 transform -translate-y-1/2"
            />
            <input
              placeholder="Search"
              className="bg-[#2a2a31] pl-6 text-sm placeholder-white p-2 rounded-md  shadow-sm shadow-cstm-bg-light-gray text-white outline-none border md:w-64 border-slate-700"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="bg-icon-bg p-2 rounded-full cursor-pointer hidden sm:block">
            <Mail color="#a1a3a7" size={18} />
          </div>
          <div className="bg-icon-bg p-2 rounded-full cursor-pointer hidden sm:block">
            <Settings size={18} color="#a1a3a7" />
          </div>
          <div className="bg-icon-bg p-2 rounded-full cursor-pointer relative hidden sm:block">
            <Bell size={18} color="#a1a3a7" />
            <div className="w-2 h-2 bg-[#7192fb] rounded-full absolute top-[15%] right-[15%]"></div>
          </div>
          <div className="md:w-10 md:h-10 w-8 h-8 cursor-pointer">
            <img alt="profile" className="rounded-full" src="/images/profile_picture.jpg" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
