import { useState, useEffect } from 'react';

export function useData(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an actual network delay from a real backend
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch backend data');
        const result = await response.json();
        
        // Slight artificial delay to show loader properly
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
