export type navTreeProps = {
    navKey: string;
    route: string;
    title: string;
    subTitle?: string;
    icon?: string;
    breadcrumb: boolean;
    description?: string;
    submenu: Array<navTreeProps>;
    skipSideMenu?: boolean;
    redirect?: string;
};

export const navTree: Array<navTreeProps> = [
    {
        navKey: 'home',
        route: '/',
        title: 'Главная',
        subTitle: 'Приятного аппетита!',
        breadcrumb: true,
        skipSideMenu: true,
        submenu: [],
    },
    {
        navKey: 'juiciest',
        route: '/the-juiciest',
        title: 'Самое сочное',
        skipSideMenu: true,
        breadcrumb: true,
        submenu: [],
    },
    {
        navKey: 'salads',
        route: '/salads',
        redirect: '/salads/meat',
        title: 'Салаты',
        icon: '/icons/dishes-category/eggplant.svg',
        description: '',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'salads-meat',
                route: '/salads/meat',
                title: 'Мясные салаты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'salads-fish',
                route: '/salads/fish',
                title: 'Рыбные салаты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'salads-vegetable',
                route: '/salads/vegetable',
                title: 'Овощные салаты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'salads-warm',
                route: '/salads/warm-salads',
                title: 'Тёплые салаты',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'appetizers',
        route: '/appetizers',
        redirect: '/appetizers/meat',
        title: 'Закуски',
        icon: '/icons/dishes-category/healthy-eating.svg',
        description: '',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'appetizers-meat',
                route: '/appetizers/meat',
                title: 'Мясные закуски',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'appetizers-fish',
                route: '/appetizers/fish',
                title: 'Рыбные закуски',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'appetizers-vegetable',
                route: '/appetizers/vegetable',
                title: 'Овощные закуски',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'appetizers-warm',
                route: '/appetizers/warm',
                title: 'Тёплые закуски',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'appetizers-sandwiches',
                route: '/appetizers/sandwiches',
                title: 'Бутерброды',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'appetizers-fastfood',
                route: '/appetizers/fastfood',
                title: 'Фастфуд',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'first-courses',
        route: '/first-courses',
        redirect: '/first-courses/meat-soups',
        title: 'Первые блюда',
        icon: '/icons/dishes-category/pot.svg',
        description: '',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'soups-meat',
                route: '/first-courses/meat-soups',
                title: 'Мясные супы',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'soups-vegetable',
                route: '/first-courses/vegetable-soups',
                title: 'Овощные супы',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'soups-broths',
                route: '/first-courses/broths',
                title: 'Бульоны',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'soups-cold',
                route: '/first-courses/cold-soups',
                title: 'Холодные супы',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'soups-dietary',
                route: '/first-courses/dietary-soups',
                title: 'Диетические супы',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'second-dish',
        route: '/second-dish',
        redirect: '/second-dish/meat',
        title: 'Вторые блюда',
        icon: '/icons/dishes-category/frying-pan.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'meat',
                route: '/second-dish/meat',
                title: 'Мясные',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'fish',
                route: '/second-dish/fish',
                title: 'Рыбные',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'vegetable',
                route: '/second-dish/vegetable',
                title: 'Овощные',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'poultry-dish',
                route: '/second-dish/poultry-dish',
                title: 'Из птицы',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'mushrooms',
                route: '/second-dish/mushrooms',
                title: 'Из грибов',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'offal',
                route: '/second-dish/offal',
                title: 'Из субпродуктов',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'steamed',
                route: '/second-dish/steamed',
                title: 'На пару',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'dumplings',
                route: '/second-dish/dumplings',
                title: 'Пельмени, вареники',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'flour-garnishes',
                route: '/second-dish/flour-garnishes',
                title: 'Мучные гарниры',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'vegetable-garnishes',
                route: '/second-dish/vegetable-garnishes',
                title: 'Овощные гарниры',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'pizza',
                route: '/second-dish/pizza',
                title: 'Пицца',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'sushi',
                route: '/second-dish/sushi',
                title: 'Суши',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'desserts-baking',
        route: '/desserts-baking',
        redirect: '/desserts-baking/pancakes',
        title: 'Десерты, выпечка',
        icon: '/icons/dishes-category/salads.svg',
        breadcrumb: true,
        description:
            'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб — рецепты изделий из теста многообразны и невероятно популярны.',
        submenu: [
            {
                navKey: 'pancakes',
                route: '/desserts-baking/pancakes',
                title: 'Блины и оладьи',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'pies-donuts',
                route: '/desserts-baking/pies-donuts',
                title: 'Пироги и пончики',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'cakes',
                route: '/desserts-baking/cakes',
                title: 'Торты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'rolls',
                route: '/desserts-baking/rolls',
                title: 'Рулеты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'muffins',
                route: '/desserts-baking/muffins',
                title: 'Кексы и маффины',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'cheesecakes',
                route: '/desserts-baking/cheesecakes',
                title: 'Сырники и ватрушки',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'puff-pastry',
                route: '/desserts-baking/puff-pastry',
                title: 'Из слоеного теста',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'choux-pastry',
                route: '/desserts-baking/choux-pastry',
                title: 'Из заварного теста',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'yeast-dough',
                route: '/desserts-baking/yeast-dough',
                title: 'Из дрожжевого теста',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'buns',
                route: '/desserts-baking/buns',
                title: 'Булочки и сдоба',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'bread',
                route: '/desserts-baking/bread',
                title: 'Хлеб',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'pizza-dough',
                route: '/desserts-baking/pizza-dough',
                title: 'Тесто на пиццу',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'creams',
                route: '/desserts-baking/creams',
                title: 'Кремы',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'grilled-dishes',
        route: '/grilled-dishes',
        redirect: '/grilled-dishes/beef',
        title: 'Блюда на гриле',
        icon: '/icons/dishes-category/washing-maschine.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'grilled-beef',
                route: '/grilled-dishes/beef',
                title: 'Говядина',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'grilled-pork',
                route: '/grilled-dishes/pork',
                title: 'Свинина',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'grilled-poultry-dish',
                route: '/grilled-dishes/poultry-dish',
                title: 'Птица',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'grilled-fish',
                route: '/grilled-dishes/fish',
                title: 'Рыба',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'grilled-mushrooms',
                route: '/grilled-dishes/mushrooms',
                title: 'Грибы',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'grilled-vegetables',
                route: '/grilled-dishes/vegetables',
                title: 'Овощи',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'vegan-cuisine',
        route: '/vegan',
        redirect: '/vegan/snacks',
        title: 'Веганская кухня',
        icon: '/icons/dishes-category/leaf.svg',
        breadcrumb: true,
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        submenu: [
            {
                navKey: 'snacks',
                route: '/vegan/snacks',
                title: 'Закуски',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'first-courses',
                route: '/vegan/first-courses',
                title: 'Первые блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'second-dish',
                route: '/vegan/second-dish',
                title: 'Вторые блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'side-dishes',
                route: '/vegan/side-dishes',
                title: 'Гарниры',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'desserts',
                route: '/vegan/desserts',
                title: 'Десерты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'baked-goods',
                route: '/vegan/baked-goods',
                title: 'Выпечка',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'raw-dishes',
                route: '/vegan/raw-food-dishes',
                title: 'Сыроедческие блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'drinks',
                route: '/vegan/drinks',
                title: 'Напитки',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'children-dishes',
        route: '/children-dishes',
        redirect: '/children-dishes/first-courses',
        icon: '/icons/dishes-category/child-tasty.svg',
        title: 'Детские блюда',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'children-first-courses',
                route: '/children-dishes/first-courses',
                title: 'Первые блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-second-dish',
                route: '/children-dishes/second-dish',
                title: 'Вторые блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-side-dishes',
                route: '/children-dishes/side-dishes',
                title: 'Гарниры',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-baked-goods',
                route: '/children-dishes/baked-goods',
                title: 'Выпечка',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-gluten-free',
                route: '/children-dishes/gluten-free',
                title: 'Без глютена',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-sugar-free',
                route: '/children-dishes/sugar-free',
                title: 'Без сахара',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-allergen-free',
                route: '/children-dishes/allergen-free',
                title: 'Без аллергенов',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'children-complementary-dishes',
                route: '/children-dishes/complementary-feeding-dishes',
                title: 'Блюда для прикорма',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'therapeutic-nutrition',
        route: '/therapeutic-nutrition',
        redirect: '/therapeutic-nutrition/children-diet',
        title: 'Лечебное питание',
        icon: '/icons/dishes-category/pot-medical.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'children-diet',
                route: '/therapeutic-nutrition/children-diet',
                title: 'Детская диета',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-1',
                route: '/therapeutic-nutrition/diet-1',
                title: 'Диета №1',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-2',
                route: '/therapeutic-nutrition/diet-2',
                title: 'Диета №2',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-3',
                route: '/therapeutic-nutrition/diet-3',
                title: 'Диета №3',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-4',
                route: '/therapeutic-nutrition/diet-4',
                title: 'Диета №4',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-5',
                route: '/therapeutic-nutrition/diet-5',
                title: 'Диета №5',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-6',
                route: '/therapeutic-nutrition/diet-6',
                title: 'Диета №6',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-7',
                route: '/therapeutic-nutrition/diet-7',
                title: 'Диета №7',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-8',
                route: '/therapeutic-nutrition/diet-8',
                title: 'Диета №8',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-9',
                route: '/therapeutic-nutrition/diet-9',
                title: 'Диета №9',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-10',
                route: '/therapeutic-nutrition/diet-10',
                title: 'Диета №10',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-11',
                route: '/therapeutic-nutrition/diet-11',
                title: 'Диета №11',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-12',
                route: '/therapeutic-nutrition/diet-12',
                title: 'Диета №12',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-13',
                route: '/therapeutic-nutrition/diet-13',
                title: 'Диета №13',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'diet-14',
                route: '/therapeutic-nutrition/diet-14',
                title: 'Диета №14',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'gluten-free',
                route: '/therapeutic-nutrition/gluten-free',
                title: 'Без глютена',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'allergen-free',
                route: '/therapeutic-nutrition/allergen-free',
                title: 'Без аллергенов',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'national',
        route: '/national',
        redirect: '/national/american-cuisine',
        title: 'Национальные',
        icon: '/icons/dishes-category/international-food.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'american-cuisine',
                route: '/national/american-cuisine',
                title: 'Американская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'armenian-cuisine',
                route: '/national/armenian',
                title: 'Армянская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'greek-cuisine',
                route: '/national/greek',
                title: 'Греческая кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'georgian-cuisine',
                route: '/national/georgian',
                title: 'Грузинская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'italian-cuisine',
                route: '/national/italian',
                title: 'Итальянская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'spanish-cuisine',
                route: '/national/spanish',
                title: 'Испанская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'chinese-cuisine',
                route: '/national/chinese',
                title: 'Китайская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'mexican-cuisine',
                route: '/national/mexican',
                title: 'Мексиканская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'pan-asian-cuisine',
                route: '/national/pan-asian',
                title: 'Паназиатская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'russian-cuisine',
                route: '/national/russian',
                title: 'Русская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'turkish-cuisine',
                route: '/national/turkish',
                title: 'Турецкая кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'french-cuisine',
                route: '/national/french',
                title: 'Французская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'swedish-cuisine',
                route: '/national/swedish',
                title: 'Шведская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'japanese-cuisine',
                route: '/national/japanese',
                title: 'Японская кухня',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'other-cuisine',
                route: '/national/other',
                title: 'Другая кухня',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'sauces',
        route: '/sauces',
        redirect: '/sauces/meat',
        title: 'Соусы',
        icon: '/icons/dishes-category/mortar.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'meat-sauces',
                route: '/sauces/meat',
                title: 'Соусы мясные',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'cheese-sauces',
                route: '/sauces/cheese',
                title: 'Соусы сырные',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'marinades',
                route: '/sauces/marinades',
                title: 'Маринады',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'drinks',
        route: '/drinks',
        redirect: '/drinks/juices-fresh',
        title: 'Напитки',
        icon: '/icons/dishes-category/cup-tea.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'juices-fresh',
                route: '/drinks/juices-fresh',
                title: 'Соки и фреши',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'smoothies',
                route: '/drinks/smoothies',
                title: 'Смузи',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'compotes',
                route: '/drinks/compotes',
                title: 'Компоты',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'kissels',
                route: '/drinks/kissels',
                title: 'Кисели',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'coffee',
                route: '/drinks/coffee',
                title: 'Кофе',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'medicinal-tea',
                route: '/drinks/medicinal-tea',
                title: 'Лечебный чай',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'kvass',
                route: '/drinks/kvass',
                title: 'Квас',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'cocktails',
                route: '/drinks/cocktails',
                title: 'Коктейли',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'alcoholic',
                route: '/drinks/alcoholic',
                title: 'Алкогольные',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        navKey: 'preserves',
        route: '/preserves',
        redirect: '/preserves/meat',
        title: 'Заготовки',
        icon: '/icons/dishes-category/pasta.svg',
        breadcrumb: true,
        submenu: [
            {
                navKey: 'meat-preserves',
                route: '/preserves/meat',
                title: 'Мясные заготовки',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'fish-preserves',
                route: '/preserves/fish',
                title: 'Рыбные заготовки',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'cucumber-preserves',
                route: '/preserves/cucumbers',
                title: 'Из огурцов',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'tomato-preserves',
                route: '/preserves/tomatoes',
                title: 'Из томатов',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'mushroom-preserves',
                route: '/preserves/mushrooms',
                title: 'Из грибов',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'vegetable-preserves',
                route: '/preserves/vegetables',
                title: 'Овощные заготовки',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'salad-caviar-preserves',
                route: '/preserves/salad-caviar',
                title: 'Салаты, икра',
                breadcrumb: true,
                submenu: [],
            },
            {
                navKey: 'fruit-berry-preserves',
                route: '/preserves/fruit-berries',
                title: 'Из фруктов и ягод',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
];

export const routeFinder = (route?: string) => {
    for (let index = 0; index < navTree.length; index++) {
        if (navTree[index].route === route) {
            return navTree[index];
        }

        const result = navTree[index].submenu.find((e) => e.route === route);
        if (result) {
            return result;
        }
    }
};

export const getSubCategoryList = (category: string) => {
    const targetCategory = navTree.find((e) => e.title === category);
    if (targetCategory && targetCategory.submenu) {
        return targetCategory.submenu;
    }
};

export const getNavBranches = (route: string) => {
    const homeBranch = navTree.find((e) => e.route === '/');
    const result = [homeBranch];

    if (route === '/') {
        return result;
    }

    const pathnames = route.split('/').filter((e) => e);
    const category = navTree.find((e) => e.route === `/${pathnames[0]}`);
    result.push(category);

    if (pathnames.length > 1 && category) {
        const subcategory = category.submenu.find(
            (e) => e.route === `${category.route}/${pathnames[1]}`,
        );
        result.push(subcategory);
    }
    return result;
};

export const getCategoryByKey = (key: string) => navTree.find((cat) => cat.route === '/' + key);

export const getActiveSubcatgory = (pathnames: string[]) => {
    if (pathnames.length > 2) {
        const category = navTree.find((cat) => cat.route === pathnames[1]);
        if (category) {
            const subcategory = category.submenu.find(
                (subcat) => subcat.route === pathnames[1] + pathnames[2],
            );
            return subcategory || category;
        }

        return navTree[0];
    }
    return navTree[0];
};

type CurrentLocation = {
    root: navTreeProps;
    category?: navTreeProps;
    categoryName?: string;
    subcategory?: navTreeProps;
    subcategoryName?: string;
    reciepeId?: string;
};

export const getLocation = (location: string): CurrentLocation => {
    const result: CurrentLocation = { root: navTree[0] };

    const pathnamesArray = location.split('/').filter((e) => e);

    if (!pathnamesArray.length) return result;

    const category = navTree.find((e) => e.route === '/' + pathnamesArray[0]);

    if (!category) return result;

    result.category = category;
    result.categoryName = pathnamesArray[0];

    if (pathnamesArray.length === 1) return result;

    const subcategory = category.submenu.find(
        (e) => e.route === `${category.route}/${pathnamesArray[1]}`,
    );

    if (!subcategory) return result;

    result.subcategory = subcategory;
    result.subcategoryName = pathnamesArray[1];

    if (pathnamesArray.length === 2) return result;

    if (pathnamesArray.length === 3) {
        result.reciepeId = pathnamesArray[2];
        return result;
    }

    return result;
};
