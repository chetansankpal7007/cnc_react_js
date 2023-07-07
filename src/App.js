import { useState } from "react";
import "./App_A.css";
import Navbar from './component/Navbar'
const link= "https://react.dev/";
function App() {

  const [mode, setMode] = useState ('light');

  const modeChange = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#35024f'
    } else {
      setMode("light");
      document.body.style.backgroundColor = '#dccfe3'
    }
  }
  return (
    <>
      <Navbar title="React Class -2" mode={mode} modeShwich={modeChange} reactLink={link}/>
    </>
  );
}

export default App;
