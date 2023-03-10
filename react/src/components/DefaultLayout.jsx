import {Navigate, Outlet, Link} from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { useEffect } from 'react'
import axiosClient from "../axios-client";


export default function DefaultLayout() {
  const {user, token, notification, setNotification, setToken, setUser } = useStateContext()
  
  if (!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (e) => {
    e.preventDefault()

    axiosClient.post('/logout')
      .then(({}) => {
        setUser({})
        setToken(null)
      })
  }  


  useEffect( () => {
    axiosClient.get('/user')
      .then(({data}) => {
        setUser(data)
        setToken(data)
      })
  }, [])

  return (
    <div id='defaultLayout'>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>

      <div className='content'>
        {notification && <div className='content'>
        <div className='notification'>{notification}</div>
      </div>}
        <header>
          <div>header</div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
          </div>
        </header>

        <main><Outlet/></main>
      </div>
    </div>
  )
}
