import { useState, useEffect } from "react";

const useCmsData = <T extends Object>(getData: () => Promise<T | null>) => {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    getData().then(setData);
  }, [getData]);
  return data;
};

export default useCmsData;