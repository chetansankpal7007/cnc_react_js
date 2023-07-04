import "./App_A.css";
import Navbar from './component/Navbar'
import Newcompoent from './component/New_compoent'
const link= "https://react.dev/";
function App() {
  return (
    <>
      <Navbar title="React Class -2"  reactLink={link}/>
      <Navbar title="React Class -2"  reactLink={link}/>
      <Navbar title="React Class -2"  reactLink={link}/>
      <Newcompoent/>
    </>
  );
}

export default App;
