import { Checkbox } from '@chakra-ui/react';
import { CheckBoxLimeProps } from 'src/shared/types';

import { BORDERS } from '~/shared/constants/styles';

export const CheckBoxLime = ({
    index,
    item,
    isChecked = false,
    toggleItem,
    dataTestIds = '',
    dataTestCheckBoKeykey = '',
    dataTestCategory = '',
    px = 4,
    labelColor = 'blackAlpha.800',
}: CheckBoxLimeProps) => (
    <Checkbox
        data-test-id={
            dataTestCheckBoKeykey && !dataTestCategory
                ? `${dataTestCheckBoKeykey}${dataTestIds}`
                : dataTestCategory
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
                border: BORDERS.lime,

                _hover: {
                    borderRadius: '2px',
                    border: BORDERS.lime,
                },
            },
            '.chakra-checkbox__control[data-checked]': {
                w: '12px',
                h: '12px',
                bg: 'lime.400',
                borderRadius: '2px',
                border: BORDERS.lime,

                _hover: {
                    bg: 'lime.400',
                    borderRadius: '2px',
                    border: BORDERS.lime,
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
        key={index}
        isChecked={isChecked}
        onChange={() => toggleItem(item)}
    >
        {item}
    </Checkbox>
);
