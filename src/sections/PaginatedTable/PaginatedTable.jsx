import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Pagination } from 'react-bootstrap';
import { fetchJobs } from 'redux/jobsSlice';
import Config from 'api/Config';
import { AppSpinner } from 'components';

export class PaginatedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            jobList: [],
            lastPage: false
        }
    }
    
    componentDidMount() {
        if (this.props.jobs && JSON.stringify(this.props.jobs) !== JSON.stringify(this.state.jobList)) {
            this.setState({jobList: this.props.jobs, lastPage: this.props.jobs.length !== Config.setting.perPage})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.jobs && JSON.stringify(this.props.jobs) !== JSON.stringify(prevProps.jobs)) {
            this.setState({jobList: this.props.jobs, lastPage: this.props.jobs.length !== Config.setting.perPage})
        }
    }

    jumpToPage = async (e, page) => {
        e.preventDefault();
        this.setState({loading: true});
        const { description, location, fullTime } = this.props;
        await this.props.dispatch(fetchJobs({description, location, full_time: fullTime, page}));
        this.setState({loading: false});
    }

    firstPage = e => {
        this.jumpToPage(e, 1);
    }

    prevPage = e => {
        const page = this.props.page - 1;
        this.jumpToPage(e, page);
    }

    nextPage = e => {
        const page = this.props.page + 1;
        this.jumpToPage(e, page);
    }

    render() {
        const { loading, jobList, lastPage } = this.state;
        const page = this.props.page;
        return (
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Company Name</th><th>Role</th><th>Location</th><th>Type</th><th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobList.map((job, index) => {
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
                            <Pagination.First onClick={this.firstPage} disabled={loading || page === 1} />
                            <Pagination.Prev onClick={this.prevPage} disabled={loading || page === 1} />
                            {page > 1 && Array(page-1).fill().map((_, i) => (
                                <Pagination.Item onClick={e => this.jumpToPage(e, i+1)}>{i+1}</Pagination.Item>
                            ))}
                            <Pagination.Item active>{page}</Pagination.Item>
                            <Pagination.Next onClick={this.nextPage} disabled={loading || lastPage || jobList.length === 0}/>
                            {loading && <AppSpinner />}
                        </Pagination>
                        <br />
                    </div>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs,
    description: state.filters.description,
    location: state.filters.location,
    fullTime: state.filters.fullTime,
    page: state.filters.page
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedTable);
