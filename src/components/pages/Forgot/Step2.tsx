'use client';

import { Form, Formik } from 'formik';
import { InputOtp } from 'primereact/inputotp';
import { useState } from 'react';

import Button from '@/components/atoms/Button';

export const Step2 = ({ changeStep }: { changeStep: (date: number) => void }) => {
  const [otp, setOtp] = useState('');
  return (
    <Formik initialValues={{ code: '' }} onSubmit={(values) => changeStep(3)}>
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className='flex flex-col items-center justify-between h-full gap-8'>
          <h1 className='text-xl'>کد تایید </h1>
          <div className='w-full flex flex-col gap-5'>
            <div>
              <InputOtp
                value={otp}
                onChange={(e: any) => setOtp(e.value)}
                length={5}
                pt={{
                  root: { className: 'flex justify-center', style: { direction: 'ltr' } },
                  input: { root: { className: '!border !border-black aspect-square w-10 sm:w-12' } }
                }}
              />
            </div>
            <Button
              type='submit'
              isValid={otp.length === 5}
              dirty={otp.length === 5}
              isSubmitting={false}
              label='تایید'
              customClasses='w-full text-center !bg-primary-2 !text-white !rounded-lg !py-2'
            />
          </div>
          <div />
        </Form>
      )}
    </Formik>
  );
};
