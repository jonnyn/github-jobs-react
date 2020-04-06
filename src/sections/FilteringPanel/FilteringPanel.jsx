import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from 'redux/jobsSlice';
import { Col, Form } from 'react-bootstrap';
import { AppButton } from 'components';

export class FilteringPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fullTime: false
        };
    }

    componentDidMount() {
        this.setState({ fullTime: this.props.fullTime })
    }

    onChangeFullTime = e => {
        this.setState({fullTime: e.target.checked});
    }

    handleOnSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true});
        const description =  e.target.elements.formGridSearch.value;
        const location = e.target.elements.formGridLocation.value;
        const fullTime = this.state.fullTime;
        await this.props.dispatch(fetchJobs({description, location, fullTime, page: 1}));
        this.setState({loading: false});
    }

    render() {
        const { loading, fullTime } = this.state;
        return (
            <Form onSubmit={this.handleOnSubmit} role="form">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSearch">
                        <Form.Control 
                            placeholder="Search" 
                            defaultValue={this.props.description}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Control 
                            placeholder="Location" 
                            defaultValue={this.props.location}
                        />
                    </Form.Group>
                    <Form.Group as={Col}></Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            label="Full Time Only"
                            onChange={this.onChangeFullTime}
                            checked={fullTime ? "checked" : ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col}></Form.Group>
                    <Form.Group as={Col} controlId="formGridButton">
                        <AppButton label='Go' isLoading={loading} />
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
};

const mapStateToProps = state => ({
    description: state.filters.description,
    location: state.filters.location,
    fullTime: state.filters.fullTime
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(FilteringPanel);