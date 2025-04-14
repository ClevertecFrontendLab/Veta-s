import { Button, HStack } from '@chakra-ui/react';

import { ButtonbookBtn, ButtonBookBtnProps } from '../../Buttons';

export interface RecieptButtonsSectionProps extends ButtonBookBtnProps {
    coockingButtonText?: string;
    actionButtonVariant?: string;
}

export const RecieptButtonsSection = ({
    coockingButtonText = 'Готовить',
    actionButtonVariant = 'solid',
    ...props
}: RecieptButtonsSectionProps) => (
    <HStack wrap='wrap' gap={3}>
        <ButtonbookBtn {...props} />
        <Button
            variant={actionButtonVariant}
            bg='blackAlpha.900'
            color='#fff'
            size={{ base: 'xs', xl: 'sm' }}
        >
            {coockingButtonText}
        </Button>
    </HStack>
);
