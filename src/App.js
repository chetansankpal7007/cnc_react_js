import { useEffect } from "react";
import "./App_A.css";

function App() {
  const API = "http://localhost:8090/product/product-list";

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }


  useEffect(()=> {
    fetchData(API);
  }, []);



  return (
    <div className="center">
      <h2>Welcome To Product List</h2>
    </div>
  );
}

export default App;
