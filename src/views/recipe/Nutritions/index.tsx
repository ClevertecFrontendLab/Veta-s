import { Flex } from '@chakra-ui/react';

import { RecipeProps } from '~/components/layouts-components/FilterBar/reducers/recipesReducer';
import { TextRegular } from '~/components/shared-components';
import { NutritionInfo } from '~/views/recipe/Nutritions/NutritionInfo';

type Props = {
    nutritionValue: RecipeProps['nutritionValue'];
};

export const Nutritions = ({ nutritionValue }: Props) => (
    <Flex gap={3} direction='column' w='100%'>
        <TextRegular regText='* Калорийность на 1 порцию' regTextColor='blackAlpha.800' />
        <Flex direction={{ base: 'column', md: 'row' }} gap={3}>
            <NutritionInfo name='калорийность' value={nutritionValue.calories} measures='ККАЛ' />
            <NutritionInfo name='белки' value={nutritionValue.proteins} measures='ГРАММ' />
            <NutritionInfo name='жиры' value={nutritionValue.fats} measures='ГРАММ' />
            <NutritionInfo name='углеводы' value={nutritionValue.carbohydrates} measures='ГРАММ' />
        </Flex>
    </Flex>
);
