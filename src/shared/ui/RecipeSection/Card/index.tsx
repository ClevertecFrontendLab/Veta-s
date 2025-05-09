import { RecipeProps } from 'src/shared/types';

import { RecipeCard } from '~/shared/ui';

type Props = {
    recipe: RecipeProps;
};

export const RecipeSectionCard = ({ recipe }: Props) => {
    const { title, description, image, category, time, bookmarks, likes } = recipe;

    return (
        <RecipeCard
            minWidth='auto'
            imageWidth={{ base: '100%', md: 232, xl: 353, '2xl': 553 }}
            imageHeight={{ base: 224, md: 'auto', xl: 410 }}
            wrap={{ base: 'wrap', md: 'nowrap' }}
            title={title}
            titleMargin={{ base: 4, xl: 6 }}
            text={description}
            imageSrc={image}
            categories={category}
            bookmarkMarginTop={{ base: 4, md: 'unset' }}
            titleTextFz={{ base: '24px', xl: '48px' }}
            titleTextLh={{ md: '32px', xl: '48px' }}
            titleTextFw={700}
            titleTextAlign='left'
            categoryBg='lime.50'
            imageFit='cover'
            bookmarksOrder={{ base: -1 }}
            bookmarkMb={8}
            bookmarksBookmarksValue={bookmarks}
            bookmarksLikesValue={likes}
            bookmarksFlexDirection={{ base: 'column', md: 'row' }}
            bookmarkWrap={{ base: 'nowrap', md: 'wrap' }}
            stateIconSize={3.5}
            stateTextFontSize='14px'
            bookBtnText='Оценить рецепт'
            bookBtnIconUrl='/icons/bookmarks/emoji-heart-eyes.svg'
            bookBtnTextDisplay={{ base: 'initial' }}
            bookBtnSize={{ base: '132px', xl: 'unset' }}
            coockingButtonText='Сохранить в закладки'
            coockingButtonBg='lime.400'
            coockingButtonTextColor='#000'
            coockingButtonIconUrl='/icons/bookmarks/heart.svg'
            noTimeButton={false}
            timeBtnText={time}
            cardBorder='none'
            cardContentPadding={{
                base: 0,
                md: '0 0 0 16px',
                xl: '0 0 0 24px',
            }}
            cardHeaderHeight='unset'
            regTextNoOfLines={{ md: 2, xl: 3 }}
            recipeButtonsSectionDirection={{ base: 'column', md: 'row' }}
            timeBtnMarginBottom={{ base: 3, md: 'unset' }}
            bookBtnIconMarginInlineEnd={2}
            noHoverEffect={true}
            recipeButtonsSize={{ base: 'xs', xl: 'sm', '2xl': 'lg' }}
        />
    );
};
