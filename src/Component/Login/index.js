
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import "./Login.css";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function Login({update}) {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
  
    const handleSubmit = () => {
      //send data to back end 
      //get if user is new or old and save it in higher state
    //   update
      setName('');
      setPass('');
      navigate('/blogs')

    }
  return (
    <Container className="container" sx={{display: 'flex'}}>
      <div>
        <div className="form-ctn">
          <h1>Login Form</h1>
          <TextField id="outlined-basic" label="Username" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange={(e) => setPass(e.target.value)} />
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </Container>
  )
}
