import { Flex, VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { CategoryHeader, Slider } from '~/components/shared-components';
import { AuthorCard } from '~/components/shared-components/AuthorCard';
import { blogsData } from '~/data';
import recipes from '~/data/recipes.json';
import { PADDINGS } from '~/style/styles';
import { CookingSteps } from '~/views/recipe/CoockingSteps';
import { Ingridients } from '~/views/recipe/Ingridients';
import { Nutritions } from '~/views/recipe/Nutritions';
import { RecipeCardBlock } from '~/views/recipe/RecipeCardBlock';

const data = JSON.parse(JSON.stringify(recipes));
const sliderData = data.slice(0, 10);

const authorData = blogsData.find((author) => author.id === 2); // id выбрала на свой вкус, можно любого автора подставить

const RecieptPage = () => {
    const { pathname } = useLocation();
    const pathSegments = pathname.split('/');
    const recipe = data.find((r: { id: string }) => r.id === pathSegments[pathSegments.length - 1]);

    if (!recipe) {
        return <div>Рецепт не найден</div>;
    }
    if (!authorData) {
        return <div>Автор не найден</div>;
    }

    return (
        <Flex
            minH='100vh'
            mx={PADDINGS.sectionMx}
            px={{ base: 4, md: 5, xl: 0 }}
            display='column'
            w={{ '2xl': 1360 }}
            pb={{ base: PADDINGS.footer, xl: 'unset' }}
            pt={{ base: 20, xl: 136 }}
        >
            <RecipeCardBlock recipe={recipe} />
            <VStack
                gap={{ base: 6, xl: 8 }}
                maxW='668px'
                mx='auto'
                mt={{ base: 6, xl: 8 }}
                mb={{ base: 10, xl: 14 }}
            >
                <Nutritions nutritionValue={recipe.nutritionValue} />
                <Ingridients ingredients={recipe.ingredients} defaultPortions={recipe.portions} />
                <CookingSteps steps={recipe.steps} />
                <AuthorCard authorData={authorData} />
            </VStack>
            <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
                <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                <Slider cards={sliderData} />
            </Flex>
        </Flex>
    );
};

export default RecieptPage;
