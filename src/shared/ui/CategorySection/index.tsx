import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';
import { CategorySectionProps } from 'src/shared/types';

import { TEST_IDS } from '~/shared/constants';
import { PADDINGS } from '~/shared/constants/styles';

import { ButtonViewMore } from '../Buttons';
import { CategoryMenu } from './CategoryMenu';
import { CategoryCard } from './CategorySectionCard';

export const CategorySection = ({
    activeSubcategory,
    categoryData,
    recipesData,
    categoryButtonText = '',
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noFooter = false,
    noNavMenu = false,
    onClick,
    markdownText,
}: CategorySectionProps) => {
    const { subCategoriesList } = categoryData || {};

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column' w='100%'>
            {!noNavMenu && subCategoriesList?.length && (
                <CategoryMenu list={subCategoriesList} activeSubcategory={activeSubcategory} />
            )}
            <Flex flexWrap='wrap' gap={4}>
                {recipesData?.map((card, index) => {
                    const { title, description, image, category, id, likes, bookmarks } = card;

                    return (
                        <CategoryCard
                            cardDataTestId={`food-card-${index}`}
                            key={index}
                            titleTextHighlight={markdownText}
                            title={title}
                            description={description}
                            img={image}
                            categories={category}
                            bookmarkMaxHeight={6}
                            coockingButtonAs={Link}
                            coockingButtonRoute={id}
                            coockingButtonDataId={index}
                            bookmarksLikesValue={likes}
                            bookmarksBookmarksValue={bookmarks}
                        />
                    );
                })}
            </Flex>
            {!noFooter && (
                <Flex justifyContent='center' mt={categoryHeaderMb}>
                    <ButtonViewMore
                        data-test-id={TEST_IDS.buttonViewMore}
                        title={categoryButtonText}
                        onClick={onClick}
                    />
                </Flex>
            )}
        </Flex>
    );
};
