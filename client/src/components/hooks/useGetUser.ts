import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ITodo } from "../../types/todo";
import { getUser } from "../api/getUser";

export const useGetUser = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await getUser();
      console.log(data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return { data, error, loading };
};
