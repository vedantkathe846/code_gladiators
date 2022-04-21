import React, {useState} from 'react';
import "./App.css";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function App() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = () => {
    //send data to back end 
    //get if user is new or old and save it in higher state
    setName('');
    setPass('');
  }
  return (
    <Container className="container" sx={{display: 'flex'}}>
      <div>
        <div className="form-ctn">
          <h1>Login Form</h1>
          <TextField id="outlined-basic" label="Username" variant="outlined" value={name}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" value={pass}/>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
