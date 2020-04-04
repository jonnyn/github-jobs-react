import React from 'react'
import { Container, Spinner } from 'react-bootstrap';

const AppSpinner = () => (
    <Container fluid="md">
        <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    </Container>
);

export default AppSpinner;