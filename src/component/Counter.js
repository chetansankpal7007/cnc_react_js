import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect");
  // });

  //   useEffect(() => {
  //   console.log("useEffect");
  // },[count]);

  useEffect(() => {

    return  () => {
      console.log("unMounted")
    }
  }, []);

  // const incremet = ()=> {
  //   setCount(count+1);
  // }

  return (
    <div className="mt-4">
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add count
      </button>
      <hr/>
      <h3 className="mt-5">{count1}</h3>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Add count - 1
      </button>
    </div>
  );
}
