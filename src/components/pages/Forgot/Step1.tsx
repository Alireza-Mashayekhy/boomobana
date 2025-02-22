'use client';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@/components/atoms/Button';

const ForgotPassSchema = Yup.object().shape({
  phone: Yup.string()
    .required('این فیلد اجباری است')
    .matches(/^09\d{9}$/, 'شماره وارد شده اشتباه است')
});

export const Step1 = ({ changeStep }: { changeStep: (date: number) => void }) => {
  return (
    <Formik
      initialValues={{ phone: '' }}
      onSubmit={(values) => changeStep(2)}
      validationSchema={ForgotPassSchema}>
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className='flex flex-col items-center justify-between h-full gap-8'>
          <h1 className='text-xl'>فراموشی رمز عبور </h1>
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
            <Button
              isSubmitting={isSubmitting}
              dirty={dirty}
              isValid={isValid}
              type='submit'
              label='ارسال کد'
              customClasses='w-full text-center !bg-primary-2 !text-white !rounded-lg !py-2 !text-sm sm:!text-base'
            />
          </div>
          <div />
        </Form>
      )}
    </Formik>
  );
};
