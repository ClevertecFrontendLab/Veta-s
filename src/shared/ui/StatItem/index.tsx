import { Flex, HStack, Image, Text } from '@chakra-ui/react';

import { StatItemProps } from '~/shared/types';

export const StatItem = ({
    statIconUrl,
    statValue,
    statTextColor = 'lime.600',
    statTextFontWeight = 700,
    stateIconSize = 8,
    stateTextFontSize = '20px',
    statIconAltText = 'heart',
    stateTextLh,
    statAlign = 'center',
    statGap = 1.5,
}: StatItemProps) => (
    <Flex alignItems={statAlign}>
        <HStack spacing={statGap} w='max-content'>
            <Image src={statIconUrl} alt={statIconAltText} boxSize={stateIconSize} />
            <Text
                fontSize={stateTextFontSize}
                color={statTextColor}
                fontWeight={statTextFontWeight}
                lineHeight={stateTextLh}
            >
                {statValue === undefined ? '-' : statValue}
            </Text>
        </HStack>
    </Flex>
);
