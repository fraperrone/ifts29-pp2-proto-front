// generamos el component login

import React from 'react'
const Login = () => {


    handleSubmit = (e) => {
        e.preventDefault()
        // aqui iria la logica de autenticacion
        
        // simulamos un token de autenticacion
        localStorage.setItem('token', '1234567890')
        // redirigimos a la pagina principal
        window.location.href = '/'
    }
  return (
    <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login