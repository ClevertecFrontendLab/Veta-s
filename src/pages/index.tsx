import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { NavigationConfig } from 'src/shared/types';

const CategoryComponent = lazy(() =>
    import('./category').then((module) => ({ default: module.CategoryPage })),
);

const RecipeComponent = lazy(() =>
    import('./recipe').then((module) => ({ default: module.RecipePage })),
);

const HomeComponent = lazy(() => import('./home').then((module) => ({ default: module.HomePage })));

const ErrorComponent = lazy(() =>
    import('./error').then((module) => ({ default: module.NotFoundPage })),
);
type Props = {
    navigationConfig: NavigationConfig;
};

export const AppViews = ({ navigationConfig }: Props) => (
    <Suspense>
        <Routes>
            <Route
                path=':category/:subcategory/:id'
                element={<RecipeComponent navigationConfig={navigationConfig} />}
            />
            <Route path='/' element={<HomeComponent navigationConfig={navigationConfig} />} />
            <Route
                path='/:category/:subcategory?'
                element={<CategoryComponent navigationConfig={navigationConfig} />}
            />
            <Route path='/not-found' element={<ErrorComponent />} />
        </Routes>
    </Suspense>
);
