import { VStack } from '@chakra-ui/react';

import { CheckBoxToFilter } from '~/components/shared-components/CheckBox/CheckBoxToFilter';
import { SelectTags } from '~/components/shared-components/Select/SelectTags';
import { BORDERS, SHADOWS } from '~/style/styles';

interface Props {
    opened: boolean;
    onToggle: () => void;
    selected: string[];
    toggle: (v: string) => void;
    options: string[];
}

export const Categories = ({ opened, onToggle, selected, toggle, options }: Props) => (
    <VStack w='100%' pos='relative'>
        <SelectTags
            dataTestId='filter-menu-button-категория'
            //options={selected}
            toggleDropdown={onToggle}
            isOpen={opened}
            onReset={() => selected.forEach(toggle)}
            placeholder='Категория'
            noResetButton={!selected.length}
            //width="100%"
        />

        {opened && (
            <VStack
                align='start'
                w='100%'
                borderRadius='4px'
                boxShadow={SHADOWS.allergensMenu}
                border={BORDERS.light}
            >
                {options.map((opt) => (
                    <CheckBoxToFilter
                        key={opt}
                        //? -> 0
                        index={opt.indexOf(opt)}
                        item={opt}
                        isChecked={selected.includes(opt)}
                        toggleItem={toggle}
                    />
                ))}
            </VStack>
        )}
    </VStack>
);
