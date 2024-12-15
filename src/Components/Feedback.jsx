const FeedBack = () => {
  const feedBackArr = [
    {
      customerName: "Jennu Wilson",
      feedBack: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia,
          voluptas laudantium exercitationem alias magnam ratione eligendi est
          laborum eveniet.`,
    },
    {
      customerName: "Jennu Wilson",
      feedBack: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia,
            voluptas laudantium exercitationem alias magnam ratione eligendi est
            laborum eveniet.`,
    },
    {
      customerName: "Jennu Wilson",
      feedBack: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia,
            voluptas laudantium exercitationem alias magnam ratione eligendi est
            laborum eveniet.`,
    },
    {
      customerName: "Jennu Wilson",
      feedBack: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia,
              voluptas laudantium exercitationem alias magnam ratione eligendi est
              laborum eveniet.`,
    },
  ];
  return (
    <div className="feed-back-card bg-dashboard-card-bg lg:w-[35%] p-4 rounded-lg overflow-y-scroll h-[450px] scroll">
      <p className="text-2xl font-bold">Customer's Feedback</p>
      {feedBackArr.map((feedBack) => {
        return (
          <div className="border-b border-gray-700 py-3">
            <div className="flex items-center gap-2 col-span-2">
              <img
                className="w-8 h-8 rounded-full"
                src="/images/profile_picture.jpg"
              />
              <p className="font-semibold">{feedBack.customerName}</p>
            </div>
            <div class="flex items-center pt-1 pb-2">
              <svg
                class="w-4 h-4 text-yellow-300 ms-1 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 leading-5">
              {feedBack.feedBack}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeedBack;
