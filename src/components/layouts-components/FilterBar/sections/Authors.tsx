import { VStack } from '@chakra-ui/react';

import { CheckBoxToFilter } from '~/components/shared-components/CheckBox/CheckBoxToFilter';
import { SelectAuthor } from '~/components/shared-components/Select/SelectAuthor';

interface Props {
    opened: boolean;
    onToggle: () => void;
    selected: string[];
    toggle: (v: string) => void;
    options: string[];
}

const AuthorSection = ({ opened, onToggle, selected, toggle, options }: Props) => (
    <VStack w='100%'>
        <SelectAuthor
            placeholder='Поиск по автору'
            isOpen={opened}
            toggleDropdown={onToggle}
            onReset={() => selected.forEach(toggle)}
            noResetButton={!selected.length}
        />
        {opened && (
            <VStack w='100%' align='start'>
                {options.map((opt) => (
                    <CheckBoxToFilter
                        key={opt}
                        index={0}
                        item={opt}
                        isChecked={selected.includes(opt)}
                        toggleItem={toggle}
                    />
                ))}
            </VStack>
        )}
    </VStack>
);

export default AuthorSection;
