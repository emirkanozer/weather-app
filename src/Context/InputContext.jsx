import { createContext, useContext, useRef, useState } from "react";
import { getWeather } from "../api";

const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const citys = [
    { city: "Istanbul" },
    { city: "London" },
    { city: "Berlin" },
    { city: "Amsterdam" },
    { city: "Athens" },
    { city: "Moscow" },
  ];
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef !== "") {
      fetchData(inputRef.current.value);
    }
    alert("city enter");
  };

  const fetchData = async (value) => {
    const x = await getWeather(value);
    setWeatherData(x.data.current);
    setLocation(x.data.location);
  };

  const values = {
    handleButtonClick,
    fetchData,
    weatherData,
    inputRef,
    location,
    citys,
  };

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};

const useInput = () => useContext(InputContext);

export { InputContextProvider, useInput };
