import { redirect } from 'next/navigation';
export default async function Home({}) {
  redirect('/home');
  //Chuyển hướng trang chủ về /home
}
