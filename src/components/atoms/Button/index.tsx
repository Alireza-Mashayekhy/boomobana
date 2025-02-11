import { Button as PrimeReactButton, ButtonProps } from 'primereact/button';
import React, { useMemo } from 'react';

import Loader from '../Loader';

interface CustomProps extends ButtonProps {
  onClick?: (e: any) => void;
  customClasses?: string;
  labelClasses?: string;
  label?: string;
  type?: 'button' | 'submit';
  direction?: 'ltr' | 'rtl';
  dirty?: boolean;
  disabled?: boolean;
  isSubmitting?: boolean;
  isValid?: boolean;
}

const Button: React.FC<CustomProps> = ({
  onClick,
  customClasses,
  labelClasses,
  label,
  direction,
  rounded,
  outlined,
  type,
  dirty,
  disabled,
  isSubmitting,
  isValid,
  ...rest
}) => {
  const roundedClasses = rounded && `rounded-full`;
  const outlinedClasses = outlined && `bg-transparent border-[3px] border-primary-1`;

  const buttonIsDisabled = useMemo(() => {
    switch (type) {
      case 'submit':
        return !dirty || disabled || isSubmitting || !isValid;
      default:
        return disabled || isSubmitting;
    }
  }, [dirty, disabled, isSubmitting, isValid, type]);

  return (
    <PrimeReactButton
      dir={direction}
      onClick={onClick}
      disabled={buttonIsDisabled}
      pt={{
        root: {
          className: `bg-primary-1 px-10 py-5 flex items-center justify-center gap-3 outline-none shadow-xl hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all ${roundedClasses} ${outlinedClasses} ${customClasses} `
        },
        label: {
          className: `text-[16px] font-regular leading-[5px] ${labelClasses} ${
            outlined ? 'text-primary-1' : 'text-secondary-22'
          }`
        }
      }}
      {...rest}>
      {label && (
        <div
          className={`text-[16px] font-regular leading-[5px] ${labelClasses} ${
            outlined ? 'text-primary-1' : 'text-secondary-22'
          }`}>
          {type === 'submit' && isSubmitting ? <Loader /> : label}
        </div>
      )}
    </PrimeReactButton>
  );
};

export default Button;
