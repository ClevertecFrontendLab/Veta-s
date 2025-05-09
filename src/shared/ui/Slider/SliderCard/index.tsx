import { useBreakpointValue } from '@chakra-ui/react';
import { CategoriesProps } from 'src/shared/types';

import { RecipeCard } from '../../index';

type Props = {
    title: string;
    description?: string;
    categories?: CategoriesProps[];
    image?: string;
    activeSearch?: string | null;
    likesAmount?: number;
    bookmarksAmount?: number;
};

export const SliderCard = ({
    title,
    description,
    categories,
    image,
    activeSearch,
    likesAmount,
    bookmarksAmount,
}: Props) => {
    const hiddenElements = useBreakpointValue({
        base: true,
        xl: false,
    });

    const categoryResponsivePosition = useBreakpointValue({
        base: {
            position: 'absolute',
            top: 2,
            left: 2,
        },
        xl: {
            position: 'static',
        },
    });

    return (
        <RecipeCard
            descriptionHeight={{ xl: 16 }}
            cardContentPadding={{ base: '8px 8px 4px', xl: 3, '2xl': '16px 24px 20px' }}
            imageWidth='100%'
            imageFit='cover'
            imageHeight={{ base: 128, xl: 230 }}
            height={{ base: 220, xl: 402, '2xl': 414 }}
            minWidth='unset'
            text={description}
            title={title}
            titleMargin={2}
            titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
            titleTextLh={{ base: '24px' }}
            titleHeading='h3'
            titleTextAlign='left'
            noButtons={true}
            position={{ base: 'relative', xl: 'static' }}
            imageSrc={image}
            stateIconSize={3}
            stateTextFontSize='12px'
            statTextFontWeight={600}
            categories={categories}
            bookmarkJustify='space-between'
            titleTextNoOfLines={{ base: 2, xl: 1 }}
            cardHeaderNoOfLines={{ base: 2, xl: 1 }}
            noDescription={hiddenElements}
            categorySx={categoryResponsivePosition}
            bookmarkMaxHeight={{ base: 'unset', xl: 6 }}
            titleTextHighlight={activeSearch}
            bookmarksBookmarksValue={bookmarksAmount}
            bookmarksLikesValue={likesAmount}
        />
    );
};
