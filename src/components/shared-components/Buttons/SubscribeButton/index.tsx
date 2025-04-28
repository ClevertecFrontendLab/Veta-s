import { Button, ButtonProps, Image, ResponsiveValue } from '@chakra-ui/react';
import { ElementType } from 'react';
import { Path } from 'react-router';

import { BORDERS } from '~/style/styles';

export type SubscribeButtonProps = {
    subscribeButtonText?: string;
    subscribeButtonVariant?: string;
    subscribeButtonAs?: ElementType;
    subscribeButtonRoute?: string | Partial<Path>;
    subscribeButtonBg?: ButtonProps['background'];
    subscribeButtonTextColor?: ButtonProps['color'];
    subscribeButtonIconUrl?: string;
    subscribeButtonIconSize?: ResponsiveValue<number>;
    subscribeButtonSize?: ResponsiveValue<string>;
};

export const SubscribeButton = ({
    subscribeButtonText = 'Подписаться',
    subscribeButtonVariant = 'solid',
    subscribeButtonAs,
    subscribeButtonRoute,
    subscribeButtonBg = 'blackAlpha.900',
    subscribeButtonTextColor = '#fff',
    subscribeButtonIconUrl = '/icons/subscribe.svg',
    subscribeButtonIconSize = 4,
    subscribeButtonSize = { base: 'xs', xl: 'sm' },
}: SubscribeButtonProps) => (
    <Button
        as={subscribeButtonAs}
        to={subscribeButtonRoute}
        variant={subscribeButtonVariant}
        bg={subscribeButtonBg}
        color={subscribeButtonTextColor}
        size={subscribeButtonSize}
        border={BORDERS.light}
        borderRadius='6px'
        leftIcon={
            subscribeButtonIconUrl ? (
                <Image
                    src={subscribeButtonIconUrl}
                    alt={subscribeButtonText}
                    boxSize={subscribeButtonIconSize}
                />
            ) : undefined
        }
    >
        {subscribeButtonText}
    </Button>
);

export default SubscribeButton;
