// generamos el component login

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  //usamos navigate
  //genemaos los use state del formulario - dejamos valores predeterminados
  const [email, setEmail] = React.useState('admin@example.com')
  const [password, setPassword] = React.useState('password')

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // aqui iria la logica de autenticacion

    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('token', '1234567890')
    } else {
      alert('Credenciales incorrectas')
      return
    }

    // redirigimos a la pagina principal
    // usamos navigate

    navigate('/')
    // navigate('/')
  }
  return (
    <div className="container mt-5 d-flex justify-content-center ">
      {/* hacemos el login con Card */}
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
    </div>
  )
}

export default Login
