import React, { useState } from "react";
import { User } from "../models/User";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    password: "",
  });
  const[success,setSuccess]= useState('');
  const[error,setError]= useState('');
  const navigate = useNavigate(); // Navigate
  //call api
  const apiUrl = "http://localhost:5000/users";
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(!user.name || !user.password){
        setError('Please fill in all fields');
        return;
    }
    fetch(apiUrl)
        .then((response)=>response.json())
        .then((data: User[]) =>{
            const existingUser = data.find(u=>u.name === user.name);
            if(existingUser){
                setError('User with the same name already exists')
            } else{
                 // Post new user to the server
                 fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                    .then(() => {
                        setSuccess('User registered successfully!');
                        setError('');
                        setUser({ id: 0, name: '', password: '' });
                        setTimeout(() => navigate('/'), 2000);  // Redirect to login after 2 seconds
                    })
                    .catch(error => {
                        console.error('Error registering user:', error);
                        setError('Error registering user.');
                    })
                }})
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate('/')}>Go to Login</button>
    </div>
  );
};

export default Register;
