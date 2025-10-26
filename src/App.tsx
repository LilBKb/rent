
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Rules from './pages/Rules/Rules'
import Layout from './Layout'
import AboutUs from './pages/AboutUs/AboutUs'
import Auth from './pages/Auth/Auth'
import Registration from './pages/Registration/Registration'
import Rent from './pages/Rent/Rent'
import LKPage from './pages/LKPage/LKPage'
import Rents from './pages/Rents/Rents'


function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/rules',
        element:<Rules/>
      },
      {
        path:'/about-us',
        element:<AboutUs/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/registration',
        element:<Registration/>
      },
      {
        path:'/rent-car',
        element:<Rent/>
      },
      {
        path:'/lk-page',
        element:<LKPage/>
      },
      {
        path:'/rents',
        element:<Rents/>
      }
    ]
  }
])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
