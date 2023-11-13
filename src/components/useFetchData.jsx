import { useEffect, useState } from 'react'

export const useFetchData = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        (async () => {
            const response = await fetch (url);
            const data = await response.json();
            setData(data.results)
        })();
    }, [url]);
  return data
};


export const useFetchData2 = (url, page, status, species) => {
    const [data, setData] = useState([]);
  
    useEffect(()=> {
        (async () => {
            let apiUrl = `${url}?page=${page}`;
            if (status) {
              apiUrl += `&status=${status}`;
            }
            if (species) {
              apiUrl += `&species=${species}`;
            }
            const response = await fetch (apiUrl);
            const data = await response.json();
            setData(data.results)
        })();
    }, [url, page, status, species]);
  return data
  };