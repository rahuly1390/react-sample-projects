import React, { useEffect, useState } from 'react'
import { Department } from '../models/Department'
import { Link } from 'react-router-dom';

export const DepartmentList:React.FC = () => {
    const [departments,setDepartments] = useState<Department[]>([]);

    //call api
    const apiUrl = 'http://localhost:5000/departments';
    useEffect(()=>{
        fetch(`${apiUrl}`)
        .then(response => response.json())
        .then(data => setDepartments(data))
        .catch(error => console.error(error,'Error Fetching Department'))
    },[]);

    const handleDelete = (id: number) =>{
      if(id === undefined){
        console.error('Error : Department ID is not passed');
        return;
       }
       if(window.confirm('Are you sure you want to delete?')){
        fetch(`${apiUrl}/${id}`,{
            method: 'DELETE',
        })
        .then(response => response.ok ? setDepartments(departments.filter(e=>e.id !== id))
        :console.error('Error deleting department'))
        .catch(e=> console.error('Error Deleting department',e));
       }
    }

  return (
    <div className='container'>
      <h2>Department List</h2>
      <Link to="/department">
        <button>Add Department</button>
      </Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id || department.name}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>
                <Link to={`/department/${department.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(department.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
