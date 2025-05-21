import React from 'react';

export type CheckBoxLimeProps = {
    index: number;
    isChecked: boolean;
    item: string;
    toggleItem: CallableFunction;
    dataTestCategory?: string;
    dataTestCheckBoKeykey?: string;
    dataTestIds?: string | number;
    labelColor?: string;
    px?: number;
};

export type FooterProps = {
    noExitButton?: boolean;
    p?: string;
};

export type ServerErrorAlertProps = {
    body?: string;
    onClose?: () => void;
    title?: string;
};

export type BurgerNavMenuProps = {
    breadCrumbsClickHandler: React.MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler: React.MouseEventHandler<HTMLDivElement>;
};

export type StatItemProps = {
    stateIconSize?: number;
    stateTextFontSize?: string;
    stateTextLh?: string;
    statAlign?: string;
    statGap?: string | number;
    statIconAltText?: string;
    statIconUrl?: string;
    statTextColor?: string;
    statTextFontWeight?: number;
    statValue?: number | string;
};
