// generamos el component login

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  //usamos navigate
  //genemaos los use state del formulario
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // aqui iria la logica de autenticacion

    // if (email === 'user@example.com' && password === 'password') {
    //   localStorage.setItem('token', '1234567890')
    // } else {
    //   alert('Credenciales incorrectas')
    //   return
    // }

    // redirigimos a la pagina principal
    // usamos navigate

    localStorage.setItem('token', '1234567890')
    navigate('/')
    // navigate('/')
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
