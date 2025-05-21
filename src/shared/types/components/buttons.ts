import { ButtonProps, FlexProps, ResponsiveValue } from '@chakra-ui/react';
import { Path } from 'react-router';

export type ButtonBookBtnProps = {
    bookBtnBg?: string;
    bookBtnBorder?: string;
    bookBtnBorderColor?: string;
    bookBtnBorderRadius?: string;
    bookBtnIconAltText?: string;
    bookBtnIconUrl?: string;
    bookBtnIconsize?: ResponsiveValue<string | number>;
    bookBtnSize?: ResponsiveValue<string | number>;
    bookBtnText?: string;
    bookBtnTextDisplay?: ResponsiveValue<string>;
    bookBtnTextcolor?: string;
    bookBtnVariant?: string;
    bookBtnIconMarginInlineEnd?: ResponsiveValue<number>;
    recipeButtonsSize?: ResponsiveValue<string>;
};

export type ButtonCategoryProps = {
    categoryBg?: string;
    categoryBorderRadius?: string;
    categoryColor?: string;
    categoryIconUrl?: string;
    categoryPx?: ResponsiveValue<string | number>;
    categoryPy?: ResponsiveValue<string | number>;
    categoryPb?: ResponsiveValue<string | number>;
    categoryTextFz?: string | number;
    categoryTextNoofLines?: ResponsiveValue<number>;
    categoryTitle?: string;
};

export type ButtonOutlinedProps = {
    as?: React.ElementType;
    gap?: number;
    maxWidth?: ResponsiveValue<number | string>;
    minWidth?: ResponsiveValue<number | string>;
    outlBtnBg?: string;
    outlBtnBorder?: string;
    outlBtnBorderBottom?: string;
    outlBtnBorderColor?: string;
    outlBtnBorderRadius?: string;
    outlBtnColor?: string;
    outlBtnText: string;
    outlBtnTextFontSize?: ResponsiveValue<number | string>;
    outlBtnTextPadding?: ResponsiveValue<number | string>;
    size?: ResponsiveValue<string>;
};

export type ButtonTimeBtnProps = {
    timeBtnIconsize?: string | number;
    timeBtnMarginBottom?: ResponsiveValue<string | number>;
    timeBtnText?: string;
};

export type SubscribeButtonProps = {
    subscribeButtonAs?: React.ElementType;
    subscribeButtonBg?: ButtonProps['background'];
    subscribeButtonIconSize?: ResponsiveValue<number>;
    subscribeButtonIconUrl?: string;
    subscribeButtonRoute?: string | Partial<Path>;
    subscribeButtonSize?: ResponsiveValue<string>;
    subscribeButtonText?: string;
    subscribeButtonTextColor?: ButtonProps['color'];
    subscribeButtonVariant?: string;
};

export type RecipeButtonsSectionProps = ButtonBookBtnProps &
    ButtonTimeBtnProps & {
        coockingButtonText?: string;
        actionButtonVariant?: string;
        coockingButtonAs?: React.ElementType;
        coockingButtonRoute?: string | Partial<Path>;
        coockingButtonBg?: ButtonProps['background'];
        coockingButtonTextColor?: ButtonProps['color'];
        coockingButtonIconUrl?: string;
        coockingButtonIconSize?: ResponsiveValue<number>;
        noTimeButton?: boolean;
        recipeButtonsSectionDirection?: FlexProps['direction'];
        coockingButtonDataId?: string | number;
    };
