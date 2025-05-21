import { ResponsiveValue } from '@chakra-ui/react';

import { AllCategories, RecipeProps, SubCategoryList } from '~/shared/types';

export type AuthorCardProps = {
    email: string;
    name: string;
    profilePic?: string;
    subscribers?: string | number;
};

export type BlogProps = {
    email: string;
    id: number;
    name: string;
    profilePic: string;
    quote: string;
};

export type CategoryMenuProps = {
    list: SubCategoryList[];
    activeSubcategory?: string;
};

export type CategorySectionNextProps = {
    data: RecipeProps[];
    title: string;
    description?: string;
};

export type CategorySectionProps = {
    activeSearch?: string | null;
    activeSubcategory?: string;
    categoryButtonText?: string;
    categoryData?: AllCategories;
    categoryHeaderMb?: ResponsiveValue<string | number>;
    markdownText?: string;
    mb?: ResponsiveValue<string | number>;
    noButton?: boolean;
    noButtonIcon?: boolean;
    noFooter?: boolean;
    noHeader?: boolean;
    noHeaderButton?: boolean;
    noNavMenu?: boolean;
    onClick?: () => void;
    recipesByCategory?: RecipeProps[];
    recipesData?: RecipeProps[];
};

export type NextSectionCardMinimizedProps = {
    title: string;
    buttonText?: string;
    iconUrl?: string;
};
