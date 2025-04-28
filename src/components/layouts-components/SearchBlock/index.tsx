import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDrawer } from '~/app/providers/DrawerFilter';
import { AllergensFilter } from '~/components/layouts-components/FilterBar/components/AllergensFilter';
import {
    resetSearch,
    searchReciepts,
} from '~/components/layouts-components/FilterBar/reducers/recipesReducer';
import { TextRegular, TitleText } from '~/components/shared-components';
import { CastomSwitch } from '~/components/shared-components/Switch';
import { routeFinder } from '~/data/navigationConfig';
import { usePathnames } from '~/hooks/usePathnames';
import { ApplicationState } from '~/store/configure-store';
import { BORDERS, SHADOWS } from '~/style/styles';

export const isEmptySearch = (state: ApplicationState) => state.recipes.isEmptySearch;

export const SearchBlock = () => {
    // Открытие дровера
    const { openDrawer } = useDrawer();
    // Массив сегментов текущего URL
    const pathnames = usePathnames();
    const dispatch = useDispatch();
    // Флаг «плохого» (пустого) поиска из стора
    const isBadRequest = useSelector(isEmptySearch);
    // Находим объект категории в нашей навигации по первому или второму сегменту URL
    const activeCategory = routeFinder(pathnames.length > 1 ? pathnames[1] : pathnames[0]);
    // Заголовок (subTitle или title) для вывода над полем поиска
    const title = activeCategory?.subTitle || activeCategory?.title;
    // Состояние для переключателя «исключить аллергены»
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);
    // Список выбранных аллергенов
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    // Значение инпута поиска
    const [inputValue, setInputValue] = useState('');
    // Поле активно, только если введено ≥3 непустых символа
    const isEnabled = inputValue.trim().length >= 3;
    // Общие стили бордера для Input в разных состояниях
    const inputStyles = {
        border:
            isBadRequest === false
                ? '1px solid green'
                : isBadRequest
                  ? '1px solid red'
                  : BORDERS.main,
        boxShadow: 'none',
    };

    // Переключаем режим исключения аллергенов
    const handleExcludeAllergens = () => {
        if (isExcludeAllergens && selectedAllergens.length) {
            setSelectedAllergens([]);
            setIsExcludeAllergens(false);
        } else {
            setIsExcludeAllergens(true);
        }
    };
    // Обновляем значение в инпуте
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    // Поиск по нажатию кнопки «Поиск»
    const handleSearch = () => {
        if (isEnabled) {
            dispatch(searchReciepts(inputValue));
        }
    };
    // Сброс поиска
    const handleReset = () => {
        dispatch(resetSearch());
        setInputValue('');
    };
    // Поиск по Enter
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (isEnabled && e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Flex
            direction='column'
            // px={{ base: 0, md: 4, xl: WIDTHS.sideMenu }}
            _focusWithin={{
                boxShadow: SHADOWS.searchBlock,
                borderRadius: '0 0 8px 8px',
            }}
            pb={{ base: 4, xl: 8 }}
            w={{ base: '100%', md: '480px', xl: 898 }}
            mx='auto'
            mb={{ base: 4, '2xl': 6 }}
            ml={{ base: -4, md: 'auto' }}
            gap={{ base: 4, xl: 8 }}
        >
            <Box>
                <TitleText
                    titleText={title}
                    titleTextFz={{ base: '2xl', xl: '5xl' }}
                    titleTextLh={{ base: '2xl', xl: '5xl' }}
                />

                {/* Описание категории, если есть */}
                {activeCategory?.description && (
                    <Flex
                        maxW={{ xl: 696 }}
                        m='0 auto'
                        mt={{ base: 4, xl: 3 }}
                        px={{ base: 4, md: 'unset' }}
                        textAlign='center'
                    >
                        <TextRegular
                            regTextFz={{ base: '14px', xl: '16px' }}
                            regTextAlign='center'
                            regTextNoOfLines={4}
                            regText={activeCategory.description}
                            regTextColor='blackAlpha.600'
                        />
                    </Flex>
                )}
            </Box>
            {/* Поле поиска и кнопка фильтров */}
            <Flex mx='auto' minW={{ base: 328, md: 448, xl: 518 }} direction='column'>
                <Flex>
                    <InputGroup display='flex' alignItems='center' mb={4}>
                        {/* Кнопка открытия фильтров */}
                        <InputLeftElement position='initial' display='flex' mr={3}>
                            <IconButton
                                data-test-id='filter-button'
                                onClick={openDrawer}
                                icon={
                                    <Image
                                        src='/icons/filter.svg'
                                        alt='filter'
                                        w={{ base: 3.5, xl: 6 }}
                                    />
                                }
                                aria-label='Filter'
                                variant='ghost'
                                border={BORDERS.main}
                                boxSize={{ base: 8, xl: 12 }}
                                _hover={{ bg: 'lime.50' }}
                                sx={{ '& .chakra-button__icon': { marginInlineEnd: 0 } }}
                            />
                        </InputLeftElement>

                        {/* Текстовый инпут */}
                        <Input
                            data-test-id='search-input'
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            borderRadius={6}
                            border={
                                isBadRequest === false
                                    ? '1px solid green'
                                    : isBadRequest
                                      ? '1px solid red'
                                      : BORDERS.main
                            }
                            _hover={inputStyles}
                            _focus={inputStyles}
                            _active={inputStyles}
                            placeholder='Название или ингредиент...'
                            size={{ base: 'sm', xl: 'lg' }}
                            _placeholder={{ color: '#134B00' }}
                            pl={3}
                            display='flex'
                            position='relative'
                            boxShadow={0}
                            outline='none'
                        />

                        {/* Кнопка «Поиск» и крестик очистки */}
                        <InputRightElement display='flex'>
                            <IconButton
                                data-test-id='search-button'
                                onClick={handleSearch}
                                disabled={!isEnabled}
                                pointerEvents={isEnabled ? 'unset' : 'none'}
                                icon={<SearchIcon w={{ base: 3.5, xl: 6 }} />}
                                aria-label='Search'
                                variant='ghost'
                                boxSize={{ base: 8, xl: 12 }}
                                minW={{ base: 8, xl: 12 }}
                                pt={{ base: 0, xl: 2 }}
                                _hover={{ bg: 0 }}
                            />
                            {inputValue && (
                                <Box
                                    as='button'
                                    position='absolute'
                                    top={2.5}
                                    right={10}
                                    fontSize='14px'
                                    cursor='pointer'
                                    onClick={handleReset}
                                >
                                    ✕
                                </Box>
                            )}
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                {/* Аллергены (только на больших экранах) */}
                <Flex
                    mt={{ xl: 4 }}
                    alignItems='center'
                    justifyContent='space-between'
                    display={{ base: 'none', xl: 'flex' }}
                >
                    <CastomSwitch
                        text='Исключить аллергены'
                        onChange={handleExcludeAllergens}
                        isChecked={isExcludeAllergens}
                        dataTestId='allergens-switcher'
                    />

                    <AllergensFilter
                        dataTestKey='allergen-'
                        dataTestId='allergens-menu-button'
                        selectedAllergens={selectedAllergens}
                        setSelectedAllergens={setSelectedAllergens}
                        disabled={!isExcludeAllergens}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
