import { Flex, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFilters } from '~/app/providers/Filters/useFilters';
import { setCurrentLocation } from '~/redux';
import { useRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { PAGE_TITLES, SEARCH_STATE } from '~/shared/constants';
import { PADDINGS } from '~/shared/constants/styles';
import {
    NavigationConfig,
    RandomCategoryataStateProps,
    RandomCategoryStateProps,
    RecipeProps,
} from '~/shared/types';
import {
    BlogsSection,
    CategoryHeader,
    CategorySectionNext,
    PageWrapper,
    ServerErrorAlert,
    Slider,
} from '~/shared/ui';
import { getRandomCategory, populateRecipeCategory } from '~/utils';
import { Loader } from '~/widgets';
import { SearchBar } from '~/widgets/SearchBar';

import JuciestSection from './juciestSection';

type Props = {
    navigationConfig: NavigationConfig;
};

export const HomePage = ({ navigationConfig }: Props) => {
    const { subCategoriesByIds, categoriesByIds } = navigationConfig;

    const { filters } = useFilters();
    const [latestRecipes, setLatestRecipes] = useState<RecipeProps[]>([]);
    const [juciestRecipes, setJuciestRecipes] = useState<RecipeProps[]>([]);
    const [randomCategory, setRandomCategory] = useState<RandomCategoryStateProps>(null);
    const [randomCategoryData, setRandomCategoryData] = useState<RandomCategoryataStateProps>({
        category: { title: '', description: '' },
        recipes: [],
    });
    const [markdownText, setMarkdownText] = useState<string | undefined>();
    const [searchResultState, setSearchResultState] = useState<SEARCH_STATE>();

    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const {
        latestData,
        juciestData,
        randomCategoryRecipes,
        isLoadingLatest,
        isLoadingJuciest,
        isLoadingRandom,
        isErrorLatest,
        isErrorJuciest,
        isErrorRandom,
        isFetchingLatest,
        isFetchingJuiciest,
    } = useRequests({ randomCategory, isJuiciest: true });

    useEffect(() => {
        if (subCategoriesByIds && !isLoadingLatest && !isLoadingJuciest && !isLoadingRandom) {
            if (latestData) {
                const populatedData = latestData.map((e) =>
                    populateRecipeCategory(e, subCategoriesByIds),
                );
                setLatestRecipes(populatedData);
                dispatch(setCurrentLocation({}));
            }

            if (juciestData) {
                const populatedData = juciestData.map((e) =>
                    populateRecipeCategory(e, subCategoriesByIds),
                );
                setJuciestRecipes(populatedData);
            }

            if (randomCategory && randomCategoryRecipes?.length) {
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

            if (latestData?.length || juciestData?.length) {
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
        }
    }, [
        juciestData,
        latestData,
        randomCategoryRecipes,
        randomCategory,
        isLoadingLatest,
        isLoadingJuciest,
        isLoadingRandom,
        searchResultState,
        filters.searchString,
        subCategoriesByIds,
        dispatch,
        resetError,
    ]);

    useEffect(() => {
        const randomCategory = getRandomCategory(categoriesByIds);
        const subcategoriesIds =
            randomCategory?.subCategories?.map((e) => e.apiQureryId).join(',') || '';
        setRandomCategory({ randomCategory, subcategoriesIds });
    }, [categoriesByIds]);

    useEffect(() => {
        if (isErrorLatest || isErrorJuciest || isErrorRandom) {
            if (filters.searchString) {
                setSearchResultState(SEARCH_STATE.ERROR);
                setMarkdownText(undefined);
                dispatch(setAppError(true));
            } else {
                dispatch(setAppError(true));
            }
        }
    }, [isErrorLatest, isErrorJuciest, isErrorRandom, dispatch, filters.searchString]);

    if (isLoadingLatest || isLoadingJuciest) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {!filters.searchString && (isFetchingLatest || isFetchingJuiciest) && <Loader />}
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar
                searchResultState={searchResultState}
                isLoading={!!filters.searchString && (isFetchingLatest || isFetchingJuiciest)}
                pageTitle={PAGE_TITLES.home}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {latestRecipes?.length && (
                    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                        <CategoryHeader
                            mb={PADDINGS.subsectionHeaderMb}
                            title={PAGE_TITLES.slider}
                        />
                        <Slider markdownText={markdownText} slides={latestRecipes} />
                    </Flex>
                )}
                {juciestRecipes?.length && (
                    <JuciestSection markdownText={markdownText} recipesData={juciestRecipes} />
                )}
                <BlogsSection />
                {randomCategoryData.recipes?.length && (
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
