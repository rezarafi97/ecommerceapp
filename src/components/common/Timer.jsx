import { useEffect, useState } from "react";

import { intervalToDuration, endOfToday } from "date-fns";

const Timer = () => {
  const [timer, setTimer] = useState({});

  const titleClass =
    "font-poppins text-xs md:text-sm lg:text-xs font-medium text-center";
  const dotsClass = "text-red-500 text-lg md:text-xl lg:text-3xl font-black text-center";
  const timerClass =
    "font-inter text-xl md:text-2xl lg:text-4xl font-bold tracking-widest text-center";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(
        intervalToDuration({
          start: new Date(),
          end: endOfToday(),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-2 sm:gap-4">
      <div>
        <p className={titleClass}>Hours</p>
        <p className={timerClass}>
          {timer.hours < 10 ? "0" + timer.hours : timer.hours}
        </p>
      </div>
      <div className="flex items-end">
        <p className={dotsClass}>:</p>
      </div>
      <div>
        <p className={titleClass}>Minutes</p>
        <p className={timerClass}>
          {timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}
        </p>
      </div>
      <div className="flex items-end">
        <p className={dotsClass}>:</p>
      </div>
      <div>
        <p className={titleClass}>Seconds</p>
        <p className={timerClass}>
          {timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}
        </p>
      </div>
    </div>
  );
};

export default Timer;
