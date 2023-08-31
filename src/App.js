import { useReducer } from "react";
import "./App_A.css";

function App() {
  // const [num, setNum] = useState(0);

                     // 1
  const reducer = (state, action) => {
    console.log(state, action);
    if(action == "Increment") {
      state = state +1;
      //1
    } else {
              //1 -1
      state = state - 1;
    }
            //0
    return state;
  }


  //num = 1
  const [num, dispatch] = useReducer(reducer, 0) 
  return (
    <div className="center">
      <label className="text">{num}</label>
      <br></br>
      <button onClick={()=> dispatch("Increment")}>Increment</button>
      <br></br><br></br><hr></hr>
      <button onClick={()=> dispatch("Dicrement")}>Dicrement</button>
    </div>
  );
}

export default App;
