import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FilteringPanel, PaginatedTable } from 'sections';

export const Landing = () => (
    <Container>
        <Row className="justify-content-md-center">
            <FilteringPanel />
        </Row>
        <Row>
            <PaginatedTable />
        </Row>
    </Container>
);

export default Landing