import { Button, ButtonProps, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';
import { LinkProps } from 'react-router';

interface ButtonViewMoreProps extends ButtonProps {
    title: string;
    noButtonIcon?: boolean;
    fz?: ResponsiveValue<string | number>;
    to?: LinkProps['to'];
}

export const ButtonViewMore: React.FC<ButtonViewMoreProps> = ({
    title,
    noButtonIcon = true,
    fz,
    ...rest
}) => (
    <Button
        {...rest}
        bg='lime.300'
        color='black'
        borderRadius='6px'
        px={4}
        py={2}
        rightIcon={
            noButtonIcon ? undefined : (
                <Image src='/icons/arrow-right.svg' alt='arrow right' boxSize={4} mt={1} />
            )
        }
        _hover={{
            bg: 'lime.50',
        }}
        _active={{
            bg: 'lime.50',
        }}
        fontSize={fz}
    >
        {title}
    </Button>
);
