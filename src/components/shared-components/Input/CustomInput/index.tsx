import { Flex, FlexProps, Image, ImageProps, Input, InputProps } from '@chakra-ui/react';
import { ChangeEventHandler, KeyboardEvent, MouseEvent } from 'react';

interface Props {
    item: string;
    itemChange: ChangeEventHandler<HTMLInputElement>;
    addItem: (e: MouseEvent<HTMLImageElement> | KeyboardEvent<HTMLInputElement>) => void;
    dataTestInputId?: string;
    dataTestButtonId?: string;
    containerProps?: FlexProps;
    inputProps?: InputProps;
    buttonProps?: ImageProps;
}

export const CustomInput = ({
    item,
    itemChange,
    addItem,
    dataTestInputId,
    dataTestButtonId,
    containerProps = {},
    inputProps = {},
    buttonProps = {},
}: Props) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItem(e);
        }
    };

    return (
        <Flex pt={2} pl={2} alignItems='center' {...containerProps}>
            <Input
                data-test-id={dataTestInputId}
                placeholder='Другой аллерген'
                value={item}
                onChange={itemChange}
                onKeyDown={handleKeyDown}
                mr={2}
                {...inputProps}
            />
            <Image
                data-test-id={dataTestButtonId}
                onClick={addItem}
                cursor='pointer'
                mx={3.5}
                src='/icons/allergen-plus.svg'
                {...buttonProps}
            />
        </Flex>
    );
};
