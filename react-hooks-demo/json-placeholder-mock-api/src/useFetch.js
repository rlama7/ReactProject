import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const user = await response.json();
      setData({ data: user, loading: false });
    }
    fetchData();
  }, [url]);
  return data;
};
