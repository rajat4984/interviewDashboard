const Orders = () => {
  const orderArr = [
    {
      customerImg: "/images/profile_picture.jpg",
      customerName: "Wade Warren",
      orderNo: 15478256,
      amount: 124.0,
      isDelivered: true,
      deliveryText: "Delivered",
    },

    {
      customerImg: "/images/profile_picture.jpg",
      customerName: "Jane Cooper",
      orderNo: 15478256,
      amount: 124.0,
      isDelivered: true,
      deliveryText: "Delivered",
    },
    {
      customerImg: "/images/profile_picture.jpg",
      customerName: "Guy Hawkins",
      orderNo: 15478256,
      amount: 124.0,
      isDelivered: false,
      deliveryText: "Cancelled",
    },
    {
      customerImg: "/images/profile_picture.jpg",
      customerName: "Kristin Watson",
      orderNo: 15478256,
      amount: 124.0,
      isDelivered: false,
      deliveryText: "Pending",
    },
    {
      customerImg: "/images/profile_picture.jpg",
      customerName: "Cody Fisher",
      orderNo: 15478256,
      amount: 124.0,
      isDelivered: true,
      deliveryText: "Delivered",
    },
    {
      customerImg: "/images/profile_picture.jpg",
      customerName: "Savannah Nguyen",
      orderNo: 15478256,
      amount: 124.0,
      isDelivered: true,
      deliveryText: "Delivered",
    },
  ];
  return (
    <div className="bg-dashboard-card-bg p-4 lg:w-[65%] rounded-xl">
      <p>Recent Orders</p>
      <table className="text-sm w-full">
        <tr className="text-sm font-bold grid grid-cols-5 py-3 pt-4">
          <th className="text-left col-span-2">Customers</th>
          <th className="text-left">Order No.</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        {orderArr.map((order) => {
          return (
            <tr className="border-t border-gray-700 grid grid-cols-5 items-center py-3 cursor-pointer">
              <td className="flex items-center gap-2 col-span-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={order.customerImg}
                />
                <p>{order.customerName}</p>
              </td>

              <td>{order.orderNo}</td>

              <td>$ {order.amount}</td>

              <td
                className={`${
                  order.isDelivered
                    ? "text-[#06a174] bg-[#195346]"
                    : "text-[#bb5150] bg-[#5f3038]"
                } text-xs inline-block rounded-full px-2 w-max`}
              >
                {order.deliveryText}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Orders;
