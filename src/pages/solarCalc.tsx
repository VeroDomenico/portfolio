import suncalc from "suncalc";
import { useState, useEffect } from "react";

export default function solarCalc() {
  const solarTime = suncalc.getTimes(new Date(), 30.2672, -97.7431);
  const Waltz = new Date(solarTime.night);
  Waltz.setHours(Waltz.getHours() + 2);

  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  useEffect(() => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            });
        }, (error) => {
            console.log(error);
        });
    } else {
        console.log('Not Available');
    }
  }, [location]);


  return (
      <div className="flex flex-col bg-blue-200 text-black items-center justify-center h-screen">
        <h2 className="mb-4">Dawn: {solarTime.dawn.toLocaleTimeString()}</h2>
        <h2 className="mb-4">Sunrise: {solarTime.sunrise.toLocaleTimeString()}</h2>
        <h2 className="mb-4">Lunch: {solarTime.solarNoon.toLocaleTimeString()}</h2>
        <h2 className="mb-4">Sunset: {solarTime.sunset.toLocaleTimeString()}</h2>
        <h2 className="mb-4">Night: {solarTime.night.toLocaleTimeString()}</h2>
        <h2 className="mb-4">Waltz: {Waltz.toLocaleTimeString()}</h2>
      </div>
  );
}
