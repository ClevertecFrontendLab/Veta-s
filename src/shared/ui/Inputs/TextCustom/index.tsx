import { Flex, Image, Input } from '@chakra-ui/react';
import React, { ChangeEventHandler } from 'react';

type Props = {
    item: string;
    itemChange: ChangeEventHandler<HTMLInputElement>;
    addItem: (
        e: React.MouseEvent<HTMLImageElement> | React.KeyboardEvent<HTMLInputElement>,
    ) => void;
    dataTestInputId?: string;
    dataTestButtonId?: string;
};

export const TextInputCustom = ({
    item,
    itemChange,
    addItem,
    dataTestInputId,
    dataTestButtonId,
}: Props) => (
    <Flex pt={2} pl={2} alignItems='center'>
        <Input
            data-test-id={dataTestInputId}
            placeholder='Другой аллерген'
            value={item}
            onChange={itemChange}
            onKeyDown={(e) => e.key === 'Enter' && addItem(e)}
            mr={2}
        />
        <Image
            data-test-id={dataTestButtonId}
            onClick={addItem}
            cursor='pointer'
            mx={3.5}
            src='/icons/allergen-plus.svg'
        />
    </Flex>
);
