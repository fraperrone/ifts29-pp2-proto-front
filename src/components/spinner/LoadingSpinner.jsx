import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100px" }}>
            <Spinner animation="border" role="status" variant="primary" className="me-2">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <span className="text-primary fw-bold">Cargando...</span>
        </div>
    );
};

export default LoadingSpinner;