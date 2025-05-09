import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

import { getcurrentLocationState } from '~/redux/selectors';
import { TEST_IDS } from '~/shared/constants';

type Props = {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const BreadCrump = ({ onClick }: Props) => {
    const location = useSelector(getcurrentLocationState);

    const breadcrumbs = Object.entries(location);

    return (
        <Breadcrumb
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
            data-test-id={TEST_IDS.breadcrumbs}
            sx={{
                '& ol': {
                    flexWrap: 'wrap',
                },
            }}
        >
            {breadcrumbs?.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const { label, route } = item[1];

                return (
                    <BreadcrumbItem key={index}>
                        {isLast ? (
                            <span style={{ color: 'black' }}>{label}</span>
                        ) : (
                            <BreadcrumbLink
                                onClick={onClick}
                                as={Link}
                                to={route}
                                color='blackAlpha.700'
                            >
                                {label}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
