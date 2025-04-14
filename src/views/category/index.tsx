import { Flex } from '@chakra-ui/react';

import { CategorySection, CategorySectionNext } from '~/components/shared-components';
import { navTree } from '~/configs/navigationConfig';
import { dishesList, sliderData } from '~/data';
import { PADDINGS, WIDTHS } from '~/style/styles';

import { Props } from '../home';

const nexSection = navTree.find((e) => e.navKey === 'desserts-baking');

const CategoryPage = ({ categoryTitle = '', categoryData = sliderData }: Props) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <CategorySection
            categoryTitle={categoryTitle}
            data={categoryData}
            categoryButtonText='Загрузить еще'
            noHeader={true}
        />
        <CategorySectionNext
            title={nexSection?.title || ''}
            description={nexSection?.description || ''}
            data={dishesList}
        />
    </Flex>
);

export default CategoryPage;
