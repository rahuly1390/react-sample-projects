import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Employee } from '../models/Employee';
import { Department } from '../models/Department';

export const EmployeeForm:React.FC = () => {
    const [departments,setDepartments] = useState<Department[]>([]);
    const [emp,setEmployee] = useState<Employee>({ id: 0,
        name: "",
        dateOfJoining: new Date(),
        email: "",
        mobileNo: 0,
        salary: 0,
        departmentId: 0});
    const navigate = useNavigate(); // Navigate
    const { id } = useParams();
    const employeeId = id ? Number(id):null;

    const apiEmp = 'http://localhost:5000/employees';
    const apiDep = 'http://localhost:5000/departments';
    //if id exists , update -> API -> existing employee details
    useEffect(()=>{
        if(employeeId){
            fetch(`${apiEmp}/${employeeId}`)
            .then(response => response.json())
            .then(data => setEmployee({...data, dateOfJoining: new Date(data.dateOfJoining)}))
            .catch(error => console.error(error,'Error Fetching Employee'))
        }

        fetch(`${apiDep}`)
        .then(response => response.json())
        .then(data => setDepartments(data))
        .catch(error => console.error(error,'Error Fetching Department'))
    },[employeeId]);


      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
     
        if (employeeId) {
          // Edit Employee
          fetch(`${apiEmp}/${employeeId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emp),
          })
            .then(response => response.json())
            .then(() => {
              console.log('Employees updated successfully');
              navigate('/employees'); // Redirect to employee list
            })
            .catch(error => console.error('Error updating employees:', error));
        } else {
          // Add new employee
          fetch(`${apiEmp}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emp),
          })
            .then(response => response.json())
            .then(() => {
              console.log('Employee added successfully');
              navigate('/employees'); // Redirect to employees list
            })
            .catch(error => console.error('Error adding employees:', error));
        }
      };
    const handleCancel = () => {
        navigate('/employees');    
    }

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
        const { name , value} = event.target;
        if(name === "dateOfJoining"){
            setEmployee({...emp,[name]: new Date(value)});
        } else{
            setEmployee({...emp,[name]: name  === "departmentId"? Number(value): value});
        }
    }

      return (
        <div className='container mt-2'>
          <h2>{employeeId ? "Edit Employee" : "Add Employee"}</h2>
          <form onSubmit={handleSubmit} className="employee-form-container">
           <div className='row mb-2'>
            <div className='form-group col-md-4'>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className='form-control'
                value={emp.name}
                minLength={5}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group col-md-4'>
              <label>Date of Joining:</label>
              <input
                type="date"
                name="dateOfJoining"
                className='form-control'
                value={emp.dateOfJoining ? emp.dateOfJoining.toISOString().split("T")[0] : ""}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className='row mb-2'>
            <div className='form-group col-md-4'>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className='form-control'
                value={emp.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group col-md-4'>
              <label>Mobile No:</label>
              <input
                type="text"
                name="mobileNo"
                className='form-control'
                pattern="[1-9]{1}[0-9]{9}"
                value={emp.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className='row mb-2'>
            <div className='form-group col-md-4'>
              <label>Salary:</label>
              <input
                type="number"
                name="salary"
                className='form-control'
                value={emp.salary}
                onChange={handleChange}
                min={1}
                required
              />
            </div>
            <div className='form-group col-md-4'>
              <label>Department:</label>
              <select
                name="departmentId"
                className='form-select'
                value={emp.departmentId}
                onChange={handleChange}
                required
              >
                <option value="" disabled className='form-control'>Select a department</option>
                {departments.map(department => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
            </div>
            <div className="form-actions clearfix">
              <button className='btn btn-primary me-2' type="submit">{employeeId ? "Update" : "Add"} Employee</button>
              <button className='btn btn-danger' type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      );
     
}
