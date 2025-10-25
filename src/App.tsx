
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Rules from './pages/Rules/Rules'
import Layout from './Layout'
import AboutUs from './pages/AboutUs/AboutUs'


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
      }
    ]
  }
])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
