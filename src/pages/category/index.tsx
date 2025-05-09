import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import {
    NavigationConfig,
    RandomCategoryataStateProps,
    RandomCategoryStateProps,
    RecipeProps,
} from 'src/shared/types';

import { useFilters } from '~/app/providers/Filters/useFilters';
import { setCurrentLocation } from '~/redux';
import { useRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { EXCLUDED_ROUTES, PAGE_TITLES, SEARCH_STATE } from '~/shared/constants';
import { CategorySection, CategorySectionNext, PageWrapper, ServerErrorAlert } from '~/shared/ui';
import { getRandomCategory, populateRecipeCategory } from '~/utils';
import { Loader } from '~/widgets';
import { SearchBar } from '~/widgets/SearchBar';

type Props = {
    navigationConfig: NavigationConfig;
};

const CategoryPage = ({ navigationConfig }: Props) => {
    const { filters } = useFilters();
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const { subCategoriesByIds, categoriesByIds, navigationTree } = navigationConfig;

    const currentCategory = useMemo(
        () => navigationTree.find((e) => e.categoryEn === category),
        [category, navigationTree],
    );

    const currentSubCategory = useMemo(
        () => currentCategory?.subCategories?.find((e) => e.subcategoryEn === subcategory),
        [currentCategory, subcategory],
    );

    const isJuiciest: boolean = category === EXCLUDED_ROUTES.juiciest;

    const { categoryRu, categoryDescription, categoryId } = currentCategory || {};
    const { apiQureryId } = currentSubCategory || {};

    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();

    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const [randomCategory, setRandomCategory] = useState<RandomCategoryStateProps>(null);
    const [markdownText, setMarkdownText] = useState<string | undefined>();
    const [searchResultState, setSearchResultState] = useState<SEARCH_STATE>();
    const [categoryRecipes, setCategoryRecipes] = useState<RecipeProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [randomCategoryData, setRandomCategoryData] = useState<RandomCategoryataStateProps>();

    const getMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const {
        recipesByCategory,
        categoryData,
        meta,
        isLoadingCategory,
        isErrorCategory,
        isFetching,
        randomCategoryRecipes,
        isLoadingRandom,
        isErrorRandom,
    } = useRequests({ randomCategory, isJuiciest, apiQureryId, page });

    useEffect(() => {
        if (!isLoadingCategory && !isLoadingRandom && !isFetching) {
            if (categoryData?.length) {
                const populatedData = categoryData.map((e) =>
                    populateRecipeCategory(e, subCategoriesByIds),
                );

                setCategoryRecipes((prevData) =>
                    page === 1 ? populatedData : [...prevData, ...populatedData],
                );

                if (isJuiciest) {
                    dispatch(
                        setCurrentLocation({
                            category: { label: PAGE_TITLES.juiciest },
                        }),
                    );
                }

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
                            }),
                        );
                    }
                }

                if (filters.searchString) {
                    setSearchResultState(SEARCH_STATE.SUCCESS);
                    setMarkdownText(filters.searchString);
                } else if (searchResultState) {
                    setSearchResultState(undefined);
                    setMarkdownText(undefined);
                }
            } else {
                if (filters.searchString) {
                    setSearchResultState(SEARCH_STATE.EMPTY);
                    setMarkdownText(undefined);
                }
            }

            if (randomCategory) {
                if (randomCategoryRecipes?.length) {
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
            }
        }
    }, [
        categoryData,
        currentCategory,
        randomCategory,
        randomCategoryRecipes,
        isJuiciest,
        isLoadingCategory,
        isLoadingRandom,
        category,
        searchResultState,
        filters.searchString,
        subcategory,
        page,
        isFetching,
        subCategoriesByIds,
        dispatch,
        resetError,
    ]);

    useEffect(() => {
        const randomCategory = getRandomCategory(categoriesByIds, categoryId);
        const subcategoriesIds =
            randomCategory?.subCategories?.map((e) => e.apiQureryId).join(',') || '';

        setRandomCategory({ randomCategory, subcategoriesIds });
    }, [categoryId, categoriesByIds]);

    useEffect(() => {
        setPage(1);
    }, [apiQureryId]);

    useEffect(() => {
        if (isErrorCategory || isErrorRandom) {
            if (filters.searchString) {
                setSearchResultState(SEARCH_STATE.ERROR);
                setMarkdownText(undefined);
                dispatch(setAppError(true));
            } else {
                dispatch(setAppError(true));
            }
        }
    }, [isErrorCategory, isErrorRandom, filters.searchString, dispatch]);

    if (!currentCategory && !isJuiciest) {
        return <Navigate to='/not-found' replace />;
    }

    if (isLoadingCategory) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {!filters.searchString && isFetching && <Loader />}
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar
                searchResultState={searchResultState}
                isLoading={!!filters.searchString && isFetching}
                pageTitle={(!isJuiciest ? categoryRu : PAGE_TITLES.juiciest) || ''}
                pageDescription={categoryDescription}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {!isErrorCategory && categoryRecipes?.length && (
                    <CategorySection
                        activeSubcategory={subcategory}
                        categoryData={currentCategory}
                        recipesData={categoryRecipes}
                        categoryButtonText={isFetching ? 'Загрузка' : 'Загрузить еще'}
                        noHeader={true}
                        noFooter={!!meta?.totalPages && page >= meta.totalPages}
                        onClick={getMore}
                        markdownText={markdownText}
                        recipesByCategory={recipesByCategory}
                    />
                )}
                {randomCategoryData?.recipes?.length && (
                    <CategorySectionNext
                        title={randomCategoryData.category.title}
                        description={randomCategoryData.category.description}
                        data={randomCategoryData.recipes}
                    />
                )}
            </VStack>
        </PageWrapper>
    );
};

export default CategoryPage;
