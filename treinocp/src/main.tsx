import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home/home.tsx'
import About from './pages/About/about.tsx'

const router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/About",
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
