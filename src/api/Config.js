const baseUrl = 'https://jobs.github.com/';
const proxyUrl = 'https://evening-mesa-59637.herokuapp.com/';

const endpoint = {
    jobList: 'positions.json',
    jobDetail: 'positions/#{job_id}.json'
};

const config = {
    timeout: 100000
}

export default { baseUrl, proxyUrl, endpoint, config };
