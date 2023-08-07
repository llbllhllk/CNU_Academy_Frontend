import useAsyncFn from "./hooks/useAsyncFn";

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
};

function App() {
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <div>
      <div>useAsyncFn 테스트</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={callback} disabled={state.isLoading}>
        비동기 호출
      </button>
    </div>
  );
}

export default App;
