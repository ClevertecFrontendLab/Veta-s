import { useDisclosure } from '@chakra-ui/react';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Filters, FiltersContextProps } from 'src/shared/types';

import { FiltersContext } from './Context';

type DrawerFiltersProviderProps = {
    children: ReactNode;
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
};

export const FiltersProvider = ({ children, filters, setFilters }: DrawerFiltersProviderProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const value: FiltersContextProps = {
        openDrawer: onOpen,
        closeDrawer: onClose,
        isOpen,
        filters,
        setFilters,
    };

    return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
};
