import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { RecipeProps } from '~/components/layouts-components/FilterBar/reducers/recipesReducer';
import { IngridientItem } from '~/views/recipe/Ingridients/IngridientItem';

type Props = {
    ingredients: RecipeProps['ingredients'];
    defaultPortions: number;
};

export const Ingridients = ({ ingredients, defaultPortions }: Props) => {
    const [portions, setPortions] = useState<number>(defaultPortions);

    return (
        <VStack w='100%'>
            {/* Заголовок + счётчик порций */}
            <Flex fontFamily='Inter' gap={4} alignItems='center' w='100%' pl={{ base: 2, md: 6 }}>
                <Text
                    flex='1 1 50%'
                    fontSize='12px'
                    fontWeight='700'
                    letterSpacing='0.05em'
                    color='lime.600'
                >
                    ИНГРЕДИЕНТЫ
                </Text>

                <Text fontSize='12px' fontWeight='700' letterSpacing='0.05em' color='lime.600'>
                    ПОРЦИЙ
                </Text>

                <NumberInput
                    value={portions}
                    onChange={(_, num) => setPortions(num || 1)}
                    min={1}
                    max={100}
                    borderRadius='6px'
                    maxW='73px'
                >
                    <NumberInputField fontSize='16px' />
                    <NumberInputStepper>
                        <NumberIncrementStepper
                            data-test-id='increment-stepper'
                            onClick={() => setPortions((prev) => Math.min(prev + 1, 100))}
                        />
                        <NumberDecrementStepper
                            data-test-id='decrement-stepper'
                            onClick={() => setPortions((prev) => Math.max(prev - 1, 1))}
                        />
                    </NumberInputStepper>
                </NumberInput>
            </Flex>

            {/* Список ингредиентов */}
            <VStack w='100%'>
                {ingredients.map(({ title, count, measureUnit }, index) => (
                    <IngridientItem
                        key={index}
                        index={index}
                        title={title}
                        count={+count * (portions / defaultPortions)}
                        measureUnit={measureUnit}
                        isGrayed={Boolean(index % 2)}
                    />
                ))}
            </VStack>
        </VStack>
    );
};
