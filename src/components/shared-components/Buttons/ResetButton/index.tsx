import { Box, BoxProps } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type Props = {
    onReset?: MouseEventHandler<HTMLButtonElement>;
    boxProps?: BoxProps;
};

export const ResetButton = ({ onReset, boxProps }: Props) => (
    <Box
        top={3}
        right={10}
        position='absolute'
        as='button'
        onClick={onReset}
        fontSize='12px'
        cursor='pointer'
        {...boxProps}
    >
        ✕
    </Box>
);
