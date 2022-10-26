import { useEffect, useState } from "react";
import { getMinutesAndSeconds } from "../helpers/time";

export function Counter({ num }: { num: number }) {
  const INTIIAL_VALUE_SECONDS = 20 + num * 10;
  const TICK_IN_MILLISECONDS = 100;
  const [secondsCount, setCount] = useState(INTIIAL_VALUE_SECONDS);
  let interval: number;

  useEffect(() => {
    const previousSeconds = Number(localStorage.getItem("seconds" + num));
    if (previousSeconds != 0) {
      setCount(previousSeconds);
    }
    interval = setInterval(() => {
      setCount((counter) => {
        if (counter === 0) return 0;
        return counter - 1;
      });
    }, TICK_IN_MILLISECONDS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondsCount === 0) {
      alert("You missed the last rocket to mars!");
      clearInterval(interval);
    }
    localStorage.setItem("seconds" + num, secondsCount.toString());
    return () => localStorage.removeItem("seconds" + num);
  }, [secondsCount]);

  const handleClick = () => setCount(INTIIAL_VALUE_SECONDS);

  const { seconds, minutes } = getMinutesAndSeconds(secondsCount);

  return (
    <div className="counter">
      <span className="counter-time">{minutes}</span>
      <span>:</span>
      <span className="counter-time">{seconds}</span>
      <button onClick={handleClick}>Reset Timer</button>
    </div>
  );
}
