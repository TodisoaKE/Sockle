import { ISideBar } from "../models/sidebar.model";

export const SIDEBAR: ISideBar[] = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        url: '',
        children: []
    },
    {
        title: 'Components',
        icon: 'components',
        showSubLink: false,
        children: [
            {
                title: 'All Fields',
                icon: 'all-fields',
                url: '/components/all-fields',
                children: []
            },
            {
                title: 'Button',
                icon: 'button',
                url: '/components/buttons',
                children: []
            },
            {
                title: 'Card',
                icon: 'card',
                url: '/components/cards',
                children: []
            },
            {
                title: 'Table',
                icon: 'table',
                url: '/components/tables',
                children: []
            },
        ]
    },
    {
        title: 'Settings',
        icon: 'settings',
        url: '/settings',
        children: []
    },
    {
        title: 'Others',
        icon: 'others',
        showSubLink: false,
        children: [
            {
                title: 'Test',
                icon: 'test',
                url: '/others/test',
                children: []
            },
            {
                title: 'Ok',
                icon: 'test',
                url: '/others/test',
                children: []
            },
        ]
    }
]