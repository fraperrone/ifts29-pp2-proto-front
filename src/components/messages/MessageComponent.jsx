

// creamos un message component con Bootstrap para mostrar mensajes de error o exito con tiempo de duracion
import React from 'react'
import { Alert } from 'react-bootstrap'

const MessageComponent = ({ message, type }) => {
    return (
        <Alert variant={type} onClose={() => {}} dismissible className="w-100">
            {message}
        </Alert>
    )
}

export default MessageComponent