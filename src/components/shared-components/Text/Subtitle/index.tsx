import { TitleText, TitleTextProps } from '../Title';

export interface SubtitleText extends TitleTextProps {
    titleText: string;
    titleTextFw?: number;
    titleHeading?: React.ElementType;
}

export const SubtitleText = ({
    titleText,
    titleTextFw = 500,
    titleHeading = 'h2',
    ...props
}: SubtitleText) => (
    <TitleText
        {...props}
        titleText={titleText}
        titleTextFw={titleTextFw}
        titleHeading={titleHeading}
    />
);
