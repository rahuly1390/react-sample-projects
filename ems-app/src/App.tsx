import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DepartmentList } from "./components/DepartmentList";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentForm from "./components/DepartmentForm";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeForm } from "./components/EmployeeForm";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";

function App() {
  const [token, setToken] = useState<string | null>(
    sessionStorage.getItem("token")
  );

  const handleLogout = () => {
    setToken(null);
    sessionStorage.removeItem("token");
  };

  const handleLogin = (jwt:string) => {
    setToken(jwt);
    sessionStorage.setItem('token',jwt);
  };

  return (
    <BrowserRouter>
      {token ? (
        <>
          <Header onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin}/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/department" element={<DepartmentForm />} />
            <Route path="/department/:id" element={<DepartmentForm />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employee" element={<EmployeeForm />} />
            <Route path="/employee/:id" element={<EmployeeForm />} />
          </Routes>
        </>
      ) : (
        <Routes>
            <Route path="/" element={<Login onLogin={handleLogin}/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
