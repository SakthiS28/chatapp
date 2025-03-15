import React ,{useState} from 'react';
import Axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function group() {
  const navigate = useNavigate()
  function Loginpage(){
    navigate("/")
  }
  
  function Registerpage(){
    navigate("/Register")
  }
  function sakthi(){
    navigate("/Chat1")

  }
    const [text2,settext2]=useState<string>('');
    const datas= () =>{
      let status = true;

      if (status) {
        const token = sessionStorage .getItem('token');
        const formData = new FormData()
        formData.append("text2",text2);

        Axios.post(import.meta.env.VITE_SERVER_URL +'/user/group', formData,{
          headers:{
            'Content-type':'application/json',
            "Authorization":'bearer' + token
          }
        }).then(function (response){
          if (response.data.status) {/* empty */} else {

          }
        }
      )

        
      }
    }
  
  return (
    <div >
      <body style={{backgroundColor:"black"}}></body>
      <button onClick={Loginpage} style={{position:'absolute',left:'90%',paddingLeft:'20px',top:"5%",backgroundColor:"black",color:'white'}}>login</button>
      <button onClick={Registerpage} style={{position:'absolute',left:'83%',top:"5%",backgroundColor:"black",color:'white'}}>Register</button>
      <h1 style={{position:'absolute', top:"5%",left:"50%"}}>GROUP...</h1>

      <h1 style={{position:'absolute',top:"0",backgroundColor:"purple",color:'white'}}>MERN CHAT..</h1>
      <button onClick={sakthi} style={{position:'absolute',top:"15%",backgroundColor:"purple",fontSize:'20px',paddingLeft:'8%',paddingRight:'9%',color:'white'}}>sakthi</button>
      <button style={{position:'absolute',top:"25%",backgroundColor:"purple",fontSize:'20px',paddingLeft:'8%',paddingRight:'9%',color:'white'}}>sakthi</button>
      <button style={{position:'absolute',top:"35%",backgroundColor:"purple",fontSize:'20px',paddingLeft:'8%',paddingRight:'9%',color:'white'}}>sakthi</button>
      <button style={{position:'absolute',top:"45%",backgroundColor:"purple",fontSize:'20px',paddingLeft:'8%',paddingRight:'9%',color:'white'}}>sakthi</button>
      <input type='text' onChange={(e) => settext2(e.target.value)} value={text2} style={{position:'absolute',bottom:'0',left:'50%',transform:'translate(-50%,-50%)',fontSize:'20px',
    zIndex:'1',paddingLeft:'10%',paddingRight:'10%',paddingTop:'20px'
   }}/>
   <button onClick={datas} style={{position:'absolute',left:'70%',bottom:'20px',backgroundColor:"green",fontSize:'20px',paddingLeft:'5%',paddingRight:'5%',color:'white'}}>send</button>  
   
   

    </div>
  )
}

export default group
