import { VStack } from '@chakra-ui/react';

import { CheckBoxToFilter } from '~/components/shared-components/CheckBox/CheckBoxToFilter';
import { FilterTitle } from '~/components/shared-components/Text/Title/FilterTitle';

interface Props {
    selected: string[];
    toggle: (value: string) => void;
    options: string[];
}

export const Sides = ({ selected, toggle, options }: Props) => (
    <VStack w='100%' align='start'>
        <FilterTitle title='Тип гарнира' />

        {options.map((opt) => (
            <CheckBoxToFilter
                key={opt}
                index={0}
                item={opt}
                isChecked={selected.includes(opt)}
                toggleItem={toggle}
                px={0}
                labelColor='#000'
            />
        ))}
    </VStack>
);
