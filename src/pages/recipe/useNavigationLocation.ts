import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { LocationParams, NavigationConfig, RecipeProps } from 'src/shared/types';

import { setCurrentLocation } from '~/redux';
import { EXCLUDED_ROUTES, PAGE_TITLES } from '~/shared/constants';

export const useNavigationLocation = (
    recipeData: RecipeProps | undefined,
    isLoading: boolean,
    navigationConfig: NavigationConfig,
) => {
    const { category, subcategory } = useParams<LocationParams>();
    const { subCategoriesByIds, navigationTree } = navigationConfig;
    const dispatch = useDispatch();

    const updateNavigationLocation = useCallback(() => {
        if (!recipeData || isLoading || !subCategoriesByIds) return;

        const currentCategory = navigationTree.find((e) => e.categoryEn === category);

        if (currentCategory) {
            const currentSubcategory = currentCategory?.subCategories?.find(
                (e) => e.subcategoryEn === subcategory,
            );

            if (currentSubcategory) {
                dispatch(
                    setCurrentLocation({
                        category: {
                            label: currentCategory.categoryRu,
                            route: currentCategory.route,
                        },
                        subcategory: {
                            label: currentSubcategory?.subcategoryRu,
                            route: currentSubcategory.route,
                        },
                        reciept: { label: recipeData.title },
                    }),
                );
            }
        } else if (category === EXCLUDED_ROUTES.juiciest) {
            dispatch(
                setCurrentLocation({
                    category: {
                        label: PAGE_TITLES.juiciest,
                        route: `/${EXCLUDED_ROUTES.juiciest}`,
                    },
                    reciept: { label: recipeData.title },
                }),
            );
        }
    }, [
        recipeData,
        isLoading,
        category,
        subcategory,
        navigationTree,
        subCategoriesByIds,
        dispatch,
    ]);

    useEffect(() => {
        updateNavigationLocation();
    }, [updateNavigationLocation]);

    return null;
};
