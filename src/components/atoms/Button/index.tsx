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
          className: `bg-primary-3 rounded md:rounded-[10px] px-5 py-3 sm:px-10 sm:py-5 flex items-center justify-center gap-3 outline-none shadow-main transition-all ${roundedClasses} ${outlinedClasses} ${customClasses} `
        },
        label: {
          className: `text-xs md:text-base font-regular leading-[5px] ${labelClasses} ${
            outlined ? 'text-primary-1' : 'text-secondary-22'
          }`
        }
      }}
      {...rest}>
      {label && (
        <div
          className={`text-xs md:text-base font-regular leading-[5px] ${labelClasses} ${
            outlined ? 'text-primary-1' : 'text-secondary-22'
          }`}>
          {type === 'submit' && isSubmitting ? <Loader /> : label}
        </div>
      )}
    </PrimeReactButton>
  );
};

export default Button;
