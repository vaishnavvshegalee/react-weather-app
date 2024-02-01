import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";

const Forecast = ({ weather: { list, timezone } }) => {
  // console.log(list);
  return (
    <>
      <div className="mt-6">
        <p className="text-white font-medium uppercase mb-2">Daily Forecast</p>
        <hr className="my-2 mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-around text-white space-y-4 md:space-y-0">
          {list.map((item, i) => (
            <div
              className="flex flex-col items-center justify-center text-center"
              key={i}
            >
              <p className="font-medium uppercase text-xs md:text-sm">
                {item.title}
              </p>
              <span className="font-light text-xs">{item.dt}</span>
              <img
                src={iconUrlFromCode(item.icon)}
                className="w-12 my-1"
                alt=""
              />
              <p className="font-medium capitalize text-sm my-1 px-1 text-cyan-300">
                {item.desc}
              </p>
              <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
