import { Flex, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar } from '~/components/layouts-components/SearchBar';
import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { navTree } from '~/configs/navigationConfig';
import { PADDINGS } from '~/constants/styles';
import { setEmptySearch } from '~/reducers';
import { getActiveSearch } from '~/selectors';
import { ApplicationState } from '~/store/configure-store';
import { searchByTitle } from '~/utils';

import { JuciestSection } from './juciest';

const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine');

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const initialData = useSelector((state: ApplicationState) => state.reciepts.initial);
    let data = useSelector((state: ApplicationState) => state.reciepts.filtrated);
    const activeSearch = useSelector(getActiveSearch);
    if (activeSearch) {
        data = searchByTitle(data, activeSearch);
        if (!data?.length) {
            dispatch(setEmptySearch(true));
        } else {
            dispatch(setEmptySearch(false));
        }
    }

    return (
        <PageWrapper>
            <SearchBar />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                    {data?.length ? (
                        <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                    ) : (
                        ''
                    )}
                    {data?.length ? <Slider activeSearch={activeSearch} slides={data} /> : ''}
                </Flex>
                {data?.length ? (
                    <JuciestSection
                        activeSearch={activeSearch}
                        data={data}
                        categoryTitle='Самое сочное'
                    />
                ) : (
                    ''
                )}
                <BlogsSection />
                <CategorySectionNext
                    title={nexSection?.title || ''}
                    description={nexSection?.description || ''}
                    data={initialData}
                />
            </VStack>
        </PageWrapper>
    );
};

export default HomePage;
