import {
    Box,
    BoxProps,
    Flex,
    ResponsiveValue,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { ExpandButton, ResetButton } from '~/components/shared-components';
import { BORDERS } from '~/style/styles';

type SelectInnerTagsProps = {
    options: string[];
    placeholder?: string;
    isOpen?: boolean;
    noResetButton?: boolean;
    noTagCloseButton?: boolean;
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    toggleTag?: MouseEventHandler<HTMLButtonElement>;
    onReset?: MouseEventHandler<HTMLButtonElement>;
    dataTestAllergenTag?: string;
    dataTestId?: string;
    width?: ResponsiveValue<string>;
    boxProps?: BoxProps;
    tagContainerProps?: BoxProps;
    textProps?: BoxProps;
};

export const SelectTagsIn = ({
    options,
    isOpen = false,
    toggleDropdown,
    toggleTag,
    onReset,
    noResetButton = false,
    noTagCloseButton = false,
    placeholder = 'Выберите из списка...',
    dataTestAllergenTag,
    width,
    dataTestId,
    boxProps = {},
    tagContainerProps = {},
    textProps = {},
}: SelectInnerTagsProps) => (
    <Box
        data-test-id={dataTestId}
        w={width}
        p={2}
        pr={10}
        border='1px solid'
        borderColor={isOpen || options.length ? 'lime.400' : '#ccc'}
        borderRadius='md'
        cursor='pointer'
        _focus={{ borderColor: 'lime.400' }}
        _hover={{ borderColor: 'lime.400' }}
        onClick={toggleDropdown}
        {...boxProps}
    >
        {options.length > 0 ? (
            <Flex gap={2} wrap='wrap' {...tagContainerProps}>
                {options.map((option) => (
                    <Tag
                        data-test-id={dataTestAllergenTag}
                        key={option}
                        variant='outline'
                        border={BORDERS.allergenTag}
                        color='lime.600'
                        fontSize='12px'
                        pt={0.5}
                        fontWeight={500}
                        fontFamily='Inter'
                        h='20px'
                        boxShadow={0}
                    >
                        <TagLabel>{option}</TagLabel>
                        {!noTagCloseButton && <TagCloseButton onClick={toggleTag} />}
                    </Tag>
                ))}
                {!noResetButton && <ResetButton onReset={onReset} />}
            </Flex>
        ) : (
            <Text color='blackAlpha.700' {...textProps}>
                {placeholder}
            </Text>
        )}
        <ExpandButton isOpen={isOpen} />
    </Box>
);
