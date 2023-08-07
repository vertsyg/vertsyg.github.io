import { useEffect, useState } from "react";

type TimerProps = {
  value: number;
};

const Timer = ({ value }: TimerProps) => {
  const [time, setTime] = useState(value);

  const getTime = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = Math.floor((sec % 3600) % 60);
    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);

  useEffect(() => {
    setTime(value);
  }, [value]);

  const { hours, minutes, seconds } = getTime(time);

  return (
    <span>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </span>
  );
};

export default Timer;
