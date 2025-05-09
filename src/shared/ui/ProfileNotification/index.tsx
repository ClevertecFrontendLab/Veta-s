import { Flex, ResponsiveValue, Stack } from '@chakra-ui/react';

import { StatItemProps } from '~/shared/types';

import { StatItem } from '../index';

interface ProfileNotificationProps extends StatItemProps {
    bookmarksValue?: number;
    peopleValue?: number;
    likesValue?: number;
    justifyContent?: string;
    flexDirection?:
        | ResponsiveValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>
        | undefined;
    alignItems?: string;
    alignContent?: string;
    height?: number;
    width?: string;
    px?: number;
    py?: number;
    stackDirection?: ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
    gap?: string | number;
}

export const ProfileNotification = ({
    bookmarksValue = 185,
    peopleValue = 589,
    likesValue = 587,
    justifyContent = 'space-between',
    flexDirection,
    alignItems,
    alignContent = 'initial',
    height,
    width,
    px,
    py,
    stackDirection = 'row',
    gap,
    ...props
}: ProfileNotificationProps) => (
    <Flex
        justifyContent={justifyContent}
        flexDirection={flexDirection}
        alignItems={alignItems}
        alignContent={alignContent}
        w={width}
        h={height}
        px={px}
        py={py}
    >
        <Stack direction={stackDirection} spacing={gap}>
            <StatItem
                {...props}
                statIconUrl='/icons/bookmarks/heart.svg'
                statValue={bookmarksValue}
                statIconAltText='heart'
            />
            <StatItem
                {...props}
                statIconUrl='/icons/bookmarks/pople.svg'
                statValue={peopleValue}
                statIconAltText='people'
            />
            <StatItem
                {...props}
                statIconUrl='/icons/bookmarks/emoji-heart-eyes.svg'
                statValue={likesValue}
                statIconAltText='face'
            />
        </Stack>
    </Flex>
);
