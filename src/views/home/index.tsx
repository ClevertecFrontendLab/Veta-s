import { Flex } from '@chakra-ui/react';

import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionDataProps, CategorySectionNext } from '~/components/shared-components';
import { navTree } from '~/configs/navigationConfig';
import { dishesList, sliderData } from '~/data';
import { PADDINGS, WIDTHS } from '~/style/styles';

import { JuciestSection } from './juciest';

const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine');

export interface Props {
    categoryTitle?: string;
    categoryData?: CategorySectionDataProps[];
    categoryButtonText?: string;
}

const HomePage = ({ categoryData = sliderData }: Props) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
        mb={{ base: '96px', xl: 3 }}
    >
        <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
            <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
            <Slider slides={categoryData} />
        </Flex>
        <JuciestSection data={sliderData} categoryTitle='Самое сочное' />
        <BlogsSection />
        <CategorySectionNext
            title={nexSection?.title || ''}
            description={nexSection?.description || ''}
            data={dishesList}
        />
    </Flex>
);

export default HomePage;
