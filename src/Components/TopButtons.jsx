import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Bengaluru",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Pune",
    },
    {
      id: 4,
      title: "Hyderabad",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center justify-around my-6">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium m-2 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default TopButtons;
