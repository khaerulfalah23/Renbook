import { connectToDB } from '@/mongodb/database';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json({ message: 'Welcome back' }, { status: 200 });
    }

    if (data.email) {
      const user = await User.create(data);
      return NextResponse.json(
        { user, message: 'Your user has been created' },
        { status: '201' }
      );
    }
    return NextResponse.json({ message: 'Name is missing' }, { status: '400' });
  } catch (err) {
    return NextResponse.json(
      { message: 'Fail to create new User!' },
      { status: 500 }
    );
  }
}
