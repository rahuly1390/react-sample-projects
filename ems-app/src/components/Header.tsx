import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps{
    onLogout: () => void;
}
const Header:React.FC<HeaderProps> = ({onLogout}) => {
// const navigate = useNavigate();
// const logoutHandler = () =>{
//     sessionStorage.removeItem('token');
//     navigate('/');
// }
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <Link to="/employees">Employee List</Link>
            </li>
            <li className='nav-item'>
                <Link to="/departments">Department List</Link>
            </li>
            <li className='nav-item'>
                <button onClick={onLogout}>Logout</button>
            </li>
            {/* <li className='nav-item'>
                <Link to="/register">Register</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default Header