import React from "react";
import { formatToLocalTime } from "../Services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-6">
        <p className="text-white text-xl font-extralight mb-2">
          {formatToLocalTime(dt)}
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">{`${name},${country}`}</p>
      </div>
    </>
  );
};

export default TimeAndLocation;
