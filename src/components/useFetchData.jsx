import { useEffect, useState } from 'react'

const useFetchData = (url) => {
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

export default useFetchData