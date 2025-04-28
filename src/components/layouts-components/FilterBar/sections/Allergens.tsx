import { Box, Flex } from '@chakra-ui/react';

import { AllergensFilter } from '~/components/layouts-components/FilterBar/components/AllergensFilter';
import { CastomSwitch } from '~/components/shared-components/Switch';

interface Props {
    exclude: boolean;
    switchExclude: () => void;
    selected: string[];
    toggle: (v: string) => void;
}

export const Allergens = ({ exclude, switchExclude, selected, toggle }: Props) => (
    <Box w='100%'>
        <Flex wrap='wrap' gap={2} align='center'>
            <CastomSwitch
                text=' Исключить аллергены'
                onChange={switchExclude}
                isChecked={exclude}
                dataTestId='allergens-switcher-filter'
            />
            <AllergensFilter
                selectedAllergens={selected}
                setSelectedAllergens={(vals) => vals.forEach(toggle)}
                disabled={!exclude}
                dataTestId='allergens-menu-button-filter'
            />
        </Flex>
    </Box>
);
