import mongoose from 'mongoose';

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: [String], required: true },
  experience: { type: Number, required: true },
  location: { type: String, required: true },
  videoInterviewResults: { type: String, default: '' },
  codingResults: { type: String, default: '' },
});

export default mongoose.models.Candidate || mongoose.model('Candidate', CandidateSchema);
