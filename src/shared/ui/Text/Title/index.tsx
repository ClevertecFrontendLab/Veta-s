import { Heading } from '@chakra-ui/react';

import { TitleTextProps } from '~/shared/types';
import { getHighlightedText } from '~/utils';

export const TitleText = ({
    titleText = '',
    titleTextFz = '48px',
    titleTextFw = '700',
    titleTextFf = 'Inter',
    titleTextFs = 'normal',
    titleTextLh = '48px',
    titleTextColor = '#000',
    titleTextAlign = 'center',
    titleHeading = 'h1',
    titleTextNoOfLines = 3,
    titleTextHighlight,
}: TitleTextProps) => (
    <Heading
        as={titleHeading}
        fontSize={titleTextFz}
        fontWeight={titleTextFw}
        fontFamily={titleTextFf}
        fontStyle={titleTextFs}
        lineHeight={titleTextLh}
        color={titleTextColor}
        textAlign={titleTextAlign}
        noOfLines={titleTextNoOfLines}
    >
        {!titleTextHighlight
            ? titleText
            : getHighlightedText(titleText, titleTextHighlight, '#2DB100')}
    </Heading>
);
