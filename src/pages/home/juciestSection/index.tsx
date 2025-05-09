import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';
import { CategorySectionProps } from 'src/shared/types';

import { TEST_IDS } from '~/shared/constants';
import { PADDINGS } from '~/shared/constants/styles';
import { ButtonViewMore, CategoryHeader } from '~/shared/ui';
import { CategoryCard } from '~/shared/ui/CategorySection/CategorySectionCard';

const JuciestPreview = ({ recipesData, activeSearch }: CategorySectionProps) => (
    <Flex justifyContent='space-between' direction='column' mb={{ base: 8, xl: 10 }}>
        <Flex justifyContent='space-between'>
            <CategoryHeader title='Самое сочное' mb={PADDINGS.subsectionHeaderMb} />
            <ButtonViewMore
                display={{ base: 'none', md: 'flex' }}
                as={Link}
                to='/the-juiciest'
                data-test-id={TEST_IDS.juciestLink}
                title='Вся подборка'
                noButtonIcon={false}
            />
        </Flex>
        <Flex flexWrap='wrap' gap={4}>
            {recipesData?.map((card, index) => {
                const { title, description, category, subcategory, image, id, likes, bookmarks } =
                    card;

                return (
                    <CategoryCard
                        cardDataTestId={`food-card-${index}`}
                        img={image}
                        key={index}
                        title={title}
                        description={description}
                        categories={category}
                        bookmarkMaxHeight={6}
                        coockingButtonAs={Link}
                        coockingButtonRoute={`/${category[0]}/${subcategory[0]}/${id}`}
                        coockingButtonDataId={index}
                        titleTextHighlight={activeSearch}
                        bookmarksBookmarksValue={bookmarks}
                        bookmarksLikesValue={likes}
                    />
                );
            })}
        </Flex>
        <Flex
            justifyContent='center'
            display={{ base: 'flex', md: 'none' }}
            mt={{ base: 3, xl: 0 }}
        >
            <ButtonViewMore
                noButtonIcon={false}
                data-test-id={TEST_IDS.juciestLinkMobile}
                title='Вся подборка'
                as={Link}
                to='/the-juiciest'
            />
        </Flex>
    </Flex>
);

export default JuciestPreview;
