import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useState } from "react";
const Login = (props) => {
    const [data, setData] = useState({})
  const auth = useAuth();

  const handleClickLogin = async(e) => {
    e.preventDefault()
    console.log('data', data)
    await auth.signin(data.email, data.password)
  }
  const handleChange = (e) => {
      const newValues = {
          ...data,
          [e.target.name] : e.target.value
      }
    setData(newValues)
  }
  return (
    <div>
        {auth.user ? <Navigate to="/home" /> :  <>
             <input name='email' onChange={handleChange} type="text" placeholder="Username" />
             <input name='password' onChange={handleChange} type="password" placeholder="Password" />
             <button onClick={handleClickLogin}>Login</button>
        </>}
     
    </div>
  );
};

export default Login;
