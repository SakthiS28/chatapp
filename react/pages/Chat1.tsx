import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { List } from '@mui/material';



function chat1() {
  const navigate = useNavigate()
    
  const [msg,setmsg]=useState<string>('');
  const [list, setlist] = useState<any[]>([])

  function Loginpage(){
    navigate("/")
  }


  function Registerpage(){
    navigate("/Register")
  }
  function person(){
    navigate("/Chat1")
  }
  function group(){
    navigate("/Group")
  }
  const savedata= () =>{
    let status = true;
    if (status){
      const token = sessionStorage.getItem('token');
      const formData = new FormData();
      formData.append("msg",msg);
      

      Axios.post(import.meta.env.VITE_SERVER_URL + '/user/Chat1', formData, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + token
        }
    }).then(function (response) {
        if (response.data.status) { /* empty */ } else {
            
        }
    })
  }
}



useEffect(()=>{
  Axios.get(import.meta.env.VITE_SERVER_URL + '/user/userlist', 
).then(function (response) {
    if (response.data.status) { 
      setlist(response.data.userdata)
     } else {
        alert('error')
    }
}).catch(function (error) {
    console.log(error);
    
}); 


},[]) 
console.log(list) 

  return (

    <div>
      
      <body style={{backgroundColor:""}}></body>
      <button onClick={Loginpage} style={{position:'absolute',left:'90%',paddingLeft:'20px',top:"5%",backgroundColor:"black",color:'white'}}>login</button>
      <button onClick={Registerpage} style={{position:'absolute',left:'83%',top:"5%",backgroundColor:"black",color:'white'}}>Register</button>
      <h1 style={{position:'absolute', top:"5%",left:"50%"}}>SAKTHI...</h1>
      <div>
      <h1 style={{position:'absolute',top:"0",backgroundColor:"rple",color:'whe'}}>MERN CHAT..</h1>
      </div>

      {list.map((data,index)=>{
        console.log(data)
        return (
          <div>
          <button key={index} style={{backgroundColor:"purple",fontSize:'20px',paddingLeft:'8%',paddingRight:'9%',color:'white'}}>ddd</button>
          </div>
        )
        
      })
      }
     <div> 
      <input type='text' onChange={(e) => setmsg(e.target.value)} value={msg} style={{position:'absolute',bottom:'0',left:'50%',transform:'translate(-50%,-50%)',fontSize:'20px',
    zIndex:'1',paddingLeft:'10%',paddingRight:'10%',paddingTop:'20px',border:'2px solid black'}}/>
    <button onClick={savedata} style={{position:'absolute',left:'70%',bottom:'20px',backgroundColor:"blue",fontSize:'20px',paddingLeft:'5%',paddingRight:'5%',color:'white'}}>send</button>  
    

    </div>
    </div>
  )
}

export default chat1
