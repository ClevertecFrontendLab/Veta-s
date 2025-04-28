import { Accordion, Flex, FlexProps, ResponsiveValue, useTheme } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { Footer } from '~/components/layouts-components';
import { SidebarNavMenuItem } from '~/components/layouts-components/NavMenu/SidebarNavMenu/Item';
import { BreadCrumbEl } from '~/components/shared-components/BreadCrumbEl';
import { navTree } from '~/data/navigationConfig';
import { SHADOWS } from '~/style/styles';

type NavMenuBaseProps = FlexProps & {
    withBreadCrumbs?: boolean;
    breadCrumbsClickHandler?: MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler?: MouseEventHandler<HTMLDivElement>;
    scrollPt?: ResponsiveValue<string | number>;
};

export const BaseNav = ({
    withBreadCrumbs = false,
    breadCrumbsClickHandler,
    menuClickHandler,
    scrollPt = 8,
    children,
    ...outer
}: NavMenuBaseProps) => {
    const theme = useTheme();

    return (
        <Flex
            data-test-id='nav'
            flexDirection='column'
            justifyContent='space-between'
            bg='white'
            {...outer}
            onClick={menuClickHandler}
        >
            {withBreadCrumbs && <BreadCrumbEl onClick={breadCrumbsClickHandler} />}

            {/* основная прокручиваемая часть */}
            <Flex
                overflow='auto'
                flexDirection='column'
                justifyContent='space-between'
                borderRadius='8px'
                pr={1}
                pt={scrollPt}
                css={{
                    '&::-webkit-scrollbar': { width: 8 },
                    '&::-webkit-scrollbar-track': {
                        background: theme.colors.blackAlpha[50],
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.colors.blackAlpha[300],
                        borderRadius: 8,
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: theme.colors.lime[50],
                    },
                    '.chakra-accordion__button': {
                        paddingLeft: 0,
                        paddingRight: '24px',
                    },
                    '&:hover': { boxShadow: SHADOWS.sideMunu },
                }}
            >
                <Accordion allowToggle>
                    {navTree.map(
                        (item, index) =>
                            !item.skipSideMenu && <SidebarNavMenuItem {...item} key={index} />,
                    )}
                </Accordion>
                {children}
            </Flex>

            <Footer p={{ base: '28px 24px 0px 4px', xl: 8 }} />
        </Flex>
    );
};
