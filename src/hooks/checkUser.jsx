import axios from "axios";
import { useState, useEffect } from "react";

export function checkUser(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: "post",
        withCredentials: true,
        url: url,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, error, loading };
}
