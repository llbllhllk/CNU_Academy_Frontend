import { useCallback, useRef, useState } from "react";

const useAsyncFn = (fn, deps) => {
  // 가장 늦게 응답 받은 값을 state에 넣는 것이 아닌 마지막으로 통신하여 응답받은 값을 state에 넣어야한다.
  const lastCallId = useRef(0);
  const [state, setState] = useState({
    isLoading: false,
  });

  const callback = useCallback((...args) => {
    const callId = ++lastCallId.current;
    
    if (!state.isLoading) {
      setState({ ...state, isLoading: true });
    }

    return fn(...args).then(
      (value) => {
        callId == lastCallId.current && setState({ value, isLoading: false });
        return value;
      },
      (error) => {
        callId = lastCallId.current && setState({ error, isLoading: false });
        return error;
      }
    );
  }, deps);

  return [state, callback];
};

export default useAsyncFn;
