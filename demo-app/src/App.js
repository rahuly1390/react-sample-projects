import './App.css';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Container from 'react-bootstrap/Container';
import Footer from './components/layout/Footer';
import { Routes, Route } from "react-router-dom";
import Planning from './components/planning/Planning';
import Retirement from './components/retirement/Retirement';
import Accounts from './components/accounts/Accounts';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container className='mt-5'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="accounts" element={ <Accounts/> } />
        <Route path="planning" element={ <Planning/> } />
        <Route path="planning/retirement" element={ <Retirement/> } />
      </Routes>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
