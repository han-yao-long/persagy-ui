module.exports = {
    //base: '/bar',
    title: 'persagy-ui',
    description: '博锐尚格ui组件使用文档',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    port: 9000,
    dest: './docs/dist',
    evergreen: true,
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/guide/' },
            { text: '博锐尚格', link: 'http://www.persagy.com' },
        ],
        //sidebarDepth: 2,
        sidebar: [
            '/guide/',
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/guide/badge/',
                    '/guide/button/',
                    '/guide/breadcrumb/',
                    '/guide/divider/',
                    '/guide/drawer/',
                    '/guide/dropdown/',
                    '/guide/dropGroup/',
                    '/guide/headers/',
                    '/guide/message/',
                    '/guide/modal/',
                    '/guide/select/',
                    '/guide/shake/',
                    '/guide/stick/',
                    '/guide/tabs/',
                    '/guide/toggle/',
                    '/guide/tree/',
                ]
            },
        ]
    }
};
