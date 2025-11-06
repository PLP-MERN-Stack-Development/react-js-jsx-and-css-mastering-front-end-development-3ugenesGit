import { useState, useEffect } from 'react';

function fetchPosts(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        // Check if the error is due to abortion (cleanup)
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError('Could not fetch data. Please check the network.');
          console.error(err);
        }
      } finally {
        // Ensure loading is set to false, even on error or abort
        if (!signal.aborted) {
            setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function: aborts the fetch request when the component unmounts
    return () => abortCont.abort();

  }, [url]); // Re-run the effect if the URL changes

  return { data, loading, error };
}

export default fetchPosts;