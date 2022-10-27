import { useEffect, useRef, useState } from "react";
import { getMinutesAndSeconds } from "../helpers/time";

const INITIAL_VALUE_SECONDS = 20;
const TICK_IN_MILLISECONDS = 1000;
const SECONDS_BETWEEN_TIMERS = 10;

export function Counter({ num }: { num: number }) {
  const initialCountdown = INITIAL_VALUE_SECONDS + num * SECONDS_BETWEEN_TIMERS;
  const [counter, setSeconds] = useState(initialCountdown);

  const interval = useRef(0);
  const cacheCounterName = "counter" + num;
  const startCountdown = () => {
    interval.current = setInterval(() => setSeconds((second) => second - 1), TICK_IN_MILLISECONDS);
  };
  useEffect(() => {
    const remainingSeconds = Number(localStorage.getItem(cacheCounterName));
    if (remainingSeconds != 0) {
      setSeconds(Number(remainingSeconds));
    }
    startCountdown();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      clearInterval(interval.current);
      setTimeout(() => alert("You missed the last rocket to Mars!"), 100);
    }
    localStorage.setItem(cacheCounterName, String(counter));
    return () => {
      localStorage.removeItem(cacheCounterName);
    };
  }, [counter]);

  const { minutes, seconds } = getMinutesAndSeconds(counter);
  const handleClick = () => {
    setSeconds(initialCountdown);
    clearInterval(interval.current);
    startCountdown();
  };

  return (
    <div className="counter">
      <span className="counter-time">{minutes}</span>
      <span>:</span>
      <span className="counter-time">{seconds}</span>
      <button onClick={handleClick}>Reset Timer</button>
    </div>
  );
}
