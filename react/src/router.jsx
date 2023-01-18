import {createBrowserRouter, Navigate} from 'react-router-dom';
import Login from './views/Login'
import Signup from './views/Signup'
import Users from './views/Users' 
import UserForm from './views/UserForm';
import NotFound from './views/NotFound'
import DefaultLayout from './components/DefaultLayout' 
import GuestLayout from './components/GuestLayout'
import Dashboard from './views/Dashboard'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [

            {
                path: '/',
                element: <Navigate to='/' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },

        ]
        
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;