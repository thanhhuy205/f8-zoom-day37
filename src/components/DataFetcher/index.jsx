import { useEffect, useState } from "react";

const DataFetcher = ({ url, children: Component }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return <Component data={data} loading={loading} error={error} />;
};

export default DataFetcher;
