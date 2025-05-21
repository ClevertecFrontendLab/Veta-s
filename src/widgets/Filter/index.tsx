import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Image,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useFilters } from '~/app/providers/Filters/useFilters';
import { getCategories, getMeats, getSides } from '~/redux/selectors';
import { TEST_IDS } from '~/shared/constants';
import { BORDERS, SHADOWS } from '~/shared/constants/styles';
import {
    AllergensFilter,
    CheckBoxLime,
    SelectInnerTags,
    SelectRegular,
    SwitchToggler,
} from '~/shared/ui';
import { FilterTag } from '~/widgets/Filter/FilterTag';
import { OptionCheckbox } from '~/widgets/Filter/OptionCheckbox';

export const RecipeFilter = () => {
    const meats = useSelector(getMeats);
    const sidesMap = useSelector(getSides);
    const categoriesMap = useSelector(getCategories);
    const categories = Object.keys(categoriesMap);
    const sides = Object.keys(sidesMap);

    const authors = ['Сергей Разумов'];

    const { isOpen, closeDrawer, setFilters, filters } = useFilters();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

    const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
    const [selectedSides, setSelectedSides] = useState<string[]>([]);
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

    const toggleCategoriesDropdown = () => setIsCategoryOpen(!isCategoryOpen);
    const toggleAuthorsDropdown = () => setIsAuthorsOpen(!isAuthorsOpen);

    const toggleCategorySelection = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category],
        );
    };

    const toggleAuthorSelection = (category: string) => {
        setSelectedAuthors((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category],
        );
    };

    const toggleMeatSelection = (meat: string) => {
        setSelectedMeats((prev) =>
            prev.includes(meat) ? prev.filter((item) => item !== meat) : [...prev, meat],
        );
    };

    const toggleSideSelection = (side: string) => {
        setSelectedSides((prev) =>
            prev.includes(side) ? prev.filter((item) => item !== side) : [...prev, side],
        );
    };

    const toggleAllergensSelection = (allergen: string) => {
        setFilters({ ...filters, allergens: filters.allergens?.filter((e) => e !== allergen) });
    };

    const resetCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedCategories([]);
    };

    const resetAuthors = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedAuthors([]);
    };

    const searchReciepts = () => {
        const sideKeys = selectedSides.map((e) => sidesMap[e]);

        setFilters({
            ...filters,
            meat: selectedMeats.join(','),
            garnish: sideKeys.join(','),
        });

        setSelectedCategories([]);
        closeDrawer();
    };

    const clearFilters = () => {
        setFilters({});
        setSelectedAuthors([]);
        setSelectedCategories([]);
        setSelectedMeats([]);
        setSelectedSides([]);
        setIsExcludeAllergens(false);

        if (isCategoryOpen) {
            toggleCategoriesDropdown();
        }
        if (isAuthorsOpen) {
            toggleAuthorsDropdown();
        }
    };

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={closeDrawer}>
            <DrawerOverlay />
            <DrawerContent
                minW={{ base: 344, xl: 463 }}
                p={{ base: 4, xl: 8 }}
                pr={{ base: 1.5, xl: 2 }}
                data-test-id={TEST_IDS.filters}
            >
                <DrawerCloseButton
                    data-test-id={TEST_IDS.filtersCloseButton}
                    top={{ base: 5, xl: 8 }}
                    right={{ base: 3, xl: 5 }}
                >
                    <Image src='/icons/close-filter-icon.svg'></Image>
                </DrawerCloseButton>
                <DrawerHeader p={0} mb={8}>
                    Фильтр
                </DrawerHeader>
                <DrawerBody
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: 2,
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'blackAlpha.50',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'blackAlpha.300',
                            borderRadius: 8,
                        },
                    }}
                    width='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    p={0}
                    h='100%'
                >
                    <VStack w='100%' gap={4} pr={{ base: 2.5 }} mb={6}>
                        {/* Категория */}
                        <VStack w='100%' position='relative'>
                            <SelectInnerTags
                                dataTestId='filter-menu-button-категория'
                                options={selectedCategories}
                                toggleDropdown={toggleCategoriesDropdown}
                                isOpen={isCategoryOpen}
                                onReset={resetCategories}
                                noTagCloseButton={true}
                                placeholder='Категория'
                                noResetButton={!selectedCategories.length}
                                width='100%'
                            />
                            {isCategoryOpen && (
                                <VStack
                                    align='start'
                                    w='100%'
                                    borderRadius='4px'
                                    boxShadow={SHADOWS.allergensMenu}
                                    border={BORDERS.light}
                                >
                                    {categories.map((category, index) => (
                                        <CheckBoxLime
                                            dataTestCategory={`checkbox-${category.toLowerCase()}`}
                                            key={index}
                                            index={index}
                                            item={category}
                                            isChecked={selectedCategories.includes(category)}
                                            toggleItem={toggleCategorySelection}
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>

                        {/* Авторы */}
                        <VStack w='100%'>
                            <SelectRegular
                                noResetButton={!selectedAuthors.length}
                                placeholder='Поиск по автору'
                                isOpen={isAuthorsOpen}
                                toggleDropdown={toggleAuthorsDropdown}
                                onReset={resetAuthors}
                            />
                            {isAuthorsOpen && (
                                <VStack w='100%' align='start'>
                                    {authors.map((author, index) => (
                                        <CheckBoxLime
                                            key={index}
                                            index={index}
                                            item={author}
                                            isChecked={selectedAuthors.includes(author)}
                                            toggleItem={toggleAuthorSelection}
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>

                        <OptionCheckbox
                            title='Тип мяса'
                            options={meats}
                            selectedOptions={selectedMeats}
                            toggleOption={toggleMeatSelection}
                        />

                        <OptionCheckbox
                            dataTestPrefix='side'
                            title='Тип гарнира'
                            options={sides}
                            selectedOptions={selectedSides}
                            toggleOption={toggleSideSelection}
                        />

                        {/* аллергены */}
                        <Box w='100%'>
                            <Flex w='100%' alignItems='center' wrap='wrap' gap={2}>
                                <SwitchToggler
                                    dataTestId='allergens-switcher-filter'
                                    text=' Исключить аллергены'
                                    onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                                    isChecked={isExcludeAllergens}
                                />
                                <AllergensFilter
                                    // dataTestAllergenTag='filter-tag'
                                    dataTestCheckBoKeykey='allergen-'
                                    dataTestIdToggler='allergens-menu-button-filter'
                                    disabled={!isExcludeAllergens}
                                />
                            </Flex>
                        </Box>
                    </VStack>
                    <HStack w='100%' wrap='wrap'>
                        {selectedCategories.map((category, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={category}
                                onClick={() => toggleCategorySelection(category)}
                            />
                        ))}
                        {selectedAuthors.map((author, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={author}
                                onClick={() => toggleAuthorSelection(author)}
                            />
                        ))}
                        {selectedMeats.map((meat, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={meat}
                                onClick={() => toggleMeatSelection(meat)}
                            />
                        ))}
                        {selectedSides.map((side, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={side}
                                onClick={() => toggleSideSelection(side)}
                            />
                        ))}
                        {filters.allergens?.map((allergen, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={allergen}
                                onClick={() => toggleAllergensSelection(allergen)}
                            />
                        ))}
                    </HStack>
                </DrawerBody>
                <DrawerFooter display='flex' p='32px 14px 0 0' w='100%'>
                    <Button
                        fontSize='14px'
                        fontWeight={600}
                        variant='outline'
                        mr={2}
                        onClick={clearFilters}
                        px={6}
                        border={BORDERS.main}
                        data-test-id={TEST_IDS.filtersClearButton}
                    >
                        Очистить фильтр
                    </Button>
                    <Button
                        fontSize='14px'
                        fontWeight={600}
                        pointerEvents={
                            selectedCategories.length ||
                            selectedAuthors.length ||
                            selectedMeats.length ||
                            selectedSides.length
                                ? 'unset'
                                : 'none'
                        }
                        isDisabled={
                            !selectedCategories.length &&
                            !selectedAuthors.length &&
                            !selectedMeats.length &&
                            !selectedSides.length
                        }
                        bg='#000'
                        color='#fff'
                        onClick={searchReciepts}
                        px={6}
                        _hover={{ bg: '#000' }}
                        data-test-id={TEST_IDS.filtersFindButton}
                    >
                        Найти рецепт
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
