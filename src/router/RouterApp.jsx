// generamos el componente RouterApp para manejar las rutas de la aplicacion
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import ProtectedRoute from '../components/ProtectedRoute'
import HomePage from '../pages/HomePage'
import EstudiosPage from '../pages/EstudiosPage'
import LoginPage from '../pages/LoginPage'
import RegistrarPacientePage from '../pages/RegistrarPacientePage'
import AcreditarPaciente from '../pages/AcreditarPaciente'
import PagosPage from '../pages/PagosPage'
import InsumosPage from '../pages/InsumosPage'
import EstadoPacientePage from '../pages/EstadoPacientePage'
import AsignarTurnoPage from '../pages/AsignarTurnoPage'
import CancelarTurnoPage from '../pages/CancelarTurnoPage'
import ConfigurarAgendaPage from '../pages/ConfigurarAgendaPage'
import RealizacionEstudioPage from '../pages/estudios/RealizacionEstudioPage'
// generamos rutas protegias y de logueo
const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {/* ruta de login */}
        <Route path="/login" element={<LoginPage />} />
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
          <Route path="/registrar-paciente" element={<RegistrarPacientePage />} />
          <Route path="/acreditacion-paciente" element={<AcreditarPaciente />} />
          <Route path="/pagos" element={<PagosPage />} />
          <Route path="/insumos" element={<InsumosPage />} />
          <Route path="/estado-paciente" element={<EstadoPacientePage />} />
          <Route path='/asignar-turno' element={<AsignarTurnoPage />} />
          <Route path='/cancelar-turno' element={<CancelarTurnoPage />} />
          <Route path='/configurar-agenda' element= {<ConfigurarAgendaPage/>} />
          <Route path='/realizacion-estudio' element= {<RealizacionEstudioPage />} />
        </Route>
      </Routes>
    </Router>
  )
}


export default RouterApp