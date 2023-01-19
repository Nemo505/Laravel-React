import { useEffect, useState } from 'react';
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect( () => {
      getUsers();
  }, [])

  const getUsers = () => {
    setLoading(true);

    axiosClient.get('/users')

      .then(({data}) => {
        setLoading(false);
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const onDelete = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return
    }

    axiosClient.delete(`/users/${user.id}`)

    .then(()=> {
        getUsers();
    })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Users</h1>
        <Link to="/users/new" className='btn-add'>Add New </Link>
      </div>
      <div className="card animated fadeInDown">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          {loading && <tbody>
            <tr>
              <td colSpan="5" className='text-center'>Loading......</td>
            </tr>
          </tbody>}

          {!loading && <tbody>
            {users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.created_at}</td>
                <td>
                  <Link className='btn-edit' to={"/users/"+user.id}>Edit</Link>
                  <button onClick={ ev => onDelete(user) } className='btn-delete'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          }
        </table>
      
      </div>
    </div>
  )
}
