import { useRef, useEffect, useState } from "react";
function Home() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <>
      <h1>Home Page</h1>
      <input ref={inputRef} placeholder="I get focused automatically" />
      <p>Button clicks: {count}</p>
      <p>Total renders: {renderCount.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}
export default Home;
