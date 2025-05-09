import { Flex, VStack } from '@chakra-ui/react';
import { CoockingSteps } from 'src/shared/types';

import { SubtitleText } from '../../index';
import { CookingStep } from './Step';

type Props = {
    steps: CoockingSteps[];
};

export const CookingSteps = ({ steps }: Props) => (
    <Flex gap={5} direction='column' w='100%'>
        <SubtitleText
            titleTextLh={{ base: '32px', xl: '48px' }}
            titleTextFz={{ base: '24px', xl: '48px' }}
            titleTextAlign='left'
            titleText='Шаги приготовления'
        />
        <VStack gap={{ base: 5 }}>
            {steps.map((step, index) => (
                <CookingStep
                    key={index}
                    stepNumber={step.stepNumber}
                    description={step.description}
                    image={step.image}
                    isLastStep={index === steps.length - 1}
                />
            ))}
        </VStack>
    </Flex>
);
