import "./App.css";
import Timer from "./Timer";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
     const counter = setInterval(() => {
        setCount(++count);
     }, 1000);

     return () => {
        clearInterval(counter);
     };
  }, [count]);

  return (
    <>
      <Timer countValue={count} />
    </>
  );
}

export default App;
