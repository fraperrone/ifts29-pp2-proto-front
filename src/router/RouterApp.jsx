// generamos el componente RouterApp para manejar las rutas de la aplicacion
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import MainLayout from '../layout/MainLayout'
import ProtectedRoute from '../components/ProtectedRoute'
import HomePage from '../pages/HomePage'
import EstudiosPage from '../pages/EstudiosPage'

// generamos rutas protegias y de logueo
const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {/* ruta de login */}
        <Route path="/login" element={<Login />} />
        {/* rutas protegidas con MainLayout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/estudios" element={<EstudiosPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}


export default RouterApp