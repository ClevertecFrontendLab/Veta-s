export const PADDINGS: {
    bottomMnu: number;
    footer: number;
    burgerMenu: number;
    [key: string]: number | { [key: string]: number };
} = {
    topMenu: { base: 16, xl: 20 },
    burgerMenu: 20,
    bottomMnu: 21,
    sideMenu: 16,
    footer: 24,
    header: { base: 20, xl: 28 },
    pageTop: { base: 20, xl: 8 + 20 },
    pageRecieptTop: { base: 20, xl: 136 },
    content: 280,
    sectionMx: { base: 0, xl: 280 },
    subsectionMb: { base: 8, xl: 10 },
    subsectionHeaderMb: { base: 3, xl: 4, '2xl': 6 },
} as const;

export const MARGINS: { [key: string]: number } = {};

export const WIDTHS: { [key: string]: number } = {
    sideMenu: 64,
    burgerNavMenu: 344,
};

export const HEIGHTS: { [key: string]: number } = {
    burgerNavMenu: 652,
};

export const SHADOWS: { [key: string]: string } = {
    main: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
    green: 'radial-gradient(  circle at 50% 50%,   rgba(196, 255, 97, 0.7) 0%,   rgba(255, 255, 255, 0) 50%)',
    sideMunu: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    burgerNavMenu: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    allergensMenu: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    searchBar: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const BORDERS: { [key: string]: string } = {
    main: '1px solid rgba(0, 0, 0, 0.48)',
    light: '1px solid rgba(0, 0, 0, 0.08)',
    lime: '2px solid #D7FF94',
    allergenTag: '1px solid #B1FF2E',
};
