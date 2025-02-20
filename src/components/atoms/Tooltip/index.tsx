import { Tooltip as PTooltip, TooltipProps } from 'primereact/tooltip';

export const Tooltip = ({ children, ...props }: TooltipProps & { children: React.ReactNode }) => {
  return (
    <>
      <PTooltip
        pt={{
          text: { className: 'bg-secondary-20/50 backdrop-blur-lg text-secondary-1 py-1 text-xs' }
        }}
        {...props}
      />
      {children}
    </>
  );
};
