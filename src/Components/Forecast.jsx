import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";

const Forecast = ({ weather: { list, timezone } }) => {
  // console.log(list);
  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">daily forecast</p>
      </div>
      <hr className="my-2 mb-4 " />
      <div className="flex flex-row items-center justify-between text-white">
        {list.map((item, i) => {
          return (
            <div className="flex flex-col items-center justify-center" key={i}>
              <p className="font-medium uppercase text-sm">{item.title}</p>
              <span className="font-light text-xs">{item.dt.getHours}</span>
              <img
                src={iconUrlFromCode(item.icon)}
                className="w-12 my-1"
                alt=""
              />
              <p className="font-medium capitalize text-center text-sm my-1 px-1 text-cyan-300">
                {item.desc}
              </p>
              <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
