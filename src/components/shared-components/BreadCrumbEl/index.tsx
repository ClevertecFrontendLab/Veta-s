import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router';

import { getNavBranches } from '~/data/navigationConfig';

type Props = {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const BreadCrumbEl = ({ onClick }: Props) => {
    const { pathname } = useLocation();
    const pathes = getNavBranches(pathname);

    return (
        <Breadcrumb
            onClick={onClick}
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
            sx={{
                '& ol': { flexWrap: 'wrap' },
                '& li': {
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                },
            }}
        >
            {pathes.map((path, index) => {
                const isLast = index === pathes.length - 1;
                return (
                    <BreadcrumbItem key={index}>
                        {isLast ? (
                            <span style={{ color: 'black' }}>{path?.title}</span>
                        ) : (
                            <BreadcrumbLink as={Link} to={path?.route} color='blackAlpha.700'>
                                {path?.title}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
