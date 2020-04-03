import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        );
    }
};