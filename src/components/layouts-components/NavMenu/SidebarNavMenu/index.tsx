import { BaseNav } from '~/components/layouts-components';
import { PADDINGS, SHADOWS } from '~/style/styles';

export const SidebarNavMenu = () => (
    <BaseNav
        w='256px'
        h='100vh'
        pt={PADDINGS.topMenu}
        pl={2.5}
        pr={1}
        position='fixed'
        left={0}
        zIndex={9}
        bg='white'
        boxShadow={SHADOWS.main}
        display={{ base: 'none', md: 'flex' }}
        scrollPt={8}
    />
);
