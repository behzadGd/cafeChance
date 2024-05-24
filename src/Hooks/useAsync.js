import axios from "axios";
import { useState } from "react";
function useAsync(url, method = "GET") {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  function getData() {
    setLoading(true);
    axios({
      url: url,
      method,
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || `can't get data`);
        setLoading(false);
      });
  }

  return { loading, data, getData, error };
}

export default useAsync;
