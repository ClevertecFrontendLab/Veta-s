import { Flex } from '@chakra-ui/react';

import { TextRegular } from '~/components/shared-components';

type Props = {
    title: string;
    count: string | number;
    measureUnit: string;
    isGrayed: boolean;
    index: number;
};

export const IngridientItem = ({ title, count, isGrayed, measureUnit, index }: Props) => (
    <Flex
        justifyContent='space-between'
        w='100%'
        bg={isGrayed ? 'unset' : 'blackAlpha.100'}
        pl={{ base: 2, md: 6 }}
        pr={{ base: 3, md: 6 }}
        h={{ base: 10, xl: '52px' }}
        alignItems='center'
    >
        <Flex>
            <TextRegular regTextFw={500} regTextColor='blackAlpha.900' regText={title} />
        </Flex>
        <Flex>
            <TextRegular
                regTextDataId={index}
                regText={count || ''}
                regTextColor='blackAlpha.900'
            />
            &nbsp; {/*неразрывный пробел*/}
            <TextRegular regText={measureUnit} regTextColor='blackAlpha.900' />
        </Flex>
    </Flex>
);
