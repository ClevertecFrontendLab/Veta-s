import { Flex, FlexProps, HStack, ResponsiveValue, SystemStyleObject } from '@chakra-ui/react';
import { ButtonCategoryProps, CategoriesProps, StatItemProps } from 'src/shared/types';

import { ButtonCategory } from '../Buttons';
import { StatItem } from '../StatItem';

export interface BookmarksSectionProps extends ButtonCategoryProps, StatItemProps {
    noCategory?: ResponsiveValue<boolean>;
    likesAmount?: StatItemProps['statValue'];
    peopleAmount?: StatItemProps['statValue'];
    heartIcon?: string;
    peopleIcon?: string;
    bookmarkJustify?: string;
    bookmarkAlignItems?: FlexProps['alignItems'];
    bookmarkStatGap?: ResponsiveValue<number>;
    bookmarkMb?: ResponsiveValue<number | string>;
    bookmarkMarginTop?: ResponsiveValue<number | string>;
    categories?: CategoriesProps[];
    categorySx?: SystemStyleObject;
    order?: FlexProps['order'];
    bookmarkMaxHeight?: FlexProps['maxHeight'];
    bookmarkWrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
    bookmarksBookmarksValue?: number | string;
    bookmarksLikesValue?: number | string;
    bookmarksFlexDirection?: FlexProps['flexDirection'];
}

export const BookmarksSection = ({
    heartIcon = '/icons/bookmarks/heart.svg',
    peopleIcon = '/icons/bookmarks/emoji-heart-eyes.svg',
    noCategory = false,
    bookmarkJustify = 'space-between',
    bookmarkAlignItems = 'flex-start',
    bookmarkStatGap,
    categoryBg = 'lime.150',
    categories = [],
    categorySx,
    bookmarkMb,
    order,
    bookmarkMaxHeight,
    bookmarkWrap = 'wrap',
    bookmarkMarginTop,
    bookmarksBookmarksValue,
    bookmarksLikesValue,
    bookmarksFlexDirection = { base: 'column', xl: 'row' },
    ...props
}: BookmarksSectionProps) => (
    <Flex
        justifyContent={bookmarkJustify}
        alignItems={bookmarkAlignItems}
        mb={bookmarkMb}
        mt={bookmarkMarginTop}
        order={order}
        flexShrink={1}
        flexGrow={0}
    >
        {!noCategory && (
            <Flex
                maxH={bookmarkMaxHeight}
                overflow='hidden'
                wrap={bookmarkWrap}
                flexDirection={bookmarksFlexDirection}
                gap={1}
                sx={categorySx}
                mr={2}
            >
                {categories.map((e, index) => (
                    <ButtonCategory
                        key={index}
                        {...props}
                        categoryBg={categoryBg}
                        categoryTitle={e.categoryTitle}
                        categoryIconUrl={e.categoryIconUrl}
                    />
                ))}
            </Flex>
        )}
        <HStack spacing={bookmarkStatGap} minW='72px'>
            <StatItem {...props} statIconUrl={heartIcon} statValue={bookmarksBookmarksValue} />
            <StatItem {...props} statIconUrl={peopleIcon} statValue={bookmarksLikesValue} />
        </HStack>
    </Flex>
);
