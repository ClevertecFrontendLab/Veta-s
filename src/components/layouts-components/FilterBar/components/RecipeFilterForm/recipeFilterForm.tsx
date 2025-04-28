import { DrawerFooter } from '@chakra-ui/icons';
import { Button, useDisclosure, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { Tags } from '~/components/layouts-components/FilterBar/components/Tags';
import { useRecipeFilter } from '~/components/layouts-components/FilterBar/hooks/useRecipeFilter';
import { Categories, Sides } from '~/components/layouts-components/FilterBar/sections';
import { Allergens } from '~/components/layouts-components/FilterBar/sections/Allergens';
import Authors from '~/components/layouts-components/FilterBar/sections/Authors';
import Meats from '~/components/layouts-components/FilterBar/sections/Meats';
import { ApplicationState } from '~/store/configure-store';

export const getCategories = (state: ApplicationState) => state.tags.categories;
export const getSides = (state: ApplicationState) => state.tags.sides;
export const getMeats = (state: ApplicationState) => state.tags.meats;

export const RecipeFilterForm = () => {
    //данные стора
    const categoriesMap = useSelector(getCategories);
    const sidesMap = useSelector(getSides);
    const meats = useSelector(getMeats);
    const authors = ['Сергей Разумов'];

    // локальное состояние фильтра
    const { state, actions } = useRecipeFilter();
    const {
        categories,
        authors: selAuthors,
        meats: selMeats,
        sides,
        allergens,
        excludeAllergens,
    } = state;

    // открыть/закрыть
    const { isOpen: isCatOpen, onToggle: toggleCatOpen } = useDisclosure();
    const { isOpen: isAuthorOpen, onToggle: toggleAuthorOpen } = useDisclosure();

    const submitDisabled =
        !categories.length && !selAuthors.length && !selMeats.length && !sides.length;

    return (
        <>
            <VStack w='100%' gap={4} pr={{ base: 2.5 }} mb={6}>
                <Categories
                    opened={isCatOpen}
                    onToggle={toggleCatOpen}
                    selected={categories}
                    toggle={actions.toggleCategory}
                    options={Object.keys(categoriesMap)}
                />

                <Authors
                    opened={isAuthorOpen}
                    onToggle={toggleAuthorOpen}
                    selected={selAuthors}
                    toggle={actions.toggleAuthor}
                    options={authors}
                />

                <Meats selected={selMeats} toggle={actions.toggleMeat} options={meats} />

                <Sides
                    selected={sides}
                    toggle={actions.toggleSide}
                    options={Object.keys(sidesMap)}
                />

                <Allergens
                    exclude={excludeAllergens}
                    switchExclude={actions.switchExclude}
                    selected={allergens}
                    toggle={actions.toggleAllergen}
                />
            </VStack>

            <Tags
                lists={{
                    categories: categories.map((v) => ({
                        value: v,
                        onRemove: actions.toggleCategory,
                    })),
                    authors: selAuthors.map((v) => ({
                        value: v,
                        onRemove: actions.toggleAuthor,
                    })),
                    meats: selMeats.map((v) => ({
                        value: v,
                        onRemove: actions.toggleMeat,
                    })),
                    sides: sides.map((v) => ({
                        value: v,
                        onRemove: actions.toggleSide,
                    })),
                    allergens: allergens.map((v) => ({
                        value: v,
                        onRemove: actions.toggleAllergen,
                    })),
                }}
            />

            <DrawerFooter p='32px 14px 0 0'>
                <Button variant='outline' mr={2} px={6} onClick={actions.clear}>
                    Очистить фильтр
                </Button>
                <Button
                    bg='#000'
                    color='#fff'
                    px={6}
                    _hover={{ bg: '#000' }}
                    isDisabled={submitDisabled}
                    onClick={() =>
                        actions.submit({
                            category: categories.map((k) => categoriesMap[k]),
                            author: selAuthors,
                            meat: selMeats,
                            side: sides.map((k) => sidesMap[k]),
                        })
                    }
                >
                    Найти рецепт
                </Button>
            </DrawerFooter>
        </>
    );
};
