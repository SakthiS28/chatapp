import Axios from 'axios';
import React, {useState,useEffect} from 'react';
import { Button,TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Login() {
  const [email, setemail] = useState<string>('');
  const [emailError, setemailError] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [passwordError, setpasswordError] = useState<string>('');

  const [page, setpage] = useState<string>("")

  const navigate = useNavigate()
  

  const saveData = () => {
    setemailError('')
    setpasswordError('')
    let returnStatus = true;
    if (email == '') {
        setemailError('error');
        returnStatus = false;
    }
    if (password == '') {
        setpasswordError('error')
        returnStatus = false;
    }

    if (returnStatus) {
        const token = sessionStorage.getItem('token');
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
       

        Axios.post(import.meta.env.VITE_SERVER_URL + '/user/login', {"email":email,"password":password}, {
            headers: {
                
                "Authorization": 'Bearer ' + token
            }
        }).then(function (response) {
            if (response.data.status) { console.log(response)
              
            } else {
                
            }
        }).catch(function (error) {
            console.log(error);
            toast.error(error.message);
        });


    }

    

      




}
//

  return (
    <div className="box" style={{marginLeft:"600px", textAlign:"center",border:"2px solid black", padding:"80px"}}>
      <h1>Login</h1>
      <div>Email <span style={{ color: 'red' }}> *</span>
      </div>
      <div>
      <TextField id="outlined-basic" value={email} variant="outlined" onChange={(e) => setemail(e.target.value)} />
      {emailError === 'error' && <div><span style={{ color: 'red', fontSize: 10 }}>product name required</span></div>}
      </div> 
      <div>password <span style={{ color: 'red' }}> *</span>
      </div>
      <div>
      <TextField id="outlined-basic" value={password} variant="outlined" onChange={(e) => setpassword(e.target.value)} />
      {passwordError === 'error' && <div><span style={{ color: 'red', fontSize: 10 }}>product name reuired</span></div>}
      </div>


      
                  
      <div>
         <button onClick={saveData}>login</button>
      </div>
      <p>forgot password?</p>
      
    </div>
  )
};

export default Login