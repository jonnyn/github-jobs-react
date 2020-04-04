import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FilteringPanel, PaginatedTable } from 'sections';

export default class Landing extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <FilteringPanel />
                </Row>
                <Row>
                    <PaginatedTable />
                </Row>
            </Container>
        );
    }
};