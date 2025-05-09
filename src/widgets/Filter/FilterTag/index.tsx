import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { FilterTagProps } from 'src/shared/types';

import { TEST_IDS } from '~/shared/constants';

export const FilterTag = ({ item, onClick, testId = false }: FilterTagProps) => (
    <Tag
        data-test-id={testId ? TEST_IDS.filtersTag : ''}
        size='lg'
        variant='solid'
        color='lime.700'
        bgColor='lime.100'
        borderColor='lime.400'
        mr={2}
        mb={2}
    >
        <TagLabel>{item}</TagLabel>
        <TagCloseButton onClick={onClick} />
    </Tag>
);
