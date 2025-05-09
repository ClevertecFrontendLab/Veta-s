import { Flex, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { PADDINGS } from '~/shared/constants/styles';

type Props = {
    children: React.ReactNode;
    pt?: ResponsiveValue<number>;
};

export const PageWrapper = ({ pt = PADDINGS.pageTop, children }: Props) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        direction='column'
        w={{ '2xl': 1360 }}
        pt={pt}
        pb={{ base: PADDINGS.footer, xl: 'unset' }}
    >
        {children}
    </Flex>
);
