import React from 'react'
import { useRoutes } from 'react-router-dom'
import { SigninPage } from './pages/Signin'


const Routes = () => {
    let element = useRoutes([
      {
        path:"signin",
        element:<SigninPage/>
      }
    ])

  return (
    element
  )
}

export default Routes