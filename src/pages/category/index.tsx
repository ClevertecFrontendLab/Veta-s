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
import { useRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { EXCLUDED_ROUTES, PAGE_TITLES, SEARCH_STATE } from '~/shared/constants';
import { CategorySection, CategorySectionNext, PageWrapper, ServerErrorAlert } from '~/shared/ui';
import { getRandomCategory } from '~/utils';
import {
    populateAndSetRecipes,
    populateRandomCategory,
    syncSearchState,
    updateLocation,
} from '~/utils/categoryHelpers';
import { Loader } from '~/widgets';
import { SearchBar } from '~/widgets/SearchBar';

type Props = {
    navigationConfig: NavigationConfig;
};

export const CategoryPage = ({ navigationConfig }: Props) => {
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

    const isJuiciest = category === EXCLUDED_ROUTES.juiciest;

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

    // Инициализация случайной категории
    useEffect(() => {
        const randomCategory = getRandomCategory(categoriesByIds, categoryId);
        const subcategoriesIds =
            randomCategory?.subCategories?.map((e) => e.apiQureryId).join(',') || '';

        setRandomCategory({ randomCategory, subcategoriesIds });
    }, [categoryId, categoriesByIds]);

    // Сброс страницы при изменении API ID запроса
    useEffect(() => {
        setPage(1);
    }, [apiQureryId]);

    // Обработка ошибок
    useEffect(() => {
        if (isErrorCategory || isErrorRandom) {
            if (filters.searchString) {
                setSearchResultState(SEARCH_STATE.ERROR);
                setMarkdownText(undefined);
            }
            dispatch(setAppError(true));
        }
    }, [isErrorCategory, isErrorRandom, filters.searchString, dispatch]);

    // Главный эффект для обработки данных - с использованием отдельных функций
    useEffect(() => {
        if (isLoadingCategory || isLoadingRandom || isFetching) {
            return;
        }
        populateAndSetRecipes(categoryData, page, subCategoriesByIds, setCategoryRecipes);

        if (categoryData?.length) {
            updateLocation(isJuiciest, currentCategory, subcategory, dispatch);
        }

        syncSearchState(
            filters,
            categoryData,
            searchResultState,
            setSearchResultState,
            setMarkdownText,
        );

        populateRandomCategory(
            randomCategory,
            randomCategoryRecipes,
            subCategoriesByIds,
            setRandomCategoryData,
        );
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
        filters,
        subcategory,
        page,
        isFetching,
        subCategoriesByIds,
        dispatch,
    ]);

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
