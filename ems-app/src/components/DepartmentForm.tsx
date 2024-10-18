import React, { useEffect, useState } from 'react'
import { Department } from '../models/Department'
import { Link, useNavigate, useParams } from 'react-router-dom';

const DepartmentForm:React.FC = () => {
    const [dept,setDepartment] = useState<Department>({ id:0,name:''});
    const navigate = useNavigate(); // Navigate
    const { id } = useParams();
    const deptId = id ? Number(id):null;

    const apiUrl = 'http://localhost:5000/departments';
    //if id exists , update -> API -> existing department details
    useEffect(()=>{
        if(deptId){
            fetch(`${apiUrl}/${deptId}`)
            .then(response => response.json())
            .then(data => setDepartment(data))
            .catch(error => console.error(error,'Error Fetching Department'))
        }
    },[deptId]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDepartment({ ...dept, [name]: value });
      };

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
     
        if (deptId) {
          // Edit department
          fetch(`${apiUrl}/${deptId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dept),
          })
            .then(response => response.json())
            .then(() => {
              console.log('Department updated successfully');
              navigate('/department'); // Redirect to department list
            })
            .catch(error => console.error('Error updating department:', error));
        } else {
          // Add new department
          fetch(`${apiUrl}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dept),
          })
            .then(response => response.json())
            .then(() => {
              console.log('Department added successfully');
              navigate('/department'); // Redirect to department list
            })
            .catch(error => console.error('Error adding department:', error));
        }
      };
     
  return (
    <div>
      <h1>{deptId ? 'Edit Department' : 'Add Department'}</h1>
      <form onSubmit={handleSubmit} className="employee-form-container">
        {dept.id !==0 && (
          <div>
            <label>Id:</label>
            <input type="text" name="id" value={dept.id} disabled />
          </div>
        )}
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={dept.name} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">{deptId ? 'Update' : 'Add'} Department</button>
          <Link to="/departments">
                 <button>Go to DepartmentList</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default DepartmentForm