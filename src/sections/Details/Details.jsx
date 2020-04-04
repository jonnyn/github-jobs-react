import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Container, Row, Col, Media } from 'react-bootstrap';
import { fetchJobById } from 'redux/jobsSlice';
import { AppSpinner } from 'components';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        await this.props.dispatch(fetchJobById(this.props.match.params.jobId));
        this.setState({isLoading: false});
    }

    render() {
        if (this.state.isLoading || !this.props.activeJob) return <AppSpinner />

        const { type, created_at, company, company_url, location, title, description, company_logo} = this.props.activeJob;
        return (
            <Container fluid="md">
                <Row>
                    <Col md={4}>
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={company_logo}
                                alt="Company logo"
                            />
                            <Media.Body>
                                <h3>{company}</h3>
                                <p>{company_url}</p>
                                <p>{location}</p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row md={4}>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h4>{title}</h4>
                        <h5>{type}</h5>
                        <br />
                        <p dangerouslySetInnerHTML={{__html: description}} />
                        <br />
                        <p>{created_at}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = state => ({
    activeJob: state.jobs.activeJob
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));