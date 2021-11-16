import { useCallback, useState } from "react";

export const useHttp = () => {
  const [isFetching, setIsFetching] = useState(false);

  const getFine = useCallback(async (inputValue) => {
    setIsFetching(true);

    const response = await fetch(
      `https://test-task.shtrafovnet.com/fines/${inputValue}`
    );
    if (response.status === 200) {
      const res = await response.json();
      setIsFetching(false);
      return res;
    } else {
      setIsFetching(false);
      return false;
    }
  }, []);

  return {
    getFine,
    isFetching,
  };
};
