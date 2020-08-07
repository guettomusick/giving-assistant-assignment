import { useMemo } from 'react';

const useQueryParams = () => {
  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);

  return {
    has: urlParams.has.bind(urlParams),
    get: urlParams.get.bind(urlParams),
    getAll: urlParams.getAll.bind(urlParams),
    toString: urlParams.toString.bind(urlParams),
  }
}

export default useQueryParams;