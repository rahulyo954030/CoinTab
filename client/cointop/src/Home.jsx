import { useNavigate } from "react-router-dom";
import axios from  "axios"

import "./App.css";


const Home = () => {
  
 
  const navigate = useNavigate();

  const fetchButton = () => {
    axios.post("http://localhost:8080/user")
    alert("Data Successfully Added")
    
  };
  const deleteButton = () => {
    axios.delete("http://localhost:8080/user")
    alert("Data Successfully Deleted")
    
  };

  const userButton = () => {
    
    navigate("/users");
    
  };
  
  return (
    <div className="App">
      <button onClick={fetchButton}>Fetch Users</button>
      <button onClick={deleteButton}>Delete Users</button>
      <button onClick={userButton}>View Users</button>
    </div>
  );
};

export default Home;
