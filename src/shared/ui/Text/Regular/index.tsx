import { Text } from '@chakra-ui/react';

import { TEST_IDS } from '~/shared/constants';
import { TextRegularProps } from '~/shared/types';

export const TextRegular = ({
    regText = '',
    regTextFz = '14px',
    regTextFw = 400,
    regTextFf = 'Inter',
    regTextLh = '20px',
    regTextColor = '#000',
    regTextNoOfLines = 3,
    regTextAlign = 'left',
    regTextDataId,
}: TextRegularProps) => (
    <Text
        data-test-id={`${TEST_IDS.ingridientQuantity}-${regTextDataId}`}
        textAlign={regTextAlign}
        fontSize={regTextFz}
        fontWeight={regTextFw}
        fontFamily={regTextFf}
        lineHeight={regTextLh}
        color={regTextColor}
        noOfLines={regTextNoOfLines}
    >
        {regText}
    </Text>
);
