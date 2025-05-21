import { SEARCH_STATE } from '~/shared/constants';
import { AllCategories, RecipeProps } from '~/shared/types/domain';

export type RandomCategoryStateProps = {
    randomCategory: AllCategories;
    subcategoriesIds: string;
} | null;

export type RandomCategoryataStateProps = {
    category: { description?: string; title: string };
    recipes?: RecipeProps[];
};

export type SearchBarProps = {
    isLoading: boolean;
    pageDescription?: string;
    pageTitle: string;
    searchResultState?: SEARCH_STATE;
};

export type SearchInputProps = {
    onSearch: (searchText: string) => void;
};
