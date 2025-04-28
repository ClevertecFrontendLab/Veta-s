import { Button, HStack, Image, VStack } from '@chakra-ui/react';

import { TextRegular } from '~/components/shared-components';
import { BORDERS } from '~/style/styles';

type Props = {
    stepNumber: number;
    description: string;
    image?: string;
    // если это последний шаг, кнопка будет подсвечена
    isLastStep?: boolean;
};

export const CookingStep = ({ stepNumber, description, image, isLastStep = false }: Props) => (
    <HStack w='100%' alignItems='flex-start' border={BORDERS.light} borderRadius='8px'>
        {image && (
            <Image
                maxWidth={{ base: '158px', xl: '346px' }}
                w={{ base: '158px', xl: '346px' }}
                minW={{ base: '158px', xl: '346px' }}
                maxH={{ base: '128px', xl: '244px' }}
                src={image}
                alt={`Cooking step ${stepNumber}`}
            />
        )}

        <VStack
            alignItems='flex-start'
            gap={{ base: 3, xl: 4 }}
            px={{ base: 2, xl: 6 }}
            pt={{ base: 2, xl: 5 }}
            pb={{ base: 1, xl: 5 }}
        >
            <Button
                bg={isLastStep ? 'lime.50' : 'blackAlpha.100'}
                size={{ base: 'xs' }}
                fontSize='14px'
                fontWeight={400}
                fontFamily='Inter'
                borderRadius='4px'
            >
                Шаг&nbsp;{stepNumber}
            </Button>

            <TextRegular regText={description} regTextNoOfLines={4} />
        </VStack>
    </HStack>
);
