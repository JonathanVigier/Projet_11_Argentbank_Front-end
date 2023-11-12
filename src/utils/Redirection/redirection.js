import { useEffect, useState } from "react";

function useCountdown(initialValue, onZero) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevValue) => prevValue - 1);
    }, 1000);

    if (value === 0) {
      clearInterval(timer);
      onZero();
    }

    return () => {
      clearInterval(timer);
    };
  }, [value, onZero]);

  return value;
}

export default useCountdown;
