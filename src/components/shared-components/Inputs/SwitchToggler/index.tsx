import { Switch, Text } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

export const SwitchToggler: React.FC<{
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
    text?: string;
    dataTestId?: string;
}> = ({ onChange, text, isChecked, dataTestId }) => (
    <>
        <Text fontSize='md' fontWeight={500} flexShrink={0} fontFamily='Inter'>
            {text}
        </Text>
        <Switch
            data-test-id={dataTestId}
            pr={4}
            pl={3}
            _checked={{
                '& .chakra-switch__track': {
                    bg: 'lime.400',
                },
            }}
            isChecked={isChecked}
            onChange={onChange}
        />
    </>
);
