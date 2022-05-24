import Login from "./components/login";

import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import { Menu, Typography } from "@mui/material";
import Routers from "./config/routers";
import { Link } from "react-router-dom"; 


function App() {
  return (
    <div className="App">
    
      <Routers /> 
    

    </div>
  );
}

export default App;
