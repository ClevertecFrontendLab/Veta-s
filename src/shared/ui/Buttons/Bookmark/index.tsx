import { Button, Image, Text } from '@chakra-ui/react';

import { BORDERS } from '~/shared/constants/styles';
import { ButtonBookBtnProps } from '~/shared/types';

export const ButtonbookBtn = ({
    bookBtnText = 'Сохранить',
    bookBtnTextcolor = 'blackAlpha.800',
    bookBtnBorderColor,
    bookBtnBg,
    bookBtnBorder = BORDERS.main,
    bookBtnBorderRadius = 'md',
    bookBtnVariant = 'outline',
    bookBtnIconUrl = '/icons/bookmarks/heart.svg',
    bookBtnIconAltText = 'Сохранить',
    bookBtnIconMarginInlineEnd = { base: 0, xl: 2.4375 },
    bookBtnIconsize = { base: 3, xl: 3.5 },
    bookBtnSize = { base: 6, xl: 'initial' },
    bookBtnTextDisplay = { base: 'none', xl: 'initial' },
    recipeButtonsSize = { base: 'xs', xl: 'sm' },
}: ButtonBookBtnProps) => (
    <Button
        size={recipeButtonsSize}
        maxWidth={bookBtnSize}
        sx={{
            '& .chakra-button__icon': {
                marginInlineEnd: bookBtnIconMarginInlineEnd,
            },
        }}
        bg={bookBtnBg}
        color={bookBtnTextcolor}
        borderRadius={bookBtnBorderRadius}
        border={bookBtnBorder}
        borderColor={bookBtnBorderColor}
        leftIcon={<Image src={bookBtnIconUrl} alt={bookBtnIconAltText} boxSize={bookBtnIconsize} />}
        variant={bookBtnVariant}
    >
        <Text display={bookBtnTextDisplay}>{bookBtnText}</Text>
    </Button>
);
