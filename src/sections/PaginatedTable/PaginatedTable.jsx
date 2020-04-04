import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Pagination } from 'react-bootstrap';

class PaginatedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            jobList: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (JSON.stringify(props.jobs) !== JSON.stringify(state.jobList)) {
            return {
                ...state,
                jobList: [...props.jobs]
            }
        }

        return null;
    }

    navigateJobDetail = jobId => {

    }

    firstPage = () => {
        console.log('First Page');
    }

    prevPage = () => {
        console.log('Previous Page');
    }

    nextPage = () => {
        console.log('Next Page');
    }

    render() {
        console.log(this.state.jobList);
        return (
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Role</th>
                                    <th>Location</th>
                                    <th>Type</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.jobList.map((job, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><Link to={`/details/${job.id}`}>{job.company}</Link></td>
                                            <td>{job.title}</td>
                                            <td>{job.location}</td>
                                            <td>{job.type}</td>
                                            <td>{job.created_at}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <Pagination size="sm">
                            <Pagination.First onClick={this.firstPage}/>
                            <Pagination.Prev onClick={this.prevPage}/>
                            <Pagination.Item active>{this.state.currentPage}</Pagination.Item>
                            <Pagination.Next onClick={this.nextPage}/>
                        </Pagination>
                        <br />
                    </div>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedTable);
