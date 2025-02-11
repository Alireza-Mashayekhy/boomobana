import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

import { PrimeReactProvider as PPrimeReactProvider } from 'primereact/api';
import { ReactNode } from 'react';

interface QueryClientProviderProps {
  children: ReactNode;
}

function PrimeReactProvider({ children }: QueryClientProviderProps) {
  return <PPrimeReactProvider>{children}</PPrimeReactProvider>;
}

export default PrimeReactProvider;
