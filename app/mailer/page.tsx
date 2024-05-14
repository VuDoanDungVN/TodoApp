import React from 'react';
import MailerMain from './_components/mailer';
import { MailerRepository } from '@/app/_repositories/mailer';
export default async function MailerPages() {
  const emails = await MailerRepository.findMany();
  return (
    <div>
      <MailerMain email={emails} />
    </div>
  );
}
