import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { User } from '@/app/_repositories/User';
import { UserRepository } from '@/app/_repositories/User';
import { PersonalInformation } from '@/app/_repositories/PersonalInformation';

//Hàm Post này để tạo mới một user
export async function POST(request: NextRequest) {
  try {
    const personalInformation: PersonalInformation = await request.json();
    const user: User = await request.json();
    const createdUser = UserRepository.create(user, personalInformation);
    return NextResponse.json(createdUser);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
