import { ChevronUp } from "lucide-react";

const NetProfit = () => {
  return (
    <div className="bg-total-card-bg w-[100%] lg:w-[35%] p-3">
      <p className="text-sm">Net profit</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-2xl md:text-4xl">$ 6759.25</p>
          <div className="flex items-center text-sm font-bold">
            <ChevronUp size={15} color="#0b8a67" />
            <span className="text-[#0b8a67]">3%</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div class="relative w-24 h-24">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <circle
                class="text-gray-200 stroke-[#293366]"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                class="text-indigo-500  progress-ring__circle stroke-current"
                stroke-width="10"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke-dasharray="91.2"
                stroke-dashoffset="calc(91.2 - (91.2 * 70) / 100)"
              ></circle>

              <text
                x="50"
                y="50"
                font-family="Verdana"
                font-size="12"
                text-anchor="middle"
                alignment-baseline="middle"
                fill="white"
              >
                70%
              </text>
            </svg>
          </div>
          <p className="text-gray-400 text-[8px]">
            *The values here has been rounded off
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetProfit;
