import { Flex, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { LocationParams, NavigationConfig, RecipeProps } from 'src/shared/types';

import { useNavigationLocation } from '~/pages/recipe/useNavigationLocation';
import { useCategoryRecieptsQuery, useRecieptQuery } from '~/redux/query/create-api';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { PADDINGS } from '~/shared/constants/styles';
import {
    CategoryHeader,
    CookingSteps,
    IngridientsSection,
    NutritionInfo,
    PageWrapper,
    RecipeSectionCard,
    ServerErrorAlert,
    Slider,
} from '~/shared/ui';
import { AuthorCard } from '~/shared/ui/Authors';
import { populateRecipeCategory } from '~/utils';
import { Loader } from '~/widgets';

type Props = {
    navigationConfig: NavigationConfig;
};

const authorData = {
    id: 1,
    name: 'Сергей Разумов',
    email: '@serge25',
    profilePic: '/avatars/avatar-5.png',
    subscribers: 125,
};

export const RecipePage = ({ navigationConfig }: Props) => {
    const { id } = useParams<LocationParams>();
    const { subCategoriesByIds } = navigationConfig;
    const navigate = useNavigate();

    const [reciept, setReciept] = useState<RecipeProps>();
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);

    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const {
        data: recieptData,
        isLoading: isLoadingReciept,
        isError: isRecieptEror,
    } = useRecieptQuery(id || '', { skip: !id });

    const {
        data: { data: latestData } = {},
        isLoading: isLoadingLatest,
        isError: isErrorLatest,
    } = useCategoryRecieptsQuery({
        limit: 10,
        isLatest: true,
    });

    // Используем наш новый хук для управления навигацией
    useNavigationLocation(reciept, isLoadingReciept, navigationConfig);

    useEffect(() => {
        if (subCategoriesByIds && recieptData && !isLoadingReciept) {
            const populatedData = populateRecipeCategory(recieptData, subCategoriesByIds);
            setReciept(populatedData);
        }

        if (subCategoriesByIds && latestData && !isLoadingLatest) {
            const populatedData = latestData.map((e) =>
                populateRecipeCategory(e, subCategoriesByIds),
            );
            setLatestReciepts(populatedData);
        }

        if (isRecieptEror) {
            navigate(-1);
            dispatch(setAppError('Error'));
        }

        if (isErrorLatest) {
            dispatch(setAppError('Error'));
        }
    }, [
        recieptData,
        latestData,
        isLoadingReciept,
        isLoadingLatest,
        isRecieptEror,
        isErrorLatest,
        subCategoriesByIds,
        navigate,
        dispatch,
    ]);

    if (isLoadingReciept) {
        return <Loader />;
    }

    return (
        <PageWrapper pt={PADDINGS.pageRecieptTop}>
            {error && <ServerErrorAlert onClose={resetError} />}
            {reciept && (
                <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                    <RecipeSectionCard recipe={reciept} />
                    <VStack
                        gap={{ base: 6, xl: 8 }}
                        maxW='668px'
                        mx='auto'
                        mt={{ base: 6, xl: 8 }}
                        mb={{ base: 10, xl: 14 }}
                        w='100%'
                    >
                        <NutritionInfo nutritionValue={reciept.nutritionValue} />
                        <IngridientsSection
                            ingredients={reciept.ingredients}
                            defaultPortions={reciept.portions}
                        />
                        <CookingSteps steps={reciept.steps} />
                        <AuthorCard authorData={authorData} />
                    </VStack>
                    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                        <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                        <Slider slides={latestReciepts} />
                    </Flex>
                </VStack>
            )}
        </PageWrapper>
    );
};
