import './App.css';

import { BrowserRouter } from 'react-router';

import { AppLayout } from '~/layouts/AppLayout';

export function App() {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
}
