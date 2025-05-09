import { Flex } from '@chakra-ui/react';
import { CategorySectionNextProps } from 'src/shared/types';

import { CategoryHeader, TextRegular } from '~/shared/ui';
import { NextSectionCardMinimized } from '~/shared/ui/CategorySectionNext/CardMinimized';

import { CategorySectionNextCard } from './Card';

export const CategorySectionNext = ({ title, description, data }: CategorySectionNextProps) => (
    <Flex w='100%' direction='column' borderTop='1px solid' borderColor='blackAlpha.200'>
        <Flex
            gap={{ md: 3, xl: 4, '2xl': 6 }}
            direction={{ base: 'column', md: 'row' }}
            textAlign='left'
            pt={{ base: 2, xl: 6 }}
            pb={{ base: 2, xl: 4 }}
        >
            <CategoryHeader
                alignItems='center'
                titleTextAlign='left'
                title={title}
                flex={{ base: '1 0 100%', md: '1 0 33.33%', '2xl': `0 0 668px` }}
                mb={{ base: 3, xl: 0 }}
            />
            <Flex flex={{ base: '1 0 100%', md: '1 0 66.67%', '2xl': `1 0 322px` }}>
                <TextRegular
                    regText={description}
                    regTextNoOfLines={0}
                    regTextColor='blackAlpha.600'
                />
            </Flex>
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 3, xl: 4, '2xl': 6 }}>
            {data.map((card, index) => {
                if (index < 2) {
                    const { title, description, category } = card;
                    return (
                        <CategorySectionNextCard
                            key={index}
                            title={title}
                            description={description}
                            categories={category}
                            regTextNoOfLines={{ base: 3 }}
                            height={{ md: '168px', xl: '180px', '2xl': '192px' }}
                            bookmarkMaxHeight={6}
                            bookmarkWrap={{ base: 'nowrap' }}
                            bookmarksFlexDirection='column'
                            descriptionMinHeight='60px'
                            cardHeaderHeight='unset'
                        />
                    );
                }
            })}
            <Flex
                direction='column'
                gap={{ base: 2.5, md: 1.5 }}
                flex={{ base: '1 0 100%', md: '1 1 33.33%', '2xl': '0 1 668px' }}
                height={{ md: '168px', xl: '180px', '2xl': '192px' }}
                justifyContent='space-between'
            >
                {data.map((card, index) => {
                    const { title, category } = card;
                    if (index >= 2 && index < 5) {
                        return (
                            <NextSectionCardMinimized
                                key={index}
                                title={title}
                                iconUrl={category[0].categoryIconUrl}
                            />
                        );
                    }
                })}
            </Flex>
        </Flex>
    </Flex>
);
