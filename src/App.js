import { useEffect, useState } from "react";
import "./App_A.css";

function App() {
  const API = "http://localhost:8090/product/product-list";
  const ADDAPI = "http://localhost:8090/product/product-create";
  const DELETEAPI = "http://localhost:8090/product/delete-product/";
  const UPDATE = "http://localhost:8090/product/update-product";
  const  [productList, setProduct] = useState([]);
  const  [prodName, setPName] = useState('');
  const  [qty, setQty] = useState();
  const  [price, setPrice] = useState();  
  const  [id, setId] = useState('');


  const fetchData =  () => {
    console.log("List api call");
    fetch(API).then(res=>{
      console.log(res);

      return res.json();
    }).then((data)=>{
      setProduct(data);
      console.log(data);
    })    
  } 

  const refeshList = () => {
    setInterval(() => {
      fetchData();
    }, 2000);
  }

  useEffect(()=>{
    refeshList();
  }, []);



  const addProduct  = async () => {
    if(id=='') {
      let playLoad = {
        name: prodName,
        quantity: qty,
        price: price
      } 
      console.log(playLoad);
     let res = await fetch(ADDAPI, {
                  method: "POST",
                  body: JSON.stringify(playLoad),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
                }
              ) 
  
      let resJson = await res.json();
      console.log(resJson);      
      alert("Product Added");
    } else {
      let playLoad = {
        name: prodName,
        quantity: qty,
        price: price,
        _id: id
      }

      let res = await fetch(UPDATE, {
                  method: "POST",
                  body: JSON.stringify(playLoad),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
                })

      let resJson = await res.json();
      alert("Product Updated");
    }
    
    fetchData();
    setPName('');
    setPrice('');
    setQty('');
    setId('');
  }

  const deleteProduct = async (id) => {
   let res = await  fetch(DELETEAPI+id, {
      method: "DELETE"
    });
    let resJson = await res.json();
    console.log(resJson);
    fetchData();
  }

  const updateProduct = (product) =>{
    console.log(product);
    setPName(product.name);
    setPrice(product.price);
    setQty(product.quantity);    
    setId(product._id)
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
            <button onClick={addProduct}>{id=='' ? 'Add' : 'Update'}</button>
          </div>
        </div>
      </div>


      <h2>Welcome To Product List</h2>
      <button onClick={fetchData}>List {productList.length}</button>
      <div >
        {productList.length>0 && (
        <table>
          <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>              
                <th>Delete</th>         
                <th>Update</th>
            </tr>
          </thead>
          <tbody>
          {productList?.map(product => {
            return (
              <tr  key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><button onClick={()=>{deleteProduct(product._id)}}>Delete</button></td>
                <td><button onClick={()=>{updateProduct (product)}}>Update</button></td>
             </tr>
            )
          } )}
          </tbody>
        </table>
        )}
      </div>



    </div>
  );
}

export default App;
