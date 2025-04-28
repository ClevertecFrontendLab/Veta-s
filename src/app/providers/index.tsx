import { ReactNode } from 'react';

import { DrawerFiltersProvider } from '~/app/providers/DrawerFilter';

type AppProvidersProps = {
    children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
    <DrawerFiltersProvider>{children}</DrawerFiltersProvider>
);
