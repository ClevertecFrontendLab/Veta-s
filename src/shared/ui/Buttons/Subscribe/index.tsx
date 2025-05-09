import { Button, Image } from '@chakra-ui/react';

import { BORDERS } from '~/shared/constants/styles';
import { SubscribeButtonProps } from '~/shared/types';

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
        bg={subscribeButtonBg}
        as={subscribeButtonAs}
        to={subscribeButtonRoute}
        variant={subscribeButtonVariant}
        color={subscribeButtonTextColor}
        size={subscribeButtonSize}
        leftIcon={
            subscribeButtonIconUrl ? (
                <Image
                    src={subscribeButtonIconUrl}
                    alt={subscribeButtonText}
                    boxSize={subscribeButtonIconSize}
                />
            ) : undefined
        }
        border={BORDERS.light}
        borderRadius='6px'
    >
        {subscribeButtonText}
    </Button>
);
