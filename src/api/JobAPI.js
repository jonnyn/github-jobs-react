import APIService from './APIService';
import Config from './Config';

export default class JobAPI extends APIService {
  
  static useBaseURL() {
    return `${Config.proxyUrl}${Config.baseUrl}`;
  }

  /**
   * This API endpoint should return the job postings in response.data.
   */
  static fetchJobs(description, location, full_time, page = 0) {
    return this.get(this.useBaseURL(), Config.endpoint.jobList,
      {
        description,
        location,
        full_time,
        page
      });
  }

  /**
   * This API endpoint should return the job detail in response.data.
   */
  static fetchJobDetail(jobId) {
    return this.get(this.useBaseURL(), Config.endpoint.jobDetail,
      {
        job_id: jobId
      });
  }
}
