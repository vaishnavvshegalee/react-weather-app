import React from "react";
import { IoMdWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { TbSunset2 } from "react-icons/tb";
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";
import { formatToLocalTime, iconUrlFromCode } from "../Services/weatherService";
const TemperatureDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    deg,
    timezone,
  },
}) => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="img" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <IoMdWater size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            Wind :
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h ${deg.toFixed()}`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center align-middle space-x-2 text-white text-sm py-3">
        <FiSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <TbSunset2 size={18} />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <IoMdArrowUp size={20} />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <IoArrowDownOutline size={20} />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </>
  );
};

export default TemperatureDetails;
