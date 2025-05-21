import { CategoriesProps } from '~/shared/types';

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

export type CookingStepsProps = CoockingSteps & {
    isLastStep: boolean;
};
