import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from 'redux/jobsSlice';
import { Col, Form, Button } from 'react-bootstrap';

class FilteringPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localKeyword: '',
            localLocation: '',
            localFullTime: false
        };
    }

    onChangeSearch = e => {
        this.setState({localKeyword: e.target.value});
    }

    onChangeLocation = e => {
        this.setState({localLocation: e.target.value});
    }

    onChangeFullTime = e => {
        this.setState({localFullTime: e.target.value});
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const { localKeyword, localLocation, localFullTime } = this.state;
        this.props.dispatch(fetchJobs({description: localKeyword, location: localLocation, full_time: localFullTime, page: this.props.page}))
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} role="form">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSearch">
                        <Form.Control placeholder="Search" onChange={this.onChangeSearch}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Control placeholder="Location" onChange={this.onChangeLocation}/>
                    </Form.Group>
                    <Form.Group as={Col}></Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCheckbox">
                        <Form.Check type="checkbox" label="Full Time Only" onChange={this.onChangeFullTime}/>
                    </Form.Group>
                    <Form.Group as={Col}></Form.Group>
                    <Form.Group as={Col} controlId="formGridButton">
                        <Button variant="primary" type="submit" block>Go</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
};

const mapStateToProps = state => ({
    description: state.filters.description,
    location: state.filters.location,
    fullTime: state.filters.fullTime,
    page: state.filters.page
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(FilteringPanel);