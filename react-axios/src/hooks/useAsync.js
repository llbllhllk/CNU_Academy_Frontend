// 함수 호출 hook

import { useEffect } from "react";
import useAsyncFn from "./useAsyncFn";

// 컴포넌트가 로드되면 바로 실행하는 hook
const useAsync = (fn, deps) => {
  const [state, callback] = useAsyncFn(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
