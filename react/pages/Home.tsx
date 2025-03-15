import { List } from '@mui/material';
import Axios from 'axios';
import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
    function Loginpage(){
      navigate("/")
    }
    const [list, setlist] = useState<any[]>([])
    const [getusername , setgetusername]= useState<string>("")
    const [getid , setgetid]= useState<string>("")
    const [msg , setmsg]= useState<string>("")
   


    function Registerpage(){
      navigate("/Register")
    }
    function person(){
      navigate("/Chat1")
    }
    function group(){
      navigate("/Group")
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
    
     

      

},[]) ;
   function nextpage(getdata:any){
    console.log(getdata)
    setgetusername(getdata.firstname)
    
    

   }


   /////
   const savedata = (getdata:any) => {
    let resultstatus = true;

    if (resultstatus){

      const token = sessionStorage.getItem("token");
      const formData = new FormData();

      
      formData.append("receiverid",getid);
      formData.append("msg",msg);
      console.log(getid)
      console.log(msg)

      Axios.post(import.meta.env.VITE_SERVER_URL + '/user/chat', {"msg":msg ,"receiverid":getid
        
      }, {
        headers: {
          
          "Authorization": 'Bearer ' + token
        }
    }).then(function (response) {
        if (response.data.status) { 
          
        } else {
          alert('error')
        }
   });

  }
}



    console.log(list)   
  return (
    
    <div>
      
      <button onClick={Loginpage} style={{position:'absolute',left:'90%',paddingLeft:'20px',top:"5%",backgroundColor:"black",color:'white'}}>login</button>
      <button onClick={Registerpage} style={{position:'absolute',left:'83%',top:"5%",backgroundColor:"black",color:'white'}}>Register</button>
      <h1  style={{position:'absolute',top:"0",left:"50%"}}>{getusername}</h1>
      <h1  style={{position:'absolute',top:"30%",left:"50%"}}>{getid}</h1>
      
      <h1 style={{position:'absolute',top:"0",backgroundColor:"purple",color:'white'}}>MERN CHAT..</h1>
      
      {list.map((data,index)=>{
        console.log(data)
        return (
          <div>
          <button onClick={()=>nextpage(data)}
            key={index} style={{backgroundColor:"purple",fontSize:'20px',width:"40vh",color:'white',border:"2px solid black",marginTop:"10px"}}> {data.firstname }</button>
          
          </div>
        )
        
      })
      }
      <div> 
      <input onChange={(e)=> setmsg(e.target.value)} style={{position:'absolute',bottom:'0',left:'50%',transform:'translate(-50%,-50%)',fontSize:'20px',
    zIndex:'1',paddingLeft:'10%',paddingRight:'10%',paddingTop:'20px',border:'2px solid black'}}/>
    <button onClick={savedata} style={{position:'absolute',left:'70%',bottom:'20px',backgroundColor:"blue",fontSize:'20px',paddingLeft:'5%',paddingRight:'5%',color:'white'}}>send</button>  
    

    </div>
    </div>
      
   
  )
  
}

export default Home


