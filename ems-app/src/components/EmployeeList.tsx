import React, { useEffect, useState } from 'react'
import { Employee } from '../models/Employee';
import { Link } from 'react-router-dom';
import { Department } from '../models/Department';

export const EmployeeList:React.FC = () => {
    const [employees,setEmployees] = useState<Employee[]>([]);
    const [departments,setDepartments] = useState<Department[]>([]);
    const apiEmp = 'http://localhost:5000/employees';
    const apiDep = 'http://localhost:5000/departments';
    useEffect(() =>{
        const fetchEmployees = async () =>{
            try{
                const response = await fetch(`${apiEmp}`);
                if(!response.ok)
                    throw new Error("Failed to fetch employees");
                const data:Employee[] = await response.json();
                setEmployees(data);
            }
            catch(error){
                console.error(error);
            }
        };
        const fetchDepartments = async () =>{
            try{
                const response = await fetch(`${apiDep}`);
                if(!response.ok)
                    throw new Error("Failed to fetch Departments");
                const data:Department[] = await response.json();
                setDepartments(data);
            }
            catch(error){
                console.error(error);
            }
        };
        fetchEmployees();
        fetchDepartments();
    },[]);
    const handleDelete = (id: number) => {
       if(id === undefined){
        console.error('Error : Employee ID is not passed');
        return;
       }
       if(window.confirm('Are you sure you want to delete?')){
        fetch(`${apiEmp}/${id}`,{
            method: 'DELETE',
        })
        .then(response => response.ok ? setEmployees(employees.filter(e=>e.id !== id))
        :console.error('Error deleting employee'))
        .catch(e=> console.error('Error Deleting employee',e));
       }
    }

    function getDeptName(departmentId: number): string {
        const dept = departments.find(d=> d.id === departmentId);
        return dept ? dept.name : 'N/A';
    }

    return (
        <div>
          <h2>Employee List</h2>
          <Link to="/employee">
            <button>Add Employee</button>
          </Link>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Date of Joining</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{new Date(employee.dateOfJoining).toLocaleDateString()}</td>
                  <td>{employee.email}</td>
                  <td>{employee.mobileNo}</td>
                  <td>{employee.salary}</td>
                  <td>{getDeptName(employee.departmentId)}</td>
                  <td>
                    <Link to={`/employee/${employee.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
