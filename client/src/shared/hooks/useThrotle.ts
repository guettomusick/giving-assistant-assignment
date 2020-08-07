import { useState } from "react";

const BaseThrotle = 4;

const useThrotle = (): [number, number, () => void, () => void] => {
  const [retry, setRetry] = useState(+(window.localStorage.getItem('retry') || 0));
  const [remaining, setRemaining] = useState<number>(0);

  const startThrothle = (retry: number) => {
    let remaining = Math.pow(BaseThrotle, retry);
    setRemaining(remaining);
    const id = setInterval(() => {
      if (remaining > 0) {
        remaining--;
      }

      if (remaining === 0) {
        clearInterval(id);
      }

      setRemaining(remaining);
      
    }, 1000);
  };

  const incrementRetry = () => {
    const inc = retry + 1;
    startThrothle(inc);
    setRetry(inc);
    window.localStorage.setItem('retry', inc.toString());
  };

  const resetRetry = () => {
    setRetry(0);
    window.localStorage.setItem('retry', '0');
  };

  return [remaining, retry, incrementRetry, resetRetry];
};

export default useThrotle;