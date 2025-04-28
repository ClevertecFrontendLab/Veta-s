import { useDisclosure } from '@chakra-ui/react';
import { ReactNode, useContext } from 'react';
import { createContext } from 'react';

export interface DrawerFiltersContextProps {
    openDrawer: () => void;
    closeDrawer: () => void;
    isOpen: boolean;
}
interface DrawerFiltersProviderProps {
    children: ReactNode;
}

export const DrawerFiltersContext = createContext<DrawerFiltersContextProps | undefined>(undefined);

export const useDrawer = () => {
    const context = useContext(DrawerFiltersContext);
    if (!context) {
        throw new Error('useDrawer must be used inside the DrawerProvider');
    }
    return context;
};

export const DrawerFiltersProvider = ({ children }: DrawerFiltersProviderProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <DrawerFiltersContext.Provider
            value={{
                openDrawer: onOpen,
                closeDrawer: onClose,
                isOpen,
            }}
        >
            {children}
        </DrawerFiltersContext.Provider>
    );
};
