import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
}from 'react-router-dom'
import Root from './Root.jsx'
import SignupForm from './SignupForm.jsx'
import NewBlog from './NewBlog.jsx'
import Blogs from './Blogs.jsx'
import LoginForm from './LoginForm.jsx'
import PrivateRoutes from './PrivateRoutes.jsx'
import Trending from './Trending.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element:<Root/>,
  children:[
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/signup',
      element:
     
      <SignupForm/>
    },
    {
      path:'/new',
      element:
      (
        <PrivateRoutes>
          <NewBlog/>
        </PrivateRoutes>
      )
    },
    {
      path:'/blogs',
      element:<Blogs/>
    },
    {
      path:'/login',
      element:<LoginForm/>
    },
    {
      path:'/trending',
      element:<Trending/>
    },
    
  ]
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
