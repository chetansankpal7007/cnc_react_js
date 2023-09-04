import { useEffect, useState } from "react";
import "./App_A.css";

function App() {
  const API = "http://localhost:8090/product/product-list";
  const  [productList, setProduct] = useState([]);


  const fetchData =  () => {

    fetch(API).then(res=>{
      console.log(res);

      return res.json();
    }).then((data)=>{
      setProduct(data);
      console.log(data);
    })
    
  } 


  return (
    <div className="center">
      <h2>Welcome To Product List</h2>
      <button onClick={fetchData}>List {productList.length}</button>
      <div>
        {productList.length>0 && (
        <table>
          <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
          {productList.map(product => {
            return (
              <tr>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>{product.quantity}</th>
             </tr>
            )
          })}
        </table>
        )}
      </div>



    </div>
  );
}

export default App;
