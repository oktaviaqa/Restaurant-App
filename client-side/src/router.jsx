import App from './App'
import { createBrowserRouter, redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/category/:id',
                element: <CategoryPage />
            },
            {
                path: '/detail-page/:id',
                element: <DetailPage />
            }
        ],
    },

])

export default router


