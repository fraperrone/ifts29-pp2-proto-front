// generamos el boton cancelar o volver al menu principal

import React from 'react'
import { useNavigate } from 'react-router-dom'

const BotonCancelar = () => {
  const navigate = useNavigate()
  const irAlMenuPrincipal = () => {
    navigate('/estudios')
  }

  return (
    <button className="btn btn-secondary" onClick={irAlMenuPrincipal}>
      Cancelar
    </button>
  )
}


export default BotonCancelar