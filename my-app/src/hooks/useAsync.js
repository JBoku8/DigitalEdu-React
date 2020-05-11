import { useState, useEffect, useCallback } from 'react';

export const useAsync = (asyncFunction, immediate = true) => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const excuteAsyncFunction = useCallback(() => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    return asyncFunction()
      .then((response) => setResult(response))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      excuteAsyncFunction();
    }
  }, [immediate, excuteAsyncFunction]);

  return {
    excuteAsyncFunction,
    isLoading,
    result,
    error,
  };
};

export default useAsync;
