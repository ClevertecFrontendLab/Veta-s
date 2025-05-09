import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Icon } from '@chakra-ui/react';

type Props = {
    isOpen: boolean;
};

export const ExpandButton = ({ isOpen }: Props) => (
    <Box
        zIndex={2}
        top={3}
        right={4}
        position='absolute'
        as='button'
        width='20px'
        height='20px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        cursor='pointer'
    >
        <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} />
    </Box>
);
