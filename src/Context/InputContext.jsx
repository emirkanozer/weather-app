import { createContext, useContext, useRef, useState } from "react";
import { getWeather } from "../api";

const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    fetchData(inputRef.current.value);
  };

  const fetchData = async (value) => {
    const x = await getWeather(value);
    setWeatherData(x.data.current);
  };

  const values = {
    handleButtonClick,
    fetchData,
    weatherData,
    inputRef,
  };

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};

const useInput = () => useContext(InputContext);

export { InputContextProvider, useInput };
