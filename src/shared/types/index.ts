// =========================
// 📦 Imports
// =========================
import { ButtonProps, FlexProps, ResponsiveValue, TextProps } from '@chakra-ui/react';
import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Path } from 'react-router';

import { SEARCH_STATE } from '~/shared/constants';

// ============================================================================
// 🗂️  Domain models (core data structures used across the app)
// ============================================================================
export type AllCategories = {
    apiQureryId?: string;
    categoryDescription?: string;
    categoryEn: string;
    categoryIcon?: string;
    categoryId?: string;
    categoryRu: string;
    route: string;
    subCategories?: SubCategory[];
    subCategoriesList?: SubCategoryList[];
};

export type CategoriesByIds = {
    [key: string]: AllCategories;
};

export type CategoriesProps = {
    categoryIconUrl: string;
    categoryTitle: string;
    route: string;
};

export type CoockingSteps = {
    description: string;
    image: string;
    stepNumber: number;
};

export type Ingredients = {
    count: string | number;
    measureUnit: string;
    title: string;
};

export type NutritionValue = {
    calories: number;
    carbohydrates: number;
    fats: number;
    protein?: number;
    proteins?: number;
};

export type RecipeProps = {
    _id: string;
    bookmarks: number;
    category: CategoriesProps[];
    categoriesIds: string[];
    createdAt: string;
    date: string;
    description: string;
    id: string;
    image: string;
    ingredients: Ingredients[];
    likes: number;
    meat?: string;
    nutritionValue: NutritionValue;
    portions: number;
    side: string;
    steps: CoockingSteps[];
    subcategory: string[];
    time: string;
    title: string;
};

export type SubCategory = {
    apiQureryId: string;
    categoryDescription: string;
    categoryEn: string;
    categoryIcon: string;
    categoryId: string;
    categoryRu: string;
    route: string;
    subCategoriesList: SubCategoryList[];
    subcategoryEn: string;
    subcategoryId: string;
    subcategoryRu: string;
};

export type SubCategoryList = {
    categoryEn: string;
    categoryRu: string;
    route: string;
};

export type SubCategoriesByIds = {
    [key: string]: SubCategory;
};

// ============================================================================
// 🧭  Navigation & routing
// ============================================================================
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

// ============================================================================
// 🔍  Filters & search
// ============================================================================
export type AllergensFilterProps = {
    dataTestAllergenTag?: string;
    dataTestCheckBoKeykey?: string;
    dataTestIdToggler?: string;
    disabled: boolean;
    outerTags?: boolean;
};

export type ComposeFiltersPayloadType = {
    author?: string[];
    category?: string[];
    meat?: string[];
    side?: string[];
};

export type Filters = {
    allergens?: string[];
    garnish?: string;
    meat?: string;
    searchString?: string;
    subcategoriesIds?: string;
};

export type FiltersContextProps = {
    closeDrawer: () => void;
    filters: Filters;
    isOpen: boolean;
    openDrawer: () => void;
    setFilters: Dispatch<SetStateAction<Filters>>;
};

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

// ============================================================================
// 🪧  Component props — Buttons
// ============================================================================
export type ButtonBookBtnProps = {
    bookBtnBg?: string;
    bookBtnBorder?: string;
    bookBtnBorderColor?: string;
    bookBtnBorderRadius?: string;
    bookBtnIconAltText?: string;
    bookBtnIconUrl?: string;
    bookBtnIconsize?: ResponsiveValue<string | number>;
    bookBtnSize?: ResponsiveValue<string | number>;
    bookBtnText?: string;
    bookBtnTextDisplay?: ResponsiveValue<string>;
    bookBtnTextcolor?: string;
    bookBtnVariant?: string;
    bookBtnIconMarginInlineEnd?: ResponsiveValue<number>;
    recipeButtonsSize?: ResponsiveValue<string>;
};

export type ButtonCategoryProps = {
    categoryBg?: string;
    categoryBorderRadius?: string;
    categoryColor?: string;
    categoryIconUrl?: string;
    categoryPx?: ResponsiveValue<string | number>;
    categoryPy?: ResponsiveValue<string | number>;
    categoryPb?: ResponsiveValue<string | number>;
    categoryTextFz?: string | number;
    categoryTextNoofLines?: ResponsiveValue<number>;
    categoryTitle?: string;
};

export type ButtonOutlinedProps = {
    as?: React.ElementType;
    gap?: number;
    maxWidth?: ResponsiveValue<number | string>;
    minWidth?: ResponsiveValue<number | string>;
    outlBtnBg?: string;
    outlBtnBorder?: string;
    outlBtnBorderBottom?: string;
    outlBtnBorderColor?: string;
    outlBtnBorderRadius?: string;
    outlBtnColor?: string;
    outlBtnText: string;
    outlBtnTextFontSize?: ResponsiveValue<number | string>;
    outlBtnTextPadding?: ResponsiveValue<number | string>;
    size?: ResponsiveValue<string>;
};

export type ButtonTimeBtnProps = {
    timeBtnIconsize?: string | number;
    timeBtnMarginBottom?: ResponsiveValue<string | number>;
    timeBtnText?: string;
};

export type SubscribeButtonProps = {
    subscribeButtonAs?: React.ElementType;
    subscribeButtonBg?: ButtonProps['background'];
    subscribeButtonIconSize?: ResponsiveValue<number>;
    subscribeButtonIconUrl?: string;
    subscribeButtonRoute?: string | Partial<Path>;
    subscribeButtonSize?: ResponsiveValue<string>;
    subscribeButtonText?: string;
    subscribeButtonTextColor?: ButtonProps['color'];
    subscribeButtonVariant?: string;
};
export interface RecipeButtonsSectionProps extends ButtonBookBtnProps, ButtonTimeBtnProps {
    coockingButtonText?: string;
    actionButtonVariant?: string;
    coockingButtonAs?: React.ElementType;
    coockingButtonRoute?: string | Partial<Path>;
    coockingButtonBg?: ButtonProps['background'];
    coockingButtonTextColor?: ButtonProps['color'];
    coockingButtonIconUrl?: string;
    coockingButtonIconSize?: ResponsiveValue<number>;
    noTimeButton?: boolean;
    recipeButtonsSectionDirection?: FlexProps['direction'];
    coockingButtonDataId?: string | number;
}

// ============================================================================
// 🖼️  Component props — Cards & sections
// ============================================================================
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
    activeSubcategory?: string;
    list: SubCategoryList[];
};

export type CategorySectionNextProps = {
    data: RecipeProps[];
    description?: string;
    title: string;
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

export type CheckBoxLimeProps = {
    dataTestCatagory?: string;
    dataTestCheckBoKeykey?: string;
    dataTestIds?: string | number;
    index: number;
    isChecked: boolean;
    item: string;
    labelColor?: string;
    px?: number;
    toggleItem: CallableFunction;
};

export type CookingStepsProps = CoockingSteps & {
    isLastStep: boolean;
};

export type FilterTagProps = {
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    testId?: boolean;
};

export type FooterProps = {
    noExitButton?: boolean;
    p?: string;
};

export type NextSectionCardMinimizedProps = {
    buttonText?: string;
    iconUrl?: string;
    title: string;
};

export type ServerErrorAlertProps = {
    body?: string;
    onClose?: () => void;
    title?: string;
};

export type BurgerNavMenuProps = {
    breadCrumbsClickHandler: React.MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler: React.MouseEventHandler<HTMLDivElement>;
};

export type StatItemProps = {
    stateIconSize?: number;
    stateTextFontSize?: string;
    stateTextLh?: string;
    statAlign?: string;
    statGap?: string | number;
    statIconAltText?: string;
    statIconUrl?: string;
    statTextColor?: string;
    statTextFontWeight?: number;
    statValue?: number | string;
};

export type TextRegularProps = {
    regText?: string | number;
    regTextAlign?: TextProps['textAlign'];
    regTextColor?: string;
    regTextDataId?: string | number;
    regTextFf?: string;
    regTextFz?: ResponsiveValue<string>;
    regTextFw?: number;
    regTextLh?: ResponsiveValue<string>;
    regTextNoOfLines?: ResponsiveValue<number>;
};

export type TitleTextProps = {
    titleHeading?: React.ElementType;
    titleText?: string;
    titleTextAlign?: ResponsiveValue<'left' | 'center' | 'right' | 'justify'>;
    titleTextColor?: string;
    titleTextFf?: string;
    titleTextFs?: string;
    titleTextFw?: number | string;
    titleTextFz?: ResponsiveValue<string>;
    titleTextHighlight?: string | null;
    titleTextLh?: ResponsiveValue<string>;
    titleTextNoOfLines?: ResponsiveValue<number> | number;
};
