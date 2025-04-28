import { HStack } from '@chakra-ui/react';

import { TagFilter } from '~/components/layouts-components/FilterBar/components/Tags/TagFilter';

type Tag = {
    value: string;
    onRemove: (value: string) => void;
};

type Props = {
    lists: Record<string, Tag[]>;
};

export const Tags = ({ lists }: Props) => (
    <HStack wrap='wrap' w='100%'>
        {Object.values(lists)
            .flat()
            .map((tag) => (
                <TagFilter
                    key={tag.value}
                    item={tag.value}
                    onClick={() => tag.onRemove(tag.value)}
                    testId
                />
            ))}
    </HStack>
);
