import { useEffect, useState } from "react";
import "./App_A.css";

function App() {
  const API = "http://localhost:8090/product/product-list";
  const ADDAPI = "http://localhost:8090/product/product-create";
  const  [productList, setProduct] = useState([]);
  const  [prodName, setPName] = useState('');
  const  [qty, setQty] = useState();
  const  [price, setPrice] = useState();


  const fetchData =  () => {

    fetch(API).then(res=>{
      console.log(res);

      return res.json();
    }).then((data)=>{
      setProduct(data);
      console.log(data);
    })
    
  } 

  const addProduct  = async () => {
    let playLoad = {
      name: prodName,
      quantity: qty,
      price: price
    } 
    console.log(playLoad);
   let res = await fetch(ADDAPI, {
      method: "POST",
      body: JSON.stringify(playLoad)
    }) 

    let resJson = await res.json();
    console.log(resJson);


  }


  return (
    <div className="center">
      <h2>Welcome To Add Product </h2>

      <div >
        <div className="container">
          <div className="row">
            <div className="col-25">
              <label htmlFor="product">Product Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="product" onChange={(e)=> setPName(e.target.value)} name="productname" value={prodName} placeholder="Product Name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="qty">Quantity</label>
            </div>
            <div className="col-75">
              <input type="number" id="qty" name="qty" onChange={(e)=> setQty(e.target.value)} value={qty} placeholder="Your Quantity.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Price</label>
            </div>
            <div className="col-75">
              <input type="number" id="country" name="price" onChange={(e)=> setPrice(e.target.value)}  value={price} placeholder="Product Price.." />
            </div>
          </div>
          <br/>
          <div className="row">
            <button onClick={addProduct}>Submit</button>
          </div>
        </div>
      </div>


      <h2>Welcome To Product List</h2>
      <button onClick={fetchData}>List {productList.length}</button>
      <div >
        {productList.length>0 && (
        <table>
          <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
          {productList?.map(product => {
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
