import { TagProps } from '@chakra-ui/icons';
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type FilterTagProps = {
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    testId?: boolean;
    tagProps?: TagProps;
};

export const TagFilter = ({ item, onClick, testId = false, tagProps = {} }: FilterTagProps) => (
    <Tag
        data-test-id={testId ? 'filter-tag' : undefined}
        size='lg'
        variant='solid'
        color='lime.700'
        bgColor='lime.100'
        borderColor='lime.400'
        mr={2}
        mb={2}
        {...tagProps}
    >
        <TagLabel>{item}</TagLabel>
        <TagCloseButton onClick={onClick} />
    </Tag>
);
