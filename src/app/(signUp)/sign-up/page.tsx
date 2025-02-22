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
  password: Yup.string().required('این فیلد اجباری است').min(8, 'حداقل طول رمز باید 8 کاراکتر باشد'),
  confirmPassword: Yup.string()
    .required('این فیلد اجباری است')
    .oneOf([Yup.ref('password')], 'تکرار رمز و رمز یکسان نیستند'),
  firstName: Yup.string().required('این فیلد اجباری است'),
  lastName: Yup.string().required('این فیلد اجباری است')
});

export default function SignUp() {
  return (
    <Formik
      initialValues={{ phone: '', password: '', confirmPassword: '', firstName: '', lastName: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SignupSchema}>
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className='flex flex-col items-center justify-between h-full gap-4 sm:gap-8'>
          <h1 className='text-lg sm:text-xl'>عضویت در بوم و بنا</h1>
          <div className='w-full flex flex-col gap-5'>
            <div>
              <Field
                name='phone'
                placeholder='شماره تلفن همراه'
                className={`w-full !bg-transparent ${
                  errors.phone ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-xs sm:text-sm focus:outline-primary-2`}
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
                } rounded-lg px-5 py-2 text-xs sm:text-sm focus:outline-primary-2`}
              />
              {errors.password && touched.password && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.password}</div>
              )}
            </div>
            <div>
              <Field
                name='confirmPassword'
                type='confirmPassword'
                placeholder='تکرار رمز عبور'
                className={`w-full !bg-transparent ${
                  errors.confirmPassword ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-xs sm:text-sm focus:outline-primary-2`}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.confirmPassword}</div>
              )}
            </div>
            <div>
              <Field
                name='firstName'
                type='firstName'
                placeholder='نام'
                className={`w-full !bg-transparent ${
                  errors.firstName ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-xs sm:text-sm focus:outline-primary-2`}
              />
              {errors.firstName && touched.firstName && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.firstName}</div>
              )}
            </div>
            <div>
              <Field
                name='lastName'
                type='lastName'
                placeholder='نام خانوادگی'
                className={`w-full !bg-transparent ${
                  errors.lastName ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-xs sm:text-sm focus:outline-primary-2`}
              />
              {errors.lastName && touched.lastName && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className='w-full'>
            <Button
              isSubmitting={isSubmitting}
              dirty={dirty}
              isValid={isValid}
              type='submit'
              label='عضویت'
              customClasses='w-full text-center !bg-primary-2 !text-white !rounded-lg !py-2'
            />
            <div className='flex items-center justify-end w-full mt-2'>
              <Link href='/login' className='text-xs text-secondary-6'>
                ورود به پنل کاربری
              </Link>
            </div>
          </div>
          <div className='flex justify-between w-full gap-5 py-5 text-xl sm:text-2xl text-black'>
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
