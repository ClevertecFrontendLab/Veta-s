import { Flex, Spinner } from '@chakra-ui/react';

import { TEST_IDS } from '~/shared/constants';

export const SearchLoader = () => (
    <Flex
        mx='auto'
        position='relative'
        w={{ base: '32px', md: '106px' }}
        h={{ base: '32px', md: '106px' }}
        bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
        justifyContent='center'
        alignItems='center'
    >
        <Spinner
            data-test-id={TEST_IDS.minispinner}
            thickness='2.5px'
            speed='0.65s'
            color='#000'
            size={{ base: 'md', md: 'lg' }}
        />
    </Flex>
);
