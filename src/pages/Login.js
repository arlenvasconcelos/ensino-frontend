import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

//store
import { signin, getUser } from '../store/ducks/auth';

export default function Login({location}){

  const dispatch = useDispatch();

  const defaultValue = {
    username: '',
    password: ''
  }

  const [user, setUser] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const auth = useSelector(state => state.auth, []);
  
  const handleChange = (value, label) => {
    setUser({...user, [label]: value});
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      console.log(user)
      await dispatch(signin(user.username, user.password));
      setRedirect(true)
      setUser(defaultValue)
    } catch (err) {
      setLoading(false)
      setRedirect(false)
      console.log(err)
    }
  };

  useEffect(() => {
      dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (redirect && auth.user.id !== -1) setLoading(false);
  }, [auth.user.id, redirect]);

  if (auth.logged) {
    switch(auth.user.type){
      case "Aluno":
        return <Redirect to={{ pathname: '/aluno', state: { from: location } }} />;
      case "Servidor":
        return <Redirect to={{ pathname: '/servidor', state: { from: location } }} />;
      case "Admin":
        return <Redirect to={{ pathname: '/admin', state: { from: location } }} />;
      default:
        return <Redirect to={{ pathname: '/', state: { from: location } }} />
    }
  }

  if (loading){
    return(<>Carregando</>)
  }


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