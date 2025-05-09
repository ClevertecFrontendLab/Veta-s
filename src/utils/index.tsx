import { useLocation } from 'react-router';
import {
    CategoriesByIds,
    NavigationConfig,
    RecipeProps,
    SubCategoriesByIds,
} from 'src/shared/types';

export const usePathnames = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x)
        .map((e) => '/' + e);
    pathnames.unshift('/');

    return pathnames;
};

export const getHighlightedText = (
    text: string,
    highlight: string,
    textColor: string,
): React.ReactNode[] => {
    if (!highlight) return [text];
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ color: textColor }}>
                {part}
            </span>
        ) : (
            part
        ),
    );
};

export const searchByTitle = (reciepts: RecipeProps[], activeSearch: string) =>
    reciepts.filter((e) => e.title.toLowerCase().includes(activeSearch.toLowerCase()));

export const getLocallySavedNavigationConfig = () => {
    const saved = localStorage.getItem('navigationConfig');
    if (saved) {
        return JSON.parse(saved);
    }
    return saved;
};

export const saveLocallyNavigationConfig = (config: NavigationConfig) => {
    if (!config.navigationTree.length) return;

    localStorage.setItem('navigationConfig', JSON.stringify(config));
};

export const populateRecipeCategory = (reciept: RecipeProps, categoriesIds: SubCategoriesByIds) => {
    const populatedCategories = reciept.categoriesIds.reduce(
        (acc, id) => {
            const category = categoriesIds[id];
            if (!category) return acc;

            if (!acc.some((item) => item.categoryTitle === category.categoryRu)) {
                acc.push({
                    categoryTitle: category.categoryRu,
                    categoryIconUrl: category.categoryIcon,
                    route: category.route,
                });
            }
            return acc;
        },
        [] as { categoryTitle: string; categoryIconUrl: string; route: string }[],
    );

    const populatedSubCategories = reciept.categoriesIds.map(
        (e) => categoriesIds[e]?.subcategoryRu,
    );

    return { ...reciept, category: populatedCategories, subcategory: populatedSubCategories };
};

export const getRandomCategory = (categories: CategoriesByIds, exceptId: string = '') => {
    const ids = Object.keys(categories).filter((id) => id !== exceptId);
    const randomCategoryId = ids[Math.floor(Math.random() * ids.length)];
    return categories[randomCategoryId];
};
//
// export function populateAndSetRecipes(
//     categoryData: Recipe[],
//     page: number,
//     subCategoriesByIds: SubCategoriesByIds,
//     setCategoryRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
// ) {
//     if (!categoryData?.length) return;
//
//     const populated = categoryData.map((e) =>
//         populateRecipeCategory(e, subCategoriesByIds),
//     );
//     setCategoryRecipes((prev) => (page === 1 ? populated : [...prev, ...populated]));
// }
//
// export function updateLocation(
//     isJuiciest: boolean,
//     currentCategory: AllCategories | null,
//     subcategory: string | undefined,
//     dispatch: AppDispatch
// ) {
//     if (isJuiciest) {
//         dispatch(setCurrentLocation({ category: { label: PAGE_TITLES.juiciest } }));
//         return;
//     }
//
//     if (currentCategory) {
//         const currentSub = currentCategory.subCategories?.find(
//             (e) => e.subcategoryEn === subcategory,
//         );
//         if (currentSub) {
//             dispatch(
//                 setCurrentLocation({
//                     category: { label: currentCategory.categoryRu, route: currentCategory.route },
//                     subcategory: { label: currentSub.subcategoryRu, route: currentSub.route },
//                 }),
//             );
//         }
//     }
// }
//
// export function syncSearchState(
//     filters: Filters,
//     searchResultState: SEARCH_STATE | undefined,
//     setSearchResultState: React.Dispatch<React.SetStateAction<SEARCH_STATE | undefined>>,
//     setMarkdownText: React.Dispatch<React.SetStateAction<string | undefined>>
// ) {
//     if (filters.searchString) {
//         setSearchResultState(SEARCH_STATE.SUCCESS);
//         setMarkdownText(filters.searchString);
//     } else if (searchResultState) {
//         setSearchResultState(undefined);
//         setMarkdownText(undefined);
//     }
// }
//
// export function populateRandomCategory(
//     randomCategory: RandomCategoryStateProps,
//     randomCategoryRecipes: Recipe[] | undefined,
//     subCategoriesByIds: SubCategoriesByIds,
//     setRandomCategoryData: React.Dispatch<React.SetStateAction<RandomCategoryataStateProps | null>>
// ) {
//     if (!randomCategory || !randomCategoryRecipes?.length) return;
//
//     const {
//         randomCategory: { categoryRu, categoryDescription },
//     } = randomCategory;
//
//     const populatedData = randomCategoryRecipes.map((e) =>
//         populateRecipeCategory(e, subCategoriesByIds),
//     );
//
//     setRandomCategoryData({
//         category: { title: categoryRu, description: categoryDescription },
//         recipes: populatedData,
//     });
// }
