import { useEffect, useState } from "react";
function App() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  useEffect(()=>{
    alert("Number Change")
  }, [num])

  return (
    <>
    <button onClick={()=> setNum(num+1)}>Clck Me - {num}</button>
    <br></br><br></br><hr></hr>
    <button onClick={()=> setNum1(num1+1)}>Clck Me 1 - {num1}</button>
    </>
  );
}

export default App;
