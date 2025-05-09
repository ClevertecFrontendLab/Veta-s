import React from 'react';
import {
    AllCategories,
    Filters,
    RandomCategoryataStateProps,
    RandomCategoryStateProps,
    RecipeProps,
    SubCategoriesByIds,
} from 'src/shared/types';

import { setCurrentLocation } from '~/redux';
import { AppDispatch } from '~/redux/store/hooks';
import { PAGE_TITLES, SEARCH_STATE } from '~/shared/constants';
import { populateRecipeCategory } from '~/utils';

export function populateAndSetRecipes(
    categoryData: RecipeProps[] | undefined,
    page: number,
    subCategoriesByIds: SubCategoriesByIds,
    setCategoryRecipes: React.Dispatch<React.SetStateAction<RecipeProps[]>>,
) {
    if (!categoryData?.length) return;

    const populated = categoryData.map((e) => populateRecipeCategory(e, subCategoriesByIds));
    setCategoryRecipes((prev) => (page === 1 ? populated : [...prev, ...populated]));
}

export function updateLocation(
    isJuiciest: boolean,
    currentCategory: AllCategories | null | undefined,
    subcategory: string | undefined,
    dispatch: AppDispatch,
) {
    if (isJuiciest) {
        dispatch(setCurrentLocation({ category: { label: PAGE_TITLES.juiciest } }));
        return;
    }

    if (currentCategory) {
        const currentSub = currentCategory.subCategories?.find(
            (e) => e.subcategoryEn === subcategory,
        );
        if (currentSub) {
            dispatch(
                setCurrentLocation({
                    category: { label: currentCategory.categoryRu, route: currentCategory.route },
                    subcategory: { label: currentSub.subcategoryRu, route: currentSub.route },
                }),
            );
        }
    }
}

export function syncSearchState(
    filters: Filters,
    categoryData: RecipeProps[] | undefined,
    searchResultState: SEARCH_STATE | undefined,
    setSearchResultState: React.Dispatch<React.SetStateAction<SEARCH_STATE | undefined>>,
    setMarkdownText: React.Dispatch<React.SetStateAction<string | undefined>>,
) {
    if (categoryData?.length) {
        if (filters.searchString) {
            setSearchResultState(SEARCH_STATE.SUCCESS);
            setMarkdownText(filters.searchString);
        } else if (searchResultState) {
            setSearchResultState(undefined);
            setMarkdownText(undefined);
        }
    } else if (filters.searchString) {
        setSearchResultState(SEARCH_STATE.EMPTY);
        setMarkdownText(undefined);
    }
}

export function populateRandomCategory(
    randomCategory: RandomCategoryStateProps,
    randomCategoryRecipes: RecipeProps[] | undefined,
    subCategoriesByIds: SubCategoriesByIds,
    setRandomCategoryData: React.Dispatch<
        React.SetStateAction<RandomCategoryataStateProps | undefined>
    >,
) {
    if (!randomCategory || !randomCategoryRecipes?.length) return;

    const {
        randomCategory: { categoryRu, categoryDescription },
    } = randomCategory;

    const populatedData = randomCategoryRecipes.map((e) =>
        populateRecipeCategory(e, subCategoriesByIds),
    );

    setRandomCategoryData({
        category: { title: categoryRu, description: categoryDescription },
        recipes: populatedData,
    });
}
