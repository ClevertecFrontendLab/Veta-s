import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { NavigationConfig } from 'src/shared/types';

const CategoryComponent = lazy(() => import('./category'));
const RecipeComponent = lazy(() => import('./recipe'));
const HomeComponent = lazy(() => import('./home'));

type Props = {
    navigationConfig: NavigationConfig;
};

const AppViews = ({ navigationConfig }: Props) => (
    <Suspense fallback={<div>Загрузка...</div>}>
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
            <Route path='/not-found' Component={lazy(() => import('./error'))} />
            <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
