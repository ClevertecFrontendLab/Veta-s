import { Button, Image } from '@chakra-ui/react';

type Props = {
    controlsSize?: number;
    icon?: string;
};

export const SliderLeftButton = ({
    controlsSize = 12,
    icon = '/icons/slider-arrow.svg',
}: Props) => (
    <Button
        display={{ base: 'none', xl: 'flex' }}
        sx={{
            '& .chakra-button__icon': {
                marginInlineEnd: 0,
            },
        }}
        boxSize={controlsSize}
        leftIcon={<Image src={icon} alt='left arrow' boxSize={controlsSize} />}
    />
);

export const SliderRightButton = ({
    controlsSize = 12,
    icon = '/icons/slider-arrow.svg',
}: Props) => (
    <Button
        display={{ base: 'none', xl: 'flex' }}
        sx={{
            '& .chakra-button__icon': {
                marginInlineEnd: 0,
            },
        }}
        boxSize={controlsSize}
        leftIcon={
            <Image transform='rotateY(180deg)' src={icon} alt='left arrow' boxSize={controlsSize} />
        }
    />
);
