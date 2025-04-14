import { Box } from '@chakra-ui/react';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Sidebar,
} from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import { AppViews } from '~/views';

export const AppLayout = () => (
    <Box>
        <HeaderNavMenu />
        <Sidebar />
        <BookmarkSideMenu />
        <SearchBar />
        <AppViews />
        <BottomNavMenu />
    </Box>
);
