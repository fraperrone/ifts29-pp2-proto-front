// generamos protected route
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // verificamos si el usuario esta logueado
  //   const isAuthenticated = localStorage.getItem('token') !== null
  //     // si no esta logueado redirigimos al login
  //   if (!isAuthenticated) {
  //     return <Navigate to="/login" />
  //   }
  //   return children

  return <Navigate to="/login" />
}

export default ProtectedRoute
