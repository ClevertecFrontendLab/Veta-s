import React from 'react';

import { TitleTextProps } from '~/shared/types';

import { TitleText } from '../Title';

export interface SubtitleText extends TitleTextProps {
    titleText: string;
    titleTextFw?: number | string;
    titleHeading?: React.ElementType;
}

export const SubtitleText = ({
    titleText,
    titleTextFw = 500,
    titleHeading = 'h2',
    titleTextAlign = 'left',
    ...props
}: SubtitleText) => (
    <TitleText
        {...props}
        titleText={titleText}
        titleTextFw={titleTextFw}
        titleHeading={titleHeading}
        titleTextAlign={titleTextAlign}
    />
);
