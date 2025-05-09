import { Flex } from '@chakra-ui/react';
import { NutritionValue } from 'src/shared/types';

import { TextRegular } from '../../index';
import { NutritionInfoItem } from './NutritionInfoItem';

type Props = {
    nutritionValue: NutritionValue;
};

export const NutritionInfo = ({ nutritionValue }: Props) => (
    <Flex gap={3} direction='column' w='100%'>
        <TextRegular regText='* Калорийность на 1 порцию' regTextColor='blackAlpha.800' />
        <Flex direction={{ base: 'column', md: 'row' }} gap={3}>
            <NutritionInfoItem
                name='калорийность'
                value={nutritionValue.calories}
                measures='ККАЛ'
            />
            <NutritionInfoItem
                name='белки'
                value={nutritionValue.proteins || nutritionValue.protein || 0}
                measures='ГРАММ'
            />
            <NutritionInfoItem name='жиры' value={nutritionValue.fats} measures='ГРАММ' />
            <NutritionInfoItem
                name='углеводы'
                value={nutritionValue.carbohydrates}
                measures='ГРАММ'
            />
        </Flex>
    </Flex>
);
