'use client';  
import { useState } from 'react';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    experience: '',
    location: '',
    videoInterviewResults: '',
    codingResults: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/candidates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Candidate added successfully');
    }
  };

  return (
    <div>
      <h1>Add/Edit Candidate Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="input-field" />
        <input name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} className="input-field" />
        <input name="experience" placeholder="Experience" type="number" onChange={handleChange} className="input-field" />
        <input name="location" placeholder="Location" onChange={handleChange} className="input-field" />
        <textarea name="videoInterviewResults" placeholder="Video Interview Results" onChange={handleChange} className="input-field"></textarea>
        <textarea name="codingResults" placeholder="Coding Results" onChange={handleChange} className="input-field"></textarea>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
