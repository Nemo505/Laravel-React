import { set } from 'lodash';
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from '../axios-client';

export default function UserForm() {

  const {id} = useParams();
  useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [errors, setErrors] = useState(null)

  if (id) {
    useEffect( () => {
      setLoading(true)
      axiosClient.get(`/users/${id}`)

      .then(({data}) => {
          setLoading(false)
          setUser(data)
      })

      .catch(() => {
        setLoading(false)
      })
    }, [])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      axiosClient.put(`/users/${user.id}`, user)
        .then(() => {

        })
    }
  }

  return (
    <div>
      {user.id && 
        <h1>Update User: {user.name}</h1>
      }
      {!user.id && 
        <h1>New User</h1>
      }   
      <div className="card animated fadeInDown">
          {loading && 
            (<div className='text-center'>
              Loading...
            </div>)
          }
          {errors && 
              <div className='alert'>
                {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>}
          {!loading &&
            <form action="" onSubmit={onSubmit}>
              <input value={user.name} onChange={e => setUser({...user, name: e.target.value} )} type="" placeholder='name' />
              <input value={user.email} onChange={e => setUser({...user, email: e.target.value} )} type="" placeholder='email' />
              <input value={user.password} onChange={e => setUser({...user, password: e.target.value} )} type="" placeholder='password' />
              <input value={user.password_confirmation} onChange={e => setUser({...user, password_confirmation: e.target.value} )}type="" placeholder='password confirmation' />
              <button className='btn'>Save</button>
            </form>
          }
          
      </div>
    </div>
  )
}
