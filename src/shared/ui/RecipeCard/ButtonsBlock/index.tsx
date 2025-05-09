import { Button, Flex, HStack, Image } from '@chakra-ui/react';

import { RecipeButtonsSectionProps } from '~/shared/types';
import { ButtonbookBtn, ButtonTimeBtn } from '~/shared/ui';

export const RecipeButtonsSection = ({
    coockingButtonText = 'Готовить',
    actionButtonVariant = 'solid',
    coockingButtonAs,
    coockingButtonRoute,
    coockingButtonBg = 'blackAlpha.900',
    coockingButtonTextColor = '#fff',
    coockingButtonIconUrl = '',
    coockingButtonIconSize = 4,
    noTimeButton = true,
    recipeButtonsSectionDirection,
    recipeButtonsSize = { base: 'xs', xl: 'sm' },
    coockingButtonDataId,
    ...props
}: RecipeButtonsSectionProps) => (
    <Flex
        justifyContent='space-between'
        width={!noTimeButton ? '100%' : 'unset'}
        direction={recipeButtonsSectionDirection}
    >
        {!noTimeButton && <ButtonTimeBtn {...props} />}
        <HStack wrap='wrap' gap={3}>
            <ButtonbookBtn {...props} recipeButtonsSize={recipeButtonsSize} />
            <Button
                data-test-id={`card-link-${coockingButtonDataId}`}
                bg={coockingButtonBg}
                as={coockingButtonAs}
                to={coockingButtonRoute}
                variant={actionButtonVariant}
                color={coockingButtonTextColor}
                size={recipeButtonsSize}
                leftIcon={
                    coockingButtonIconUrl ? (
                        <Image
                            src={coockingButtonIconUrl}
                            alt={coockingButtonText}
                            boxSize={coockingButtonIconSize}
                        />
                    ) : undefined
                }
            >
                {coockingButtonText}
            </Button>
        </HStack>
    </Flex>
);
