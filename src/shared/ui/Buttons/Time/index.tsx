import { Button, Image, Text } from '@chakra-ui/react';

import { ButtonTimeBtnProps } from '~/shared/types';

export const ButtonTimeBtn = ({
    timeBtnText = '0 минут',
    timeBtnIconsize = 4,
    timeBtnMarginBottom = 0,
}: ButtonTimeBtnProps) => (
    <Button
        h={6}
        bg='blackAlpha.100'
        color='blackAlpha.800'
        borderRadius='md'
        fontSize='14px'
        fontWeight={400}
        w={104}
        py={1}
        mb={timeBtnMarginBottom}
        mt='auto'
        leftIcon={
            <Image
                src='/icons/bookmarks/clock.svg'
                alt='coocking time icon'
                boxSize={timeBtnIconsize}
            />
        }
        variant='link'
    >
        <Text>{timeBtnText} минут</Text>
    </Button>
);
