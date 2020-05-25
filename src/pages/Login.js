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
  const [error, setError] = useState({
    field: "",
    message: ""
  })
  const auth = useSelector(state => state.auth, []);
  
  const handleChange = (value, label) => {
    setUser({...user, [label]: value});
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await dispatch(signin(user.username, user.password));
      setUser(defaultValue)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setError(err.data[0])
    }
  };

  useEffect(() => {
    if (!auth.logged){
      dispatch(getUser());
    }
  }, [auth.logged, dispatch]);

  if (!loading && auth.logged) {
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

  // if (loading){
  //   return(<>Carregando</>)
  // }

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)} style={{margin: '50px', display: 'flex', flexDirection: 'column', maxWidth: '200px'}}>
        <label>Usuário</label>
        <input type="text" value={user.username} onChange={(e) => handleChange(e.target.value, 'username')}/>
        <label>Senha</label>
        <input type="text" value={user.password} onChange={(e) => handleChange(e.target.value, 'password')}/>
        <button type="submit">Login</button>
        {
          error.message ? (
            <p>{error.message}</p>
          ) : (
            <></>
          )
        }
      </form>
    </div>
  )
}