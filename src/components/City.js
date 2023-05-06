import React from "react";
import { WiDayCloudy } from "weather-icons-react";

const City = ({ city }) => {
  console.log(city);
  return <div>
    <div className="w-[350px] rounded-md shadow mx-auto ">
        {/* <WiDayCloudy size={24}/> */}
        <h1 className="font-bold">{city.name}</h1>
        <h1 className="font-semibold">{city.main.temp} °C</h1>
        <h1 className="text-2x1">{city.weather[0].main}</h1>
    </div>
  </div>;
};

export default City;
