import { Button, TextField } from '@mui/material'
import './index.scss'
import { toast } from "react-toastify";
import { useState } from 'react';

const LOGIN = () => {
  const [username, userNameUpdate] = useState('');
  const [password,passwordUpdate] = useState('')
  const ProceedLogin = (e)=>{
    e.preventDefault()
    if(validate()){
      // console.log('proceed');
      fetch()
    }
  }
  const validate = ()=>{
    let result=true;
    if(username ==='' || username===null){
      result=false;
       toast.warning('Please Enter Username')
    }
    if(password ==='' || password===null){
      result=false;
       toast.warning('Please Enter Password')
    }
    return result
  }
  return (
    <form className='form-style' onSubmit={ProceedLogin}>
     <TextField value={username} onChange={e=>userNameUpdate(e.target.value)} id="outlined-basic" label="Admin Name *" variant="outlined" />
     <TextField type='password' value={password} onChange={e=>passwordUpdate(e.target.value)} id="outlined-basic" label="Password *" variant="outlined" />
     <Button variant='contained' color='info'>LOG IN</Button>
 
    </form>
  )
}

export default LOGIN
