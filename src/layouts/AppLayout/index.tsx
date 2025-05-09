import { Box } from '@chakra-ui/react';

import AppViews from '~/pages';
import { useAllCategoriesQuery } from '~/redux/query/create-api';
import { getLocallySavedNavigationConfig } from '~/utils';
import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Loader,
    RecipeFilter,
    SideMenu,
} from '~/widgets';

const AppLayout = () => {
    const savedNavigationConfig = getLocallySavedNavigationConfig();
    const { data: navigationConfig, isLoading } = useAllCategoriesQuery(undefined, {
        skip: !!savedNavigationConfig,
    });
    const navigation = savedNavigationConfig || navigationConfig;

    if (!savedNavigationConfig && isLoading) {
        return <Loader />;
    }

    return (
        <Box>
            {isLoading && <Loader />}
            <HeaderNavMenu />
            <SideMenu />
            <BookmarkSideMenu />
            <RecipeFilter />
            {navigation && (
                <AppViews navigationConfig={savedNavigationConfig || navigationConfig} />
            )}
            <BottomNavMenu />
        </Box>
    );
};

export default AppLayout;
