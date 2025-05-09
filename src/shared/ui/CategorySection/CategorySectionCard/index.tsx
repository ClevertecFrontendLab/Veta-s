import { useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';
import { CategoriesProps } from 'src/shared/types';

import { RecipeCard, RecipeCardProps } from '../../index';

export interface CategoryCardProps extends RecipeCardProps {
    title: string;
    description?: string;
    img?: string;
    icon?: string;
    hiddenElements?: boolean;
    categories: CategoriesProps[];
}

export const CategoryCard = ({
    title,
    description,
    img,
    categories,
    ...props
}: CategoryCardProps) => {
    const responsiveValues = useBreakpointValue({
        base: {
            hiddenElements: true,
            categoryResponsivePosition: { position: 'absolute', top: 2, left: 2 },
        },
        xl: {
            hiddenElements: false,
            categoryResponsivePosition: { position: 'static' },
        },
    });

    const memoizedValues = useMemo(() => responsiveValues, [responsiveValues]);

    const { hiddenElements, categoryResponsivePosition } = memoizedValues || {};

    return (
        <RecipeCard
            {...props}
            minWidth={{ base: 158, xl: 322 }}
            imageHeight='auto'
            imageWidth={{ base: 158, xl: 322 }}
            imageMinWidth={{ base: 158, xl: 322 }}
            imageMinHeight={{ base: 128, xl: 244 }}
            text={description}
            title={title}
            titleMargin={2}
            titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
            titleTextLh='28px'
            titleHeading='h3'
            titleTextAlign='left'
            categoryBg='lime.50'
            categoryPy={1}
            categoryPx={1}
            position={{ base: 'relative', xl: 'static' }}
            imageBorderRadius='6px 0 0 6px'
            noDescription={hiddenElements}
            categorySx={categoryResponsivePosition}
            imageSrc={img}
            stateIconSize={3}
            stateTextFontSize='12px'
            statTextFontWeight={600}
            bookmarkJustify='space-between'
            cardFlexWidth={{ md: '1 1 40%', xl: '1 1 100%', '2xl': '1 1 40%' }}
            cardHeaderNoOfLines={{ base: 2, xl: 1 }}
            wrap={{ base: 'nowrap' }}
            bookmarksOrder={{ base: -1 }}
            bookmarkMb={{ xl: 6 }}
            bookmarkMaxHeight={{ base: 'unset' }}
            categories={categories}
            minHeight={{ base: '3.5em' }}
            regTextNoOfLines={3}
        />
    );
};
