import Axios from 'axios';
import React, {useState} from 'react';
import { Button,TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


function Register() {
  const [firstname, setfirstname] = useState<string>('');
  const [firstnameError, setfirstnameError] = useState<string>('');
  const [lastname, setlastname] = useState<string>('');
  const [lastnameError, setlastnameError] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [emailError, setemailError] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [passwordError, setpasswordError] = useState<string>('');
  const navigate = useNavigate()
  function Loginpage() {
  navigate("/")
  }

  const saveData = () =>{
    setfirstnameError('')
    setlastnameError('')
    setemailError('')
    setpasswordError('')
    let resultstatus = true;
    if(firstname ==''){
      setfirstnameError("error")
      resultstatus = false;
    }
    if(lastname ==''){
      setlastnameError("error")
      resultstatus = false;
    }
    if(email ==''){
      setemailError("error")
      resultstatus = false;
    }
    if(password ==''){
      setpasswordError("error")
      resultstatus = false;
    }

    if (resultstatus){
      const token = sessionStorage.getItem("token");
      const formData = new FormData();
      formData.append("firstname",firstname);
      formData.append("lastname",lastname);
      formData.append("email",email);
      formData.append("password",password);


      Axios.post(import.meta.env.VITE_SERVER_URL + '/user/Register', formData, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + token
        }
    }).then(function (response) {
        if (response.data.status) { console.log(response)
          //navigate("/")
         } else {
            alert('error')
        }
    }).catch(function (error) {
        console.log(error);
        toast.error(error.message);
    });
    }
  }

  return (
    <div style={{marginLeft:"600px", textAlign:"center",border:"2px solid black", paddingTop:"30px", paddingLeft:"90px", paddingRight:"90px"}}>
      <h1>Register</h1>
      <div>firstname <span style={{ color: 'red' }}> *</span>
      </div>
      <div>
      <TextField id="outlined-basic"  variant="outlined" onChange={(e) => setfirstname(e.target.value)} />
      {firstnameError === 'error' && <div><span style={{ color: 'red', fontSize: 10 }}> firstname required</span></div>}
      </div>  
      <div>lastname <span style={{ color: 'red' }}> *</span>
      </div>
      <div>
      <TextField id="outlined-basic"  variant="outlined"onChange={(e) => setlastname(e.target.value)} />
      {lastnameError === 'error' && <div><span style={{ color: 'red', fontSize: 10 }}>lastname required</span></div>}
      </div> 
      <div>email <span style={{ color: 'red' }}> *</span>
      </div>
      <div>
      <TextField id="outlined-basic"  variant="outlined" onChange={(e) => setemail(e.target.value)} />
      {emailError === 'error' && <div><span style={{ color: 'red', fontSize: 10 }}> email required</span></div>}
      </div> 
      <div>password <span style={{ color: 'red' }}> *</span>
      </div>
      <div>
      <TextField id="outlined-basic"  variant="outlined" onChange={(e) => setpassword(e.target.value)} />
      {passwordError === 'error' && <div><span style={{ color: 'red', fontSize: 10 }}> password required</span></div>}
      </div> 
      <div>
      <Button variant="contained" onClick={saveData}>Register</Button>
      </div>
      <p>forgot password?</p>
      <button onClick={Loginpage} style={{backgroundColor:"green" ,}}>register</button>
    </div>
  )
}

export default Register