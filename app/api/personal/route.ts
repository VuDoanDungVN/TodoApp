import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { PersonalInformation } from '@/app/_repositories/PersonalInformation';
import { PersonalInformationRepository } from '@/app/_repositories/PersonalInformation';

//Hàm Post này để tạo mới một user
export async function POST(request: NextRequest) {
  try {
    const personal: PersonalInformation = await request.json();
    const createdPersonal = PersonalInformationRepository.create(personal);
    return NextResponse.json(createdPersonal);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
