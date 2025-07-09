import { useEffect, useState } from 'react';
import API from '../api';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get('/jobs').then(res => setJobs(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-bold">Your Job Applications</h2>
      {jobs.map(job => (
        <div key={job._id} className="p-4 border rounded bg-white">
          <h3 className="font-semibold">{job.company}</h3>
          <p>{job.position}</p>
          <p className="text-sm text-gray-600">{job.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
