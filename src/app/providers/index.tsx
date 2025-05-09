import { ReactNode, useState } from 'react';

import { Filters } from '~/shared/types';

import { FiltersProvider } from './Filters/Provider';

type Props = {
    children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
    const [filters, setFilters] = useState<Filters>({});

    return (
        <FiltersProvider filters={filters} setFilters={setFilters}>
            {children}
        </FiltersProvider>
    );
};
