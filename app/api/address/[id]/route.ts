import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Address } from '@/app/_repositories/Address';
import { AddressRepository } from '@/app/_repositories/Address';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const addressData: Address = await request.json();
    const updatedAddress = await AddressRepository.update(params.id, addressData);
    return NextResponse.json(updatedAddress);
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
