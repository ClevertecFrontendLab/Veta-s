import { Button, Image, ResponsiveValue, Text } from '@chakra-ui/react';

export interface TimeButtonProps {
    timeBtnText?: string;
    timeBtnIconSize?: string | number;
    timeBtnMarginBottom?: ResponsiveValue<string | number>;
}

export const ButtonTimeBtn = ({
    timeBtnText = '0 минут',
    timeBtnIconSize = 4,
    timeBtnMarginBottom = 0,
}: TimeButtonProps) => (
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
                boxSize={timeBtnIconSize}
            />
        }
        variant='link'
    >
        <Text>{timeBtnText}</Text>
    </Button>
);
