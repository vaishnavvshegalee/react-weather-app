import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    try {
      if (city !== "") {
        await setQuery({ q: city });

        setCity("");
      } else {
        toast.error("Please Enter City!");
      }
    } catch (error) {
      console.error("Error during city search:", error);
      toast.error(
        "An error occurred while searching for the city. Please try again."
      );
    }
  };
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
        toast.success("Fetching current loaction..");
      });
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center  justify-center space-x-4">
          <input
            type="text"
            placeholder="Search city"
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
          <CiSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearch}
          />
          <CiLocationOn
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocation}
          />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125 "
            onClick={handleUnits}
          >
            °C
          </button>
          <p className="text-white text-xl mx-2">|</p>
          <button
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125 "
            onClick={handleUnits}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
