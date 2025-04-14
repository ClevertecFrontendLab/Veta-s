export const PADDINGS: {
    bottomMnu: number;
    footer: number;
    [key: string]: number | { [key: string]: number };
} = {
    topMenu: { base: 16, xl: 20 },
    bottomMnu: 21,
    sideMenu: 16,
    footer: 24,
    header: { base: 20, xl: 28 },
    content: 280,
    sectionMx: { base: 0, xl: 280 },
    subsectionMb: { base: 8, xl: 10 },
    subsectionHeaderMb: { base: 3, xl: 4, '2xl': 6 },
} as const;

export const WIDTHS: { [key: string]: number } = {
    sideMenu: 64,
};

export const SHADOWS: { [key: string]: string } = {
    main: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
    green: 'radial-gradient(  circle at 50% 50%,   rgba(196, 255, 97, 0.7) 0%,   rgba(255, 255, 255, 0) 50%)',
    sideMunu: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

export const BORDERS: { [key: string]: string } = {
    main: '1px solid rgba(0, 0, 0, 0.48)',
    light: '1px solid rgba(0, 0, 0, 0.08)',
};
