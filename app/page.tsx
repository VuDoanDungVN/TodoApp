import { redirect } from 'next/navigation';
export default async function Home({}) {
  redirect('/todo');
  //Chuyển hướng trang chủ về /todo
}
