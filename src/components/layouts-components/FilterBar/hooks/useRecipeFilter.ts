import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    applyFilters,
    resetReciepts,
} from '~/components/layouts-components/FilterBar/reducers/recipesReducer';
import { ComposeFiltersPayloadType } from '~/components/layouts-components/FilterBar/types';

export const useRecipeFilter = () => {
    const dispatch = useDispatch();

    /* локальные списки */
    const [categories, setCategories] = useState<string[]>([]);
    const [authors, setAuthors] = useState<string[]>([]);
    const [meats, setMeats] = useState<string[]>([]);
    const [sides, setSides] = useState<string[]>([]);
    const [allergens, setAllergens] = useState<string[]>([]);
    const [excludeAllergens, setExcludeAllergens] = useState(false);

    /* универсальный toggle-помощник */
    const makeToggle =
        (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) =>
            setter((prev) =>
                prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
            );

    /* сборка payload + отправка в redux */
    const submit = (payload: ComposeFiltersPayloadType) => {
        dispatch(applyFilters(payload));
    };

    /* сброс всего */
    const clear = () => {
        setCategories([]);
        setAuthors([]);
        setMeats([]);
        setSides([]);
        setAllergens([]);
        setExcludeAllergens(false);
        dispatch(resetReciepts());
    };

    return {
        state: {
            categories,
            authors,
            meats,
            sides,
            allergens,
            excludeAllergens,
        },
        actions: {
            toggleCategory: makeToggle(setCategories),
            toggleAuthor: makeToggle(setAuthors),
            toggleMeat: makeToggle(setMeats),
            toggleSide: makeToggle(setSides),
            toggleAllergen: makeToggle(setAllergens),
            switchExclude: () => setExcludeAllergens((p) => !p),
            submit,
            clear,
        },
    };
};
