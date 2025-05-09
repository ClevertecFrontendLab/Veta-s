import { createContext } from 'react';

import { FiltersContextProps } from '~/shared/types';

export const FiltersContext = createContext<FiltersContextProps | undefined>(undefined);
