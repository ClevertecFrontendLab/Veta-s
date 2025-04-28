import { DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerCloseButton } from '@chakra-ui/react';

import { useDrawer } from '~/app/providers/DrawerFilter';
import { RecipeFilterForm } from '~/components/layouts-components/FilterBar/components/RecipeFilterForm/recipeFilterForm';

export const RecipeFilterDrawer = () => {
    const { isOpen, closeDrawer } = useDrawer();

    return (
        <Drawer isOpen={isOpen} onClose={closeDrawer} placement='right' size='xs'>
            <DrawerOverlay />
            <DrawerContent
                p={{ base: 4, xl: 8 }}
                minW={{ base: 344, xl: 463 }}
                pr={{ base: 1.5, xl: 2 }}
                data-test-id='filter-drawer'
            >
                <DrawerCloseButton
                    data-test-id='close-filter-drawer'
                    top={{ base: 5, xl: 8 }}
                    right={{ base: 3, xl: 5 }}
                />
                <DrawerHeader p={0} mb={8}>
                    Фильтр
                </DrawerHeader>
                <DrawerBody
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: 2,
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'blackAlpha.50',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'blackAlpha.300',
                            borderRadius: 8,
                        },
                    }}
                    width='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    p={0}
                    h='100%'
                >
                    <RecipeFilterForm />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
