const baseUrl = 'https://jobs.github.com/';
const proxyUrl = 'https://evening-mesa-59637.herokuapp.com/';

const endpoint = {
    jobList: 'positions.json',
    jobDetail: 'positions/#{job_id}.json'
};

const setting = {
    timeout: 100000,
    perPage: 50
}

export default { baseUrl, proxyUrl, endpoint, setting };
