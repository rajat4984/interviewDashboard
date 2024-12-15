import { ChevronRight, Dock, HandPlatter, Target } from "lucide-react";

const menuArr = [
  {
    icon: (
      <div className="bg-[#5e3236] p-4 rounded-full">
        <Target color="#d25b26" size={28} />
      </div>
    ),
    text: "Goals",
  },
  {
    icon: (
      <div className="bg-[#293368] p-4 rounded-full">
        {" "}
        <HandPlatter color="#6884ed" size={28} />
      </div>
    ),
    text: "Popuplar Dishes",
  },

  {
    icon: (
      <div className="bg-[#214a60] p-4 rounded-full">
        {" "}
        <Dock color="#2299cc" size={28} />
      </div>
    ),
    text: "Menus",
  },
];

const Goals = () => {
  return (
    <div className="xl:w-[35%] bg-dashboard-card-bg p-4 px-6 rounded-lg">
      {menuArr.map((item) => {
        return (
          <div className="flex justify-between items-center py-3 cursor-pointer">
            <div className="flex items-center gap-2">
              {item.icon}
              <p className="text-md font-semibold">{item.text}</p>
            </div>
            <div className="bg-[#46464d] p-2 rounded-full">
              <ChevronRight size={15} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Goals;
