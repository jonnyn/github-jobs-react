import React, { Component } from 'react';
import { Container, Row, Col, Table, Pagination, InputGroup, Button } from 'react-bootstrap';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        Description search
                    </Col>
                    <Col md="auto">Spacing</Col>
                    <Col xs lg="2">
                        Location search
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        Full-Time checkbox
                    </Col>
                    <Col md="auto">Spacing</Col>
                    <Col xs lg="2">
                        Go Button
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">Variable width content</Col>
                </Row>
            </Container>
        );
    }
};