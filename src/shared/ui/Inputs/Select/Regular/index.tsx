import { Box, Text } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { ResetButton } from '~/shared/ui';
import { ExpandButton } from '~/shared/ui/Inputs/Select/SelectActionButons';

type Props = {
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    placeholder?: string;
    onReset?: MouseEventHandler<HTMLButtonElement>;
    dataTestId?: string;
    isOpen?: boolean;
    noResetButton?: boolean;
};

export const SelectRegular = ({
    isOpen = false,
    toggleDropdown,
    onReset,
    noResetButton = false,
    placeholder = 'Выберите из списка...',
    dataTestId,
}: Props) => (
    <Box
        data-test-id={dataTestId}
        position='relative'
        w='100%'
        p={2}
        pr={10}
        border='1px solid'
        borderColor={isOpen || isOpen ? 'lime.400' : '#ccc'}
        borderRadius='md'
        cursor='pointer'
        _focus={{ borderColor: 'lime.400' }}
        _hover={{ borderColor: 'lime.400' }}
        onClick={toggleDropdown}
    >
        <Text color='blackAlpha.700'>{placeholder}</Text>
        {!noResetButton && <ResetButton onReset={onReset} />}
        <ExpandButton isOpen={isOpen} />
    </Box>
);
