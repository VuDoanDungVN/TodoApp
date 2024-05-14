import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Address } from '@/app/_repositories/Address';
import { AddressRepository } from '@/app/_repositories/Address';

//Hàm Post này để tạo mới một user
export async function POST(request: NextRequest) {
  try {
    const addressData: Address = await request.json();
    const createdAddress = AddressRepository.create(addressData);
    return NextResponse.json(createdAddress);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
