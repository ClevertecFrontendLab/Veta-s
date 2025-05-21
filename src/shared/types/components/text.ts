import { ResponsiveValue, TextProps } from '@chakra-ui/react';
import React from 'react';

export type TextRegularProps = {
    regText?: string | number;
    regTextAlign?: TextProps['textAlign'];
    regTextColor?: string;
    regTextDataId?: string | number;
    regTextFf?: string;
    regTextFz?: ResponsiveValue<string>;
    regTextFw?: number;
    regTextLh?: ResponsiveValue<string>;
    regTextNoOfLines?: ResponsiveValue<number>;
};

export type TitleTextProps = {
    titleHeading?: React.ElementType;
    titleText?: string;
    titleTextAlign?: ResponsiveValue<'left' | 'center' | 'right' | 'justify'>;
    titleTextColor?: string;
    titleTextFf?: string;
    titleTextFs?: string;
    titleTextFw?: number | string;
    titleTextFz?: ResponsiveValue<string>;
    titleTextHighlight?: string | null;
    titleTextLh?: ResponsiveValue<string>;
    titleTextNoOfLines?: ResponsiveValue<number> | number;
};
