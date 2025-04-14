import { Flex, ResponsiveValue } from '@chakra-ui/react';

import { getSubCategoryList, routeFinder } from '~/configs/navigationConfig';
import { PADDINGS } from '~/style/styles';
import { usePathnames } from '~/utils';

import { ButtonViewMore } from '../Buttons';
import { CategoryHeader } from '../Headers';
import { CategoryMenu } from './CategoryMenu';
import { CategoryCard } from './CategorySectionCard';

export type CategorySectionDataProps = {
    title: string;
    description: string;
    img: string;
    subcategory?: string;
    icon?: string;
};

export type CategorySectionProps = {
    categoryTitle: string;
    categoryButtonText?: string;
    noButton?: boolean;
    data: CategorySectionDataProps[];
    categoryHeaderMb?: ResponsiveValue<string | number>;
    noHeader?: boolean;
    noFooter?: boolean;
    noNavMenu?: boolean;
    noButtonIcon?: boolean;
    noHeaderButton?: boolean;
    mb?: ResponsiveValue<string | number>;
};

export const CategorySection = ({
    categoryTitle,
    categoryButtonText = '',
    data,
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noHeaderButton = false,
    noHeader = false,
    noFooter = false,
    noNavMenu = false,
    noButtonIcon,
}: CategorySectionProps) => {
    const pathnames = usePathnames();
    const activeCategory = routeFinder(pathnames.length > 1 ? pathnames[1] : pathnames[0]);
    const menuList = activeCategory?.title ? getSubCategoryList(activeCategory?.title) : []; // когда будет апи всё это выпилить

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column'>
            {!noHeader && (
                <Flex justifyContent='space-between' mb={categoryHeaderMb}>
                    <CategoryHeader title={categoryTitle} />
                    {!noHeaderButton && (
                        <ButtonViewMore title={categoryButtonText} noButtonIcon={noButtonIcon} />
                    )}
                </Flex>
            )}
            {!noNavMenu && !activeCategory?.skipSideMenu && <CategoryMenu list={menuList} />}
            <Flex flexWrap='wrap' gap={4}>
                {data.map((card, index) => {
                    const { title, description, img, subcategory, icon } = card;

                    return (
                        <CategoryCard
                            key={index}
                            title={title}
                            description={description}
                            img={img}
                            subcategory={subcategory}
                            icon={icon}
                        />
                    );
                })}
            </Flex>
            {!noFooter && (
                <Flex justifyContent='center' mt={categoryHeaderMb}>
                    <ButtonViewMore title={categoryButtonText} />
                </Flex>
            )}
        </Flex>
    );
};
