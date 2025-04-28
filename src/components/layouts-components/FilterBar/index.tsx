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
import { useDispatch, useSelector } from 'react-redux';

import { useDrawer } from '~/app/providers/DrawerFilter';
import { AllergensFilter } from '~/components/layouts-components/FilterBar/components/AllergensFilter';
import { TagFilter } from '~/components/layouts-components/FilterBar/components/Tags/TagFilter';
import {
    applyFilters,
    resetReciepts,
} from '~/components/layouts-components/FilterBar/reducers/recipesReducer';
import { ComposeFiltersPayloadType } from '~/components/layouts-components/FilterBar/types';
import { CheckBoxToFilter } from '~/components/shared-components/CheckBox/CheckBoxToFilter';
import { SelectTags } from '~/components/shared-components/Select/SelectTags';
import { CastomSwitch } from '~/components/shared-components/Switch';
import { FilterTitle } from '~/components/shared-components/Text/Title/FilterTitle';
import { ApplicationState } from '~/store/configure-store';
import { BORDERS, SHADOWS } from '~/style/styles';

import { SelectTagsIn } from './components/SelectTagsIn';

export const getFilteredReciepts = (state: ApplicationState) => state.recipes.filtrated;
export const getAllReciepts = (state: ApplicationState) => state.recipes.initial;
export const getCategories = (state: ApplicationState) => state.keys.categories;
export const getMeats = (state: ApplicationState) => state.keys.meats;
export const getSides = (state: ApplicationState) => state.keys.sides;
export const getAllergens = (state: ApplicationState) => state.keys.allergens;
export const getActiveSearch = (state: ApplicationState) => state.recipes.activeSearch;
export const isEmptySearch = (state: ApplicationState) => state.recipes.isEmptySearch;

export const RecipeFilter: React.FC = () => {
    const dispatch = useDispatch();
    const meats = useSelector(getMeats);
    const sidesMap = useSelector(getSides);
    const categoriesMap = useSelector(getCategories);
    const categories = Object.keys(categoriesMap);
    const sides = Object.keys(sidesMap);

    const authors = ['Сергей Разумов'];

    const { isOpen, closeDrawer } = useDrawer();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Возможно стоит декомпозировать всё
    const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

    const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
    const [selectedSides, setSelectedSides] = useState<string[]>([]);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
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

    const resetCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedCategories([]);
    };

    const resetAuthors = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedAuthors([]);
    };

    const searchReciepts = () => {
        const categoryKeys = selectedCategories.map((e) => categoriesMap[e]);
        const sideKeys = selectedSides.map((e) => sidesMap[e]);

        const appliedFilters: ComposeFiltersPayloadType = {
            category: categoryKeys,
            author: selectedAuthors,
            meat: selectedMeats,
            side: sideKeys,
        };

        dispatch(applyFilters(appliedFilters));
        setSelectedCategories([]);
        closeDrawer();
    };

    const clearFilters = () => {
        setSelectedAuthors([]);
        setSelectedCategories([]);
        setSelectedMeats([]);
        setSelectedSides([]);
        setSelectedAllergens([]);
        setIsExcludeAllergens(false);
        dispatch(resetReciepts());
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
                data-test-id='filter-drawer'
            >
                <DrawerCloseButton
                    data-test-id='close-filter-drawer'
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
                            <SelectTagsIn
                                dataTestId='filter-menu-button-категория'
                                // dataTestAllergenTag='filter-tag'
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
                                        <CheckBoxToFilter
                                            dataTestCatagory={`checkbox-${category.toLowerCase()}`}
                                            key={index}
                                            index={index}
                                            item={category}
                                            isChecked={selectedCategories.includes(category)}
                                            toggleItem={toggleCategorySelection}
                                            // dataTestIds={index}
                                            // dataTestkey='allergen-'
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>

                        {/* Авторы */}
                        <VStack w='100%'>
                            <SelectTags
                                noResetButton={!selectedAuthors.length}
                                placeholder='Поиск по автору'
                                isOpen={isAuthorsOpen}
                                toggleDropdown={toggleAuthorsDropdown}
                                onReset={resetAuthors}
                            />
                            {isAuthorsOpen && (
                                <VStack w='100%' align='start'>
                                    {authors.map((author, index) => (
                                        <CheckBoxToFilter
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

                        {/* meat */}
                        <Box mt={4} w='100%'>
                            <FilterTitle title='Тип мяса' />
                            {meats.map((meat, index) => (
                                <CheckBoxToFilter
                                    labelColor='#000'
                                    px={0}
                                    key={index}
                                    index={0}
                                    item={meat}
                                    isChecked={selectedMeats.includes(meat)}
                                    toggleItem={toggleMeatSelection}
                                />
                            ))}
                        </Box>

                        {/* side */}
                        <Box mt={4} w='100%'>
                            <FilterTitle title='Тип гарнира' />
                            {sides.map((side, index) => (
                                <CheckBoxToFilter
                                    dataTestCatagory={`checkbox-${side.toLowerCase()}`}
                                    labelColor='#000'
                                    px={0}
                                    key={index}
                                    index={0}
                                    item={side}
                                    isChecked={selectedSides.includes(side)}
                                    toggleItem={() => toggleSideSelection(side)}
                                />
                            ))}
                        </Box>

                        {/* Allergens */}
                        <Box w='100%'>
                            <Flex w='100%' alignItems='center' wrap='wrap' gap={2}>
                                <CastomSwitch
                                    dataTestId='allergens-switcher-filter'
                                    text=' Исключить аллергены'
                                    onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                                    isChecked={isExcludeAllergens}
                                />
                                <AllergensFilter
                                    // dataTestAllergenTag='filter-tag'
                                    dataTestKey='allergen-'
                                    dataTestId='allergens-menu-button-filter'
                                    selectedAllergens={selectedAllergens}
                                    setSelectedAllergens={setSelectedAllergens}
                                    disabled={!isExcludeAllergens}
                                />
                            </Flex>
                        </Box>
                    </VStack>
                    <HStack w='100%' wrap='wrap'>
                        {selectedCategories.map((category, index) => (
                            <TagFilter
                                testId={true}
                                key={index}
                                item={category}
                                onClick={() => toggleCategorySelection(category)}
                            />
                        ))}
                        {selectedAuthors.map((author, index) => (
                            <TagFilter
                                testId={true}
                                key={index}
                                item={author}
                                onClick={() => toggleAuthorSelection(author)}
                            />
                        ))}
                        {selectedMeats.map((meat, index) => (
                            <TagFilter
                                testId={true}
                                key={index}
                                item={meat}
                                onClick={() => toggleMeatSelection(meat)}
                            />
                        ))}
                        {selectedSides.map((side, index) => (
                            <TagFilter
                                testId={true}
                                key={index}
                                item={side}
                                onClick={() => toggleSideSelection(side)}
                            />
                        ))}
                        {selectedAllergens.map((side, index) => (
                            <TagFilter
                                testId={true}
                                key={index}
                                item={side}
                                onClick={() => toggleSideSelection(side)}
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
                        data-test-id='clear-filter-button'
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
                        data-test-id='find-recipe-button'
                    >
                        Найти рецепт
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
