import { Box } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type Props = {
    onReset?: MouseEventHandler<HTMLButtonElement>;
};

export const ResetButton = ({ onReset }: Props) => (
    <Box
        top={3}
        right={10}
        position='absolute'
        as='button'
        onClick={onReset}
        fontSize='12px'
        cursor='pointer'
    >
        ✕
    </Box>
);
