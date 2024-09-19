const CandidateGrid = ({ candidates }) => (
    <div className="grid grid-cols-3 gap-4">
      {candidates.map((candidate) => (
        <div key={candidate._id} className="card">
          <h3>{candidate.name}</h3>
          <p>Skills: {candidate.skills.join(', ')}</p>
          <p>Experience: {candidate.experience} years</p>
          <p>Location: {candidate.location}</p>
        </div>
      ))}
    </div>
  );
  
  export default CandidateGrid;
  