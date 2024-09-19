import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CandidateCharts = ({ candidates }) => {
  const skillData = getSkillDistribution(candidates); // helper function to calculate skill distribution
  const experienceData = getExperienceDistribution(candidates); // helper function to calculate experience distribution

  return (
    <div>
      {/* Pie Chart for Skill Distribution */}
      <h2>Skill Distribution</h2>
      <PieChart width={400} height={400}>
        <Pie data={skillData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {skillData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      {/* Bar Chart for Experience Distribution */}
      <h2>Experience Distribution</h2>
      <BarChart width={600} height={300} data={experienceData}>
        <XAxis dataKey="experience" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

// Helper Functions to process the candidate data
const getSkillDistribution = (candidates) => {
  const skillMap = {};
  candidates.forEach((candidate) => {
    candidate.skills.forEach((skill) => {
      skillMap[skill] = (skillMap[skill] || 0) + 1;
    });
  });
  return Object.keys(skillMap).map((skill) => ({ name: skill, value: skillMap[skill], color: getRandomColor() }));
};

const getExperienceDistribution = (candidates) => {
  const experienceMap = {};
  candidates.forEach((candidate) => {
    const experience = candidate.experience;
    experienceMap[experience] = (experienceMap[experience] || 0) + 1;
  });
  return Object.keys(experienceMap).map((experience) => ({ experience, count: experienceMap[experience] }));
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default CandidateCharts;
