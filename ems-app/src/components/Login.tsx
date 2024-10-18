import React, { FormEvent, useEffect, useState } from "react";
import { User } from "../models/User";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps{
    onLogin: (token:string) => void;
}

export const Login: React.FC<LoginProps> = ({onLogin}) => {
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    password: "",
  });
const navigate = useNavigate(); // Navigate
  const [error,setError] = useState('');
   //call api
   const apiUrl = 'http://localhost:5000/users';
   useEffect(()=>{
       fetch(`${apiUrl}`)
       .then(response => response.json())
       .then(data => setUserList(data))
       .catch(error => {
        console.error('Error Fetching users',error);
        setError(error);
       })
   },[]);

    const handleLogin = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        //api endpoint
        const existingUser = userList.find(u => u.name === user.name && u.password === user.password);
        if(existingUser){
            //generate simulated JWT Token
            const token = 'mock-jwt-token-for-user';
            onLogin(token);
            // sessionStorage.setItem('token',token);
            navigate('/departments')
        } else{
            setUser({
                id: 0,
                name: "",
                password: "",
            });
            setError('Invalid Username and Password!');
        }
    }

   return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                <label>Name</label>
                <input type="text" value={user.name} onChange={e => setUser({...user,name:e.target.value})} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={user.password} onChange={e => setUser({...user,password:e.target.value})} required />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
            <Link to='/register'>Register</Link>
        </form>
    </div>
);
};
