import connectToDatabase from '../../db';
import Candidate from '../../models/candidate';

export async function POST(request) {
  await connectToDatabase();
  const body = await request.json();
  const newCandidate = new Candidate(body);
  await newCandidate.save();
  return new Response(JSON.stringify({ message: 'Candidate added successfully' }), { status: 201 });
}

export async function GET(request) {
  await connectToDatabase();
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get('search') || '';
  
  const candidates = await Candidate.find({
    $or: [
      { name: new RegExp(query, 'i') },
      { skills: new RegExp(query, 'i') },
      { location: new RegExp(query, 'i') }
    ]
  });

  return new Response(JSON.stringify(candidates), { status: 200 });
}
