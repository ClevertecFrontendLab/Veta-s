import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

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

export type FilterTagProps = {
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    testId?: boolean;
};
