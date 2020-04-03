const baseUrl = 'https://jobs.github.com/';

const endpoint = {
    jobList: 'positions.json',
    jobDetail: 'positions/{job_id}.json'
};

config = {
    timeout: 100000
}

export default { baseUrl, endpoint, config };
