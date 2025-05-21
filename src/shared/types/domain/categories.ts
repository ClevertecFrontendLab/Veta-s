export type AllCategories = {
    categoryEn: string;
    categoryRu: string;
    route: string;
    apiQureryId?: string;
    categoryDescription?: string;
    categoryIcon?: string;
    categoryId?: string;
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
