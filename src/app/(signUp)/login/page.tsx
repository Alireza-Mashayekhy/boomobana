'use client';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import * as Yup from 'yup';

import Button from '@/components/atoms/Button';

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .required('این فیلد اجباری است')
    .matches(/^09\d{9}$/, 'شماره وارد شده اشتباه است'),
  password: Yup.string().required('این فیلد اجباری است').min(8, 'حداقل طول رمز باید 8 کاراکتر باشد')
});

export default function Login() {
  return (
    <Formik
      initialValues={{ phone: '', password: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SignupSchema}>
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className='flex flex-col items-center justify-between h-full gap-8'>
          <h1 className='text-lg sm:text-xl'>ورود به پنل کاربری </h1>
          <div className='w-full flex flex-col gap-5'>
            <div>
              <Field
                name='phone'
                placeholder='شماره تلفن همراه'
                className={`w-full !bg-transparent ${
                  errors.phone ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-sm focus:outline-primary-2`}
              />
              {errors.phone && touched.phone && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.phone}</div>
              )}
            </div>
            <div>
              <Field
                name='password'
                type='password'
                placeholder='رمز عبور'
                className={`w-full !bg-transparent ${
                  errors.password ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-sm focus:outline-primary-2`}
              />
              {errors.password && touched.password && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.password}</div>
              )}
            </div>
          </div>
          <div className='w-full'>
            <Button
              isSubmitting={isSubmitting}
              dirty={dirty}
              isValid={isValid}
              type='submit'
              label='ورود'
              customClasses='w-full text-center !bg-primary-2 !text-white !rounded-lg !py-2'
            />
            <div className='flex items-center justify-between w-full mt-2'>
              <Link href='/forgot-pass' className='text-xs text-primary-3'>
                رمزتان را فراموش کرده اید ؟
              </Link>
              <Link href='/sign-up' className='text-xs text-secondary-6'>
                عضویت در بوم و بنا
              </Link>
            </div>
          </div>
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
        </Form>
      )}
    </Formik>
  );
}
