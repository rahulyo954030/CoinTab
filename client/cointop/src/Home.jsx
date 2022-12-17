import { useNavigate } from "react-router-dom";
import axios from  "axios"

import "./App.css";
import { useState ,useEffect} from "react";




const Home = () => {
  const [sign,setSign] =useState(false)
 
  useEffect(() => {
    getBlogFunction();
  }, []);
  
  const getBlogFunction = ()=>{
    
    axios.get("https://calm-plum-termite-boot.cyclic.app/user?page=0")
    .then((res)=>{
      let arr = res.data.blog
      if(arr.length === 0){
        setSign(false)
        getBlogFunction();
      }
      else{
        setSign(true)
      }
    })
    .catch((e)=>console.log(e))
  }
  const navigate = useNavigate();

  const fetchButton = () => {
    if(sign===false){
      axios.post("https://calm-plum-termite-boot.cyclic.app/user")
      .then((res)=>{
        getBlogFunction();
        setSign(true)
      })
      alert("Data Successfully Added")
    }
    else{
      alert("Data Already Added")
    }
    
    
  };

  const deleteButton = () => {
    if(sign == true){
      axios.delete("https://calm-plum-termite-boot.cyclic.app/user")
    .then((res)=>{
      getBlogFunction()
    })
    alert("Data Successfully Deleted")
    }
    else{
      alert("Data not Found")
    }
    
    
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






{/* <div  className="user_map_container" >
{data.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      })
      .map((e)=>{

       return(
        <div key={e._id} className="user_map_card"> */}
          
          {/* <img src={e.picture} alt="" />
          <div className='user_name_div'>
              <h3>{e.first}</h3>
              <h3>{e.last}</h3>
              <h3>({e.gender})</h3>
          </div>
          
          <h5 className='user_email_div'><span className='email'>Email: </span> {e.email}</h5>
          <div className='user_address_div'>
          <h5><span className='address'>Address: </span> {e.location}</h5>
          <h5>{e.nat}</h5>  
          <h5>{e.pin}</h5> 
          </div> */}
                     
//         </div>
//         )
//       })
//     }
// </div>
