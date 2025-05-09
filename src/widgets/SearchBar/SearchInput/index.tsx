import { Input } from '@chakra-ui/react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { SearchInputProps } from 'src/shared/types';

import { BORDERS } from '~/shared/constants/styles';

export const SearchInput = ({ onSearch }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const isEnabled = inputValue.trim().length >= 3;

    const handleSearch = () => {
        if (isEnabled) {
            onSearch(inputValue.trim());
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (isEnabled && e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Input
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            borderRadius={6}
            display='flex'
            border={BORDERS.main}
            pl={3}
            placeholder='Название или ингредиент...'
            size={{ base: 'sm', xl: 'lg' }}
            _placeholder={{ color: '#134B00' }}
            maxWidth='auto'
        />
    );
};
