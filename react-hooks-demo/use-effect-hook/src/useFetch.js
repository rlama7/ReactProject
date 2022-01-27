import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: true });

    async function fetchData() {
      const request = await (await fetch(url)).text();
      setState({ data: request, loading: false });
    }
    fetchData();

    // fetch(url)
    //   .then((info) => info.text())
    //   .then((result) => {
    //     setState({ data: result, loading: false });
    //   });
  }, [url]);
  return state;
};
