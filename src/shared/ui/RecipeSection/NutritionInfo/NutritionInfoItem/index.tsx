import { Flex, Text } from '@chakra-ui/react';

import { BORDERS } from '~/shared/constants/styles';

type Props = {
    name: string;
    value: number;
    measures: string;
};

export const NutritionInfoItem = ({ name, value, measures }: Props) => (
    <Flex
        h={{ md: '136px' }}
        w={{ base: '100%', md: '25%' }}
        px={3}
        borderRadius='16px'
        border={BORDERS.light}
        alignItems='center'
        minH={16}
        direction={{ md: 'column' }}
        justifyContent='space-between'
        py={{ md: 4 }}
    >
        <Text flex={{ base: '1 1 118px', md: 'unset' }} fontSize='14px' textColor='blackAlpha.600'>
            {name}
        </Text>
        <Text
            flex={{ base: '1 1 118px', md: 'unset' }}
            textAlign='center'
            fontSize={{ base: '24px', md: '36px' }}
            fontWeight={500}
            color='lime.800'
        >
            {value}
        </Text>
        <Text
            flex={{ base: '1 1 60px', md: 'unset' }}
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={600}
            color='blackAlpha.900'
        >
            {measures}
        </Text>
    </Flex>
);
