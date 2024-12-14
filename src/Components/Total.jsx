import {
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";

const Total = () => {
  const cardsArr = [
    {
      cardIcon: <ShoppingBasket fill="#3f60fc" />,
      cardBg: "#283366",
      cardText: "Total Orders",
      cardNumber: 75,
      cardArrow: <ChevronUp size={15} color="#0b8a67" />,
      percentColor: "#0b8a67",
      cardPercent: 3,
    },
    {
      cardIcon: <ShoppingBag fill="#00c98d" />,
      cardBg: "#125345",
      cardText: "Total Delivered",
      cardNumber: 70,
      cardArrow: <ChevronDown size={15} color="#dd5151" />,
      percentColor: "#dd5151",
      cardPercent: 3,
    },
    {
      cardIcon: <ShoppingBag fill="#f25f5f" />,
      cardBg: "#603135",
      cardText: "Total Cancelled",
      cardNumber: 5,
      cardArrow: <ChevronUp size={15} color="#0b8a67" />,
      percentColor: "#0b8a67",
      cardPercent: 3,
    },

    {
      cardIcon: <CircleDollarSign fill="#e53f9d" />,
      cardBg: "#5b2a4a",
      cardText: "Total Revenue",
      cardNumber: "$12K",
      cardArrow: <ChevronDown size={15} color="#dd5151" />,
      percentColor: "#dd5151",
      cardPercent: 3,
    },
  ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-3 lg:w-[65%]">
      {cardsArr.map((card, index) => {
        return (
          <div
            key={index}
            className="bg-total-card-bg flex flex-col gap-5 justify-start p-3 min-w-[135px] xl:min-w-[180px] h-full rounded-lg"
          >
            <div>
              <div
                className="inline-block rounded-md p-2"
                style={{ backgroundColor: card.cardBg }}
              >
                {card.cardIcon}
              </div>
              <p className="text-xs">{card.cardText}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-3xl">{card.cardNumber}</p>
              <div className="flex items-center justify-end text-sm font-bold">
                {card.cardArrow}{" "}
                <span style={{ color: card.percentColor }}>
                  {card.cardPercent}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Total;
