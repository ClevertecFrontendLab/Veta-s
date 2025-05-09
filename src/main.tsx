import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { defaultTheme } from '~/app/themes';
import { store } from '~/redux/store/configure-store';

import { AppProviders } from './app/providers';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={defaultTheme}>
                <AppProviders>
                    <App />
                </AppProviders>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
