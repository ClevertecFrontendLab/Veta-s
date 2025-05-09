import { Text } from '@chakra-ui/react';

type Props = {
    title: string;
};

export const FilterTitle = ({ title = '' }: Props) => (
    <Text fontWeight={500} fontSize='16px' lineHeight='24px' color='#000' fontFamily='Inter'>
        {title}:
    </Text>
);
