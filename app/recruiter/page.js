'use client';

import { useState, useEffect } from 'react';
import CandidateGrid from '././components/CandidateGrid';
import CandidateList from '././components/CandidateList';
import CandidateCharts from '././components/CandidateCharts';


const RecruiterPage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [viewType, setViewType] = useState('grid'); // Default view is grid

  const handleSearch = async () => {
    const res = await fetch(`/api/candidates?search=${query}`);
    const data = await res.json();
    setSearchResults(data);
  };

  return (
    <div>
      <h1>Search Candidates</h1>
      <input
        type="text"
        placeholder="Search by skills, experience, location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSearch} className="btn-primary">Search</button>

      {/* View Toggle */}
      <div className="view-toggle">
        <button onClick={() => setViewType('grid')}>Grid View</button>
        <button onClick={() => setViewType('list')}>List View</button>
        <button onClick={() => setViewType('charts')}>Chart View</button>
        
      </div>

      {/* Conditionally Render Based on Selected View */}
      <div className="results">
        {viewType === 'grid' && <CandidateGrid candidates={searchResults} />}
        {viewType === 'list' && <CandidateList candidates={searchResults} />}
        {viewType === 'charts' && <CandidateCharts candidates={searchResults} />}
        
      </div>
    </div>
  );
};

export default RecruiterPage;
