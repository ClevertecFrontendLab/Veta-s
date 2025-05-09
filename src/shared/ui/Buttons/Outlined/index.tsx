import { Button } from '@chakra-ui/react';

import { ButtonOutlinedProps } from '~/shared/types';

export const ButtonOutlined = ({
    outlBtnText,
    outlBtnColor = 'lime.600',
    outlBtnBorderColor = 'green.500',
    outlBtnBg = 'white',
    outlBtnBorder = '2px solid',
    outlBtnBorderBottom,
    outlBtnBorderRadius = 'md',
    gap = 0,
    size,
    as,
    maxWidth,
    minWidth,
    outlBtnTextFontSize,
    outlBtnTextPadding,
}: ButtonOutlinedProps) => (
    <Button
        minWidth={minWidth}
        p={outlBtnTextPadding}
        fontSize={outlBtnTextFontSize}
        maxWidth={maxWidth}
        size={size}
        gap={gap}
        bg={outlBtnBg}
        color={outlBtnColor}
        borderRadius={outlBtnBorderRadius}
        border={outlBtnBorder}
        borderBottom={outlBtnBorderBottom}
        borderColor={outlBtnBorderColor}
        _hover={{
            bg: 0,
        }}
        as={as}
    >
        {outlBtnText}
    </Button>
);
