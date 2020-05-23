import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

//store
import { signin, getUser } from '../store/ducks/auth';


export default function Login(){

  const dispatch = useDispatch();

  const defaultValue = {
    username: '',
    password: ''
  }
  const [user, setUser] = useState(defaultValue);
  
  const handleChange = (value, label) => {
    setUser({...user, [label]: value});
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      console.log(user)
      await dispatch(signin(user.username, user.password));
      await dispatch(getUser());
      setUser(defaultValue)
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <input type="text" value={user.username} onChange={(e) => handleChange(e.target.value, 'username')}/>
        <input type="text" value={user.password} onChange={(e) => handleChange(e.target.value, 'password')}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}