import { useState } from "react";
import Quote from "./components/quote";
import Alert from "./components/alert";
function App() {
  const [color,setColor] =useState("rgba(39,174,96,0.9)")
  const [alert,setAlert] = useState(null)
  function colrgetter(colour){
    setColor(colour);
    document.body.style.backgroundColor = colour;
  }
  
  const showalert = (message, type) => {
    setAlert({
      msg: "Quote copied",
      msgType: "Success" 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
    return (
    <div className="App"style={{width:"100vw",height:"100vh",backgroundColor:{color}}}>
      <Alert alert={alert} />
     <Quote Colorgetter ={colrgetter} showalert={showalert}/>
    </div>
  );
}

export default App;
