import { BlogProps } from '~/shared/types';

export const blogsData: BlogProps[] = [
    {
        id: 1,
        name: 'Елена Высоцкая',
        email: '@elenadvor',
        profilePic: '/avatars/avatar-1.png',
        quote: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время...',
    },
    {
        id: 2,
        name: 'Alex Cook',
        email: '@funtasticcooking',
        profilePic: '/avatars/avatar-3.png',
        quote: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время...',
    },
    {
        id: 3,
        name: 'Екатерина Константинова',
        email: '@bake_and_pie',
        profilePic: '/avatars/avatar-2.png',
        quote: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время...',
    },
];

export const bottomMenuProps = [
    {
        name: 'Главная',
        iconUrl: '/icons/bottom-menu/home.svg',
        route: '',
        isActive: true,
    },
    {
        name: 'Поиск',
        iconUrl: '/icons/bottom-menu/lense.svg',
        route: '',
        isActive: false,
    },
    {
        name: 'Записать',
        iconUrl: '/icons/bottom-menu/pen.svg',
        route: '',
        isActive: false,
    },
    {
        name: 'Мой профиль',
        iconUrl: '/avatars/avatar-4.png',
        route: '',
        isActive: false,
    },
];
