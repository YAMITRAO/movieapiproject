import React from 'react'
import Project from './components/Project'
import Aboutus from './components/AboutUs/Aboutus'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter([
  {path:"/", element: <Project/>},
  {path:"/aboutus", element:<Aboutus />}
])


const App = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default App