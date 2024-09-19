
  // components/CandidateList.js
import { useEffect, useState } from 'react';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetch('/api/candidates');
      const data = await response.json();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidate List</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;
