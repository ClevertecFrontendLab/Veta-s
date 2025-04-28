import { createSlice } from '@reduxjs/toolkit';

import { navTree } from '~/data/navigationConfig';

type Props = {
    categories: { [c: string]: string };
    meats: string[];
    sides: { [key: string]: string };
    allergens: string[];
};

const categories: { [key: string]: string } = {};
navTree.forEach((e) => {
    if (!e.skipSideMenu) {
        categories[e.title] = e.route.slice(1);
    }
});

const initialState: Props = {
    categories,
    meats: ['Курица', 'Свинина', 'Говядина', 'Индейка', 'Утка'],
    sides: {
        Картошка: 'potatoes',
        Гречка: 'buckwheat',
        Паста: 'pasta',
        Спагетти: 'spagetty',
        Рис: 'rice',
        Капуста: 'cabbage',
        Фасоль: 'beans',
        'Другие овощи': 'other',
    },
    allergens: [
        'Молочные продукты',
        'Яйцо',
        'Рыба',
        'Моллюски',
        'Орехи',
        'Томат (помидор)',
        'Цитрусовые',
        'Клубника (ягоды)',
        'Шоколад',
    ],
};

const tags = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
});

export const { reducer: tagsReducer } = tags;
