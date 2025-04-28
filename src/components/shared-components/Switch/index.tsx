import { Switch, SwitchProps, Text, TextProps } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
    text?: string;
    dataTestId?: string;
    textProps?: TextProps;
    switchProps?: SwitchProps;
};

export const CastomSwitch = ({
    onChange,
    text,
    isChecked,
    dataTestId,
    textProps = {},
    switchProps = {},
}: Props) => (
    <>
        {text && (
            <Text fontSize='md' fontWeight={500} flexShrink={0} fontFamily='Inter' {...textProps}>
                {text}
            </Text>
        )}
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
            {...switchProps}
        />
    </>
);
