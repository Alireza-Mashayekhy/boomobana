'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs';

import { Step1 } from '@/components/pages/Forgot/Step1';
import { Step2 } from '@/components/pages/Forgot/Step2';
import { Step3 } from '@/components/pages/Forgot/Step3';

export default function ForgotPass() {
  const [step, setStep] = useState(1);
  return (
    <div className='flex flex-col justify-between h-full'>
      {step == 1 ? (
        <Step1 changeStep={(e) => setStep(e)} />
      ) : step == 2 ? (
        <Step2 changeStep={(e) => setStep(e)} />
      ) : (
        <Step3 />
      )}
      <div className='flex justify-between w-full gap-5 mt-5 text-xl sm:text-2xl text-black'>
        <Link href='/'>
          <BsInstagram />
        </Link>
        <Link href='/'>
          <BsTwitter />
        </Link>
        <Link href='/'>
          <BsYoutube />
        </Link>
        <Link href='/'>
          <BsTelegram />
        </Link>
        <Link href='/'>
          <BsLinkedin />
        </Link>
        <Link href='/'>
          <BsWhatsapp />
        </Link>
      </div>
    </div>
  );
}
