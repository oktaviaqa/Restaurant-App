import App from './App'
import { createBrowserRouter, redirect } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Item from './pages/Item'
import Category from './pages/Category'
import Register from './pages/Register'
import AddItem from './pages/AddItem'
import AddCategory from './pages/AddCategory'
import EditItem from './pages/EditItem'
import EditCategory from './pages/EditCategory'

function authenticatedUserOnly() {
    if (localStorage.access_token) {
        return redirect('/');
    } else {
        return false
    }
}
function unauthenticated() {
    if (!localStorage.access_token) {
        return redirect('/login');
    } else {
        return false
    }
}

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
        loader: authenticatedUserOnly,
    },
    {
        path: '/',
        element: <App />, 
        loader: unauthenticated,
        children: [
            {
                path: '',
                element: <Dashboard />,
                
               
            },
            {
                path: '/item',
                element: <Item />,
            },
            {
                path: '/category',
                element: <Category />,
                
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/addItem',
                element: <AddItem />,
            },
            {
                path: '/edit-item/:id',
                element: <EditItem />,
            },
            {
                path: '/add-category',
                element: <AddCategory />,
            },
            {
                path: '/edit-category/:id',
                element: <EditCategory />,
            }
        ],
    },

])

export default router


