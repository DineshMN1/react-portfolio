import { useEffect, useState } from "react";

export function usePerformanceMode() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      // A simple check based on CPU cores
      setIsLowPerformance(navigator.hardwareConcurrency <= 4);
    };

    checkPerformance();
  }, []);

  return isLowPerformance;
}
