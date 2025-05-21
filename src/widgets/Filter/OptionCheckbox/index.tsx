import { Box } from '@chakra-ui/react';

import { CheckBoxLime } from '~/shared/ui';
import { FilterTitle } from '~/widgets/Filter/FilterTitle';

type Props = {
    title: string;
    options: string[];
    selectedOptions: string[];
    toggleOption: (option: string) => void;
    dataTestPrefix?: string;
};

export const OptionCheckbox = ({
    title,
    options,
    selectedOptions,
    toggleOption,
    dataTestPrefix,
}: Props) => (
    <Box mt={4} w='100%'>
        <FilterTitle title={title} />
        {options.map((option, index) => (
            <CheckBoxLime
                dataTestCategory={
                    dataTestPrefix
                        ? `checkbox-${dataTestPrefix}-${option.toLowerCase()}`
                        : undefined
                }
                labelColor='#000'
                px={0}
                key={index}
                index={0}
                item={option}
                isChecked={selectedOptions.includes(option)}
                toggleItem={() => toggleOption(option)}
            />
        ))}
    </Box>
);
