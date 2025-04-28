import { Checkbox } from '@chakra-ui/react';

import { BORDERS } from '~/style/styles';

type Props = {
    index: number;
    item: string;
    isChecked?: boolean;
    toggleItem: (value: string) => void;
    dataTestId?: string | number;
    dataTestKey?: string;
    dataTestCatagory?: string;
    px?: number;
    labelColor?: string;
};

export const CheckBoxToFilter = ({
    index,
    item,
    isChecked = false,
    toggleItem,
    dataTestId = '',
    dataTestKey = '',
    dataTestCatagory = '',
    px = 4,
    labelColor = 'blackAlpha.800',
}: Props) => (
    <Checkbox
        data-test-id={
            dataTestKey && !dataTestCatagory ? `${dataTestKey}${dataTestId}` : dataTestCatagory
        }
        px={px}
        h={8}
        w='100%'
        bg={index % 2 ? 'blackAlpha.100' : 'unset'}
        sx={{
            '.chakra-checkbox__control': {
                w: '12px',
                h: '12px',
                borderRadius: '2px',
                border: BORDERS.checkbox,
                _hover: {
                    borderRadius: '2px',
                    border: BORDERS.checkbox,
                },
            },
            '.chakra-checkbox__control[data-checked]': {
                w: '12px',
                h: '12px',
                bg: 'lime.400',
                borderRadius: '2px',
                border: BORDERS.checkbox,
                _hover: {
                    bg: 'lime.400',
                    borderRadius: '2px',
                    border: BORDERS.checkbox,
                },
                svg: {
                    w: '7px',
                    h: '6px',
                    color: '#000',
                },
            },
            '.chakra-checkbox__icon': {
                color: 'black',
                fontSize: '4px',
            },
            '.chakra-checkbox__label': {
                color: labelColor,
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: 'Inter',
            },
        }}
        //?
        //key={index}
        isChecked={isChecked}
        onChange={() => toggleItem(item)}
    >
        {item}
    </Checkbox>
);
