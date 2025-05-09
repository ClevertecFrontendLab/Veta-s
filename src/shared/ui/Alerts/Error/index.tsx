import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';

import { TEST_IDS } from '~/shared/constants';
import { ServerErrorAlertProps } from '~/shared/types';

export const ServerErrorAlert = ({
    onClose,
    title = 'Ошибка сервера',
    body = 'Попробуйте поискать снова попозже',
}: ServerErrorAlertProps) => (
    <Alert
        data-test-id={TEST_IDS.alert}
        fontFamily='Inter'
        bg='red.500'
        status='error'
        variant='solid'
        borderRadius='md'
        position='fixed'
        w={{ base: '328px', xl: '400px' }}
        h='72px'
        left='50%'
        transform='translateX(-50%)'
        bottom={{ base: '100px', xl: '80px' }}
        zIndex={100}
    >
        <AlertIcon boxSize='24px' mr={3} />
        <Box flex='1'>
            <AlertTitle fontWeight={700}>{title}</AlertTitle>
            <AlertDescription display='block' fontWeight={400}>
                {body}
            </AlertDescription>
        </Box>
        {onClose && (
            <CloseButton
                data-test-id={TEST_IDS.alertCloseButton}
                position='absolute'
                right='8px'
                top='8px'
                onClick={onClose}
                color='white'
                _hover={{ bg: 'transparent' }}
            />
        )}
    </Alert>
);
