import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { User } from '@/app/_repositories/User';
import { UserRepository } from '@/app/_repositories/User';

//Hàm PUT này để cập nhật thông tin của user
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user: User = await request.json();
    const updatedUser = await UserRepository.update(params.id, user);
    return NextResponse.json(updatedUser);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
//Hàm DELETE này để xóa một user
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deletedUser = await UserRepository.remove(params.id);
    return NextResponse.json(deletedUser);
  } catch (e) {
    //return NextResponse.next({ status: 500 });
    console.log(e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
