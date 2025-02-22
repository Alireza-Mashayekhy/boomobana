'use client';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@/components/atoms/Button';

const NewPassSchema = Yup.object().shape({
  password: Yup.string().required('این فیلد اجباری است').min(8, 'حداقل طول رمز باید 8 کاراکتر باشد'),
  confirmPassword: Yup.string()
    .required('این فیلد اجباری است')
    .oneOf([Yup.ref('password')], 'تکرار رمز و رمز یکسان نیستند')
});

export const Step3 = () => {
  return (
    <Formik
      validationSchema={NewPassSchema}
      initialValues={{ password: '', confirmPassword: '' }}
      onSubmit={(values) => console.log(values)}>
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className='flex flex-col items-center justify-between h-full gap-8'>
          <h1 className='text-xl'>رمز جدید </h1>
          <div className='w-full flex flex-col gap-5'>
            <div>
              <Field
                name='password'
                placeholder='رمز عبور'
                className={`w-full !bg-transparent ${
                  errors.password ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-sm focus:outline-primary-2`}
              />
              {errors.password && touched.password && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.password}</div>
              )}
            </div>
            <div>
              <Field
                name='confirmPassword'
                placeholder='تکرار رمز عبور'
                className={`w-full !bg-transparent ${
                  errors.confirmPassword ? 'border-red-500 border-2' : 'border-secondary-1 border'
                } rounded-lg px-5 py-2 text-sm focus:outline-primary-2`}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className='text-[10px] text-red-500 mt-1 px-5'>{errors.confirmPassword}</div>
              )}
            </div>
            <Button
              type='submit'
              label='ورود'
              isSubmitting={false}
              dirty={dirty}
              isValid={isValid}
              customClasses='w-full text-center !bg-primary-2 !text-white !rounded-lg !py-2'
            />
          </div>
          <div />
        </Form>
      )}
    </Formik>
  );
};
