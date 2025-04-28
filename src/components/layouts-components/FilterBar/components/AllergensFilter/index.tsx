import { Box, BoxProps, Flex, VStack } from '@chakra-ui/react';
import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SelectTagsIn } from '~/components/layouts-components/FilterBar/components/SelectTagsIn';
import { SelectTagsOut } from '~/components/layouts-components/FilterBar/components/SelectTagsOut';
import {
    filterByAllergens,
    resetRecieptsAllergens,
} from '~/components/layouts-components/FilterBar/reducers/recipesReducer';
import { CheckBoxToFilter } from '~/components/shared-components/CheckBox/CheckBoxToFilter';
import { CustomInput } from '~/components/shared-components/Input/CustomInput';
import { SHADOWS } from '~/style/styles';

const allergens: string[] = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат (помидор)',
    'Цитрусовые',
    'Клубника (ягоды)',
    'Шоколад',
];

type Props = {
    disabled: boolean;
    outerTags?: boolean;
    selectedAllergens: string[];
    setSelectedAllergens: (allergens: string[]) => void;
    dataTestId?: string;
    dataTestKey?: string;
    dataTestTag?: string;
    boxProps?: BoxProps;
};

export const AllergensFilter = ({
    disabled,
    outerTags = false,
    selectedAllergens = [],
    setSelectedAllergens,
    dataTestId,
    dataTestKey,
    dataTestTag,
    boxProps,
}: Props) => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [newAllergen, setNewAllergen] = useState<string>('');

    // открывает/закрывает список аллергенов
    const toggleDropdown = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    // добавляет/удаляет аллерген из выбранных
    const toggleAllergen = useCallback(
        (allergen: string) => {
            const allergenValue = allergen.replace(/ .*/, '');
            const updatedSelectedAllergens = selectedAllergens.includes(allergenValue)
                ? selectedAllergens.filter((item) => item !== allergenValue)
                : [...selectedAllergens, allergenValue];

            setSelectedAllergens(updatedSelectedAllergens);
            dispatch(filterByAllergens(updatedSelectedAllergens));
        },
        [selectedAllergens, setSelectedAllergens, dispatch],
    );

    // обработка ввода
    const handleNewAllergenChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewAllergen(e.target.value);
    }, []);

    // сбрасывает все выбранные аллергены
    const handleReset = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            dispatch(resetRecieptsAllergens());
            setSelectedAllergens([]);
        },
        [dispatch, setSelectedAllergens],
    );

    //добавляет пользовательский аллерген
    const addNewAllergen = useCallback(() => {
        const trimmed = newAllergen.trim();
        if (trimmed && !selectedAllergens.includes(trimmed)) {
            const updatedSelectedAllergens = [...selectedAllergens, trimmed];
            setSelectedAllergens(updatedSelectedAllergens);
            setNewAllergen('');
            dispatch(filterByAllergens(updatedSelectedAllergens));
        }
    }, [newAllergen, selectedAllergens, setSelectedAllergens, dispatch]);

    return (
        <Box
            // as='button'
            width='100%'
            position='relative'
            userSelect={disabled ? 'none' : 'unset'}
            pointerEvents={disabled ? 'none' : 'auto'}
            data-test-id={dataTestId}
            aria-disabled={disabled}
            disabled={disabled}
            textAlign='left'
            {...boxProps}
        >
            {outerTags ? (
                <SelectTagsOut
                    options={selectedAllergens}
                    toggleDropdown={toggleDropdown}
                    isOpen={isOpen}
                    onReset={handleReset}
                    noTagCloseButton={true}
                />
            ) : (
                <SelectTagsIn
                    dataTestAllergenTag={dataTestTag}
                    options={selectedAllergens}
                    toggleDropdown={toggleDropdown}
                    isOpen={isOpen}
                    onReset={handleReset}
                    noTagCloseButton={true}
                />
            )}
            {isOpen && (
                <Box
                    data-test-id='allergens-menu'
                    mt={2}
                    borderRadius='4px'
                    bg='white'
                    boxShadow={SHADOWS.allergensMenu}
                    zIndex={10}
                    position='absolute'
                    width='100%'
                >
                    <VStack align='start'>
                        {allergens.map((allergen, index) => (
                            <CheckBoxToFilter
                                key={index}
                                index={index}
                                item={allergen}
                                isChecked={selectedAllergens.includes(allergen.replace(/ .*/, ''))}
                                toggleItem={toggleAllergen}
                                dataTestId={index}
                                dataTestKey={dataTestKey}
                            />
                        ))}
                    </VStack>
                    <Flex pt={2} pb={3} pl={6} alignItems='center'>
                        <CustomInput
                            item={newAllergen}
                            itemChange={handleNewAllergenChange}
                            addItem={addNewAllergen}
                            dataTestButtonId='add-allergen-button'
                            dataTestInputId='add-other-allergen'
                        />
                    </Flex>
                </Box>
            )}
        </Box>
    );
};
