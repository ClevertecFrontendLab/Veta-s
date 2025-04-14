import { Button, Image } from '@chakra-ui/react';

type SliderButtonsProps = {
    controlsSize?: number;
    icon?: string;
    controlCallback?: () => void;
};

const arrowLeftStyle = {
    position: 'absolute',
    top: 'calc((100% - 48px) / 2)',
    left: '-8px',
    '& .chakra-button__icon': {
        marginInlineEnd: 0,
    },
};

const arrowRightStyle = { ...arrowLeftStyle, right: '-8px', left: 'initial' };

export const SliderLeftButton = ({
    controlCallback,
    controlsSize = 12,
    icon = '/icons/slider-arrow.svg',
}: SliderButtonsProps) => (
    <Button
        display={{ base: 'none', xl: 'flex' }}
        sx={arrowLeftStyle}
        boxSize={controlsSize}
        onClick={controlCallback}
        leftIcon={<Image src={icon} alt='left arrow' boxSize={controlsSize} />}
    />
);

export const SliderRightButton = ({
    controlCallback,
    controlsSize = 12,
    icon = '/icons/slider-arrow.svg',
}: SliderButtonsProps) => (
    <Button
        display={{ base: 'none', xl: 'flex' }}
        sx={arrowRightStyle}
        boxSize={controlsSize}
        onClick={controlCallback}
        leftIcon={
            <Image transform='rotateY(180deg)' src={icon} alt='left arrow' boxSize={controlsSize} />
        }
    />
);
