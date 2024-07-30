import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { createContext, useContext } from 'react';

type PropsFilterContext = {
  router: AppRouterInstance;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (key: string, value: string) => string;
};

const FilterContext = createContext<PropsFilterContext | undefined>(undefined);

export const FilterProvider = FilterContext.Provider;

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
