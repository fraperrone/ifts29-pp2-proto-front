// generamos el component login

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


// importar message
import MessageComponent from './MessageComponent'

const Login = () => {
  //usamos navigate
  //genemaos los use state del formulario - dejamos valores predeterminados
  const [email, setEmail] = React.useState('admin@example.com')
  const [password, setPassword] = React.useState('password')
  const [message, setMessage] = React.useState('')

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // aqui iria la logica de autenticacion

    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('token', '1234567890')
    } else {
      // creamos un message box
      setMessage('Credenciales incorrectas')
      return
    }

    
    // limpiamos el mensaje de error
    setMessage('')

    navigate('/')
  }
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center flex-column">
      {/* hacemos el login con Card */}

      {/* hacemos un if si hay error de credencial se muestra el mensaje error de credenciales */}
      {message && <MessageComponent message={message} type="danger" />}



      <div className="card mt-5">
        {/* agregamos imagen de la clinica en otra parte del card */}
        <div className="card-header">
          <img src="imagenes/clinica_exterior.png" className="card-img-top" alt="Imagen de la clínica" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* probamos message */}
      {/* <MessageComponent message="Credenciales incorrectas" type="danger" /> */}
    </div>
  )
}

export default Login
