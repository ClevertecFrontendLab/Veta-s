import { Button, Image } from '@chakra-ui/react';

import { ButtonCategoryProps } from '~/shared/types';

export const ButtonCategory = ({
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '4px',
    categoryPx = 4,
    categoryPy,
    categoryPb,
    categoryTextFz,
    categoryTextNoofLines,
    categoryIconUrl,
    categoryTitle,
}: ButtonCategoryProps) => (
    <Button
        flexShrink={0}
        textAlign='left'
        pb={categoryPb}
        noOfLines={categoryTextNoofLines}
        size='xs'
        bg={categoryBg}
        color={categoryColor}
        borderRadius={categoryBorderRadius}
        px={categoryPx}
        py={categoryPy}
        fontWeight={400}
        fontSize={categoryTextFz}
        leftIcon={<Image src={categoryIconUrl} alt={`${categoryTitle} icon`} boxSize={4} />}
        _hover={{
            bg: categoryBg,
        }}
        _active={{
            bg: categoryBg,
        }}
    >
        {categoryTitle}
    </Button>
);
