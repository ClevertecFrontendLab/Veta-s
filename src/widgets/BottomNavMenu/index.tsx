import { Flex } from '@chakra-ui/react';

import { TEST_IDS } from '~/shared/constants';
import { PADDINGS } from '~/shared/constants/styles';
import { bottomMenuProps } from '~/shared/data';
import { ButtonRounded } from '~/shared/ui';

export const BottomNavMenu = () => (
    <Flex
        data-test-id={TEST_IDS.footer}
        position='fixed'
        bottom={0}
        zIndex={10}
        bg='lime.50'
        display={{ base: 'flex', xl: 'none' }}
        height={PADDINGS.bottomMnu * 4}
        width='100%'
        justifyContent='space-around'
    >
        {bottomMenuProps.map((button, index) => (
            <ButtonRounded
                key={index}
                text={button.name}
                iconUrl={button.iconUrl}
                isActive={button.isActive}
                minWidth='84px'
                textColor='blackAlpha.700'
            />
        ))}
    </Flex>
);
