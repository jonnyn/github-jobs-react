import APIService from './APIService';
import Config from './Config';

export default class JobAPI extends APIService {
    /**
     * This API endpoint should return the job postings in response.data.
     */
    static fetchJobs(description, location, fullTime, page = 0) {
    return this.get(Config.baseUrl, Config.endpoint.jobList,
        {
          description,
          location,
          fullTime,
          page
        });
    }

    /**
     * This API endpoint should return the job detail in response.data.
     */
    static fetchJobDetail(jobId) {
    return this.get(Config.baseUrl, Config.endpoint.jobList,
        {
          accept: 'application%2fjson',
          job_id: jobId
        });
    }
}
