import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function ComponentThatMayError(props) {
  return <div>{props.user.name}</div>;
}

function App() {
  const [user, setUser] = useState(undefined);

  return (
    <>
      <button onClick={() => setUser({ name: "민수" })}>
        {'user를  {name: "민수" }로'}
      </button>
      <button onClick={() => setUser(undefined)}>user를 undefined로</button>

      <br />
      <br />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={() => console.log("에러발생")}
        onReset={() => setUser({ name: "민수" })}
      >
        <ComponentThatMayError user={user} />
      </ErrorBoundary>
    </>
  );
}

export default App;
