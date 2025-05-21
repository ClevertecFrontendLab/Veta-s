import { AllCategories, CategoriesByIds, SubCategoriesByIds } from '~/shared/types';

export type BreadcrumbItem = {
    label: string;
    to: string;
};

export type CurrentLocationState = {
    area?: { label: string; route: string };
    category?: { label: string; route?: string };
    reciept?: { label: string; route?: string };
    subcategory?: { label: string; route?: string };
};

export type LocationParams = {
    category: string;
    id?: string;
    subcategory?: string;
};

export type NavigationConfig = {
    categoriesByIds: CategoriesByIds;
    navigationTree: AllCategories[];
    subCategoriesByIds: SubCategoriesByIds;
};

export type NavigationReducerProps = {
    currentLocationState: CurrentLocationState;
    navigationConfig: NavigationConfig;
};
