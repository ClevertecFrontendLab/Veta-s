import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { navTree } from '~/configs/navigationConfig';

export const AppViews = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {navTree.map((navItem) => {
                const MainComponent =
                    navItem.route === '/'
                        ? lazy(() => import('./home'))
                        : lazy(() => import('./category'));

                return (
                    <React.Fragment key={navItem.navKey}>
                        <Route path={navItem.route} Component={MainComponent} />
                        {navItem.submenu?.map((subNavItem) => (
                            <Route
                                key={subNavItem.navKey}
                                path={subNavItem.route}
                                Component={lazy(() => import('./category'))}
                            />
                        ))}
                    </React.Fragment>
                );
            })}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Suspense>
);
