import { HStack, Image } from '@chakra-ui/react';

import { WIDTHS } from '~/shared/constants/styles';

export const Logo = () => (
    <HStack pl={4} mr={{ base: 0, lg: 6 }} width={{ base: 'initial', lg: WIDTHS.sideMenu }}>
        <Image src='/logo-img.svg' alt='logo cup' boxSize={8} />
        <Image
            display={{ base: 'none', md: 'block' }}
            src='/logo-text.svg'
            alt='logo text Yeedaa'
        />
    </HStack>
);
