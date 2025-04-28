import { MouseEventHandler } from 'react';

import { BaseNav } from '~/components/layouts-components';
import { PADDINGS, SHADOWS, WIDTHS } from '~/style/styles';

interface BurgerNavMenuProps {
    breadCrumbsClickHandler: MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler: MouseEventHandler<HTMLDivElement>;
}

export const BurgerNavMenu = (props: BurgerNavMenuProps) => (
    <BaseNav
        w={WIDTHS.burgerNavMenu}
        maxH={`calc(100vh - ${PADDINGS.bottomMenu * 4}px)`}
        pl={5}
        pr={1}
        pt={PADDINGS.burgerMenu}
        bg='white'
        borderRadius='0 0 12px 12px'
        boxShadow={SHADOWS.burgerNavMenu}
        withBreadCrumbs
        scrollPt={{ base: '20px', md: '30px' }}
        {...props}
    />
);
