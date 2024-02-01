import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TemperatureDetails from "./Components/TemperatureDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData from "./Services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "bengaluru" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        // console.log(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  // background color changes based on the weather

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) {
      return "from-cyan-700 to-blue-700";
    } else {
      return "from-yellow-700 to-orange-700";
    }
  };

  return (
    <>
      <div
        className={`mx-auto max-w-screen-md mt-4 p-4 sm:p-8 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureDetails weather={weather} />
            <Forecast weather={weather} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
