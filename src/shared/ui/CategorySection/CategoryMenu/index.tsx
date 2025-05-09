import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { CategoryMenuProps } from 'src/shared/types';

import { BORDERS } from '~/shared/constants/styles';

export const CategoryMenu = ({ list, activeSubcategory }: CategoryMenuProps) => {
    const activeIndex = list.findIndex((item) => item.categoryEn === activeSubcategory);
    const selectedIndex = activeIndex !== -1 ? activeIndex : 0;
    const tabListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tabListRef.current) {
            const activeTab = tabListRef.current.children[selectedIndex] as HTMLElement;
            if (activeTab) {
                activeTab.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest',
                });
            }
        }
    }, [selectedIndex]);

    return (
        <Tabs variant='unstyled' index={selectedIndex}>
            <TabList
                ref={tabListRef}
                borderBottom={BORDERS.light}
                mb={6}
                display='flex'
                overflowX='auto'
                whiteSpace='nowrap'
                flexWrap={{ base: 'unset', md: 'wrap' }}
                justifyContent={{ base: 'unset', md: 'center' }}
                css={{
                    scrollbarWidth: 'none',
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {list.map((item, index) => (
                    <Tab
                        outline='none'
                        key={index}
                        as={Link}
                        to={item.route}
                        fontSize={{ base: 'sm', xl: 'md' }}
                        border='none'
                        borderRadius='none'
                        bg='none'
                        _selected={{
                            color: 'lime.600',
                            borderBottom: '2px solid',
                            borderColor: 'lime.600',
                            boxShadow: 'none',
                        }}
                        _hover={{ bg: 'none' }}
                        _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                        data-test-id={`tab-${item.categoryEn}-${index}`}
                    >
                        {item.categoryRu}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};
