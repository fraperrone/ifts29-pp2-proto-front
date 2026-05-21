// generamos el boton cancelar o volver al menu principal

import React from 'react'
import { useNavigate } from 'react-router-dom'

const BotonCancelar = ( {message="Volver"}) => {
  const navigate = useNavigate()
  const irAlMenuPrincipal = () => {
    navigate('/estudios')
  }

  return (
    <button className="btn btn-secondary" onClick={irAlMenuPrincipal}>
      {message}
    </button>
  )
}


export default BotonCancelar