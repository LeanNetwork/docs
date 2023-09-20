module.exports = {
    title: '你好，程序员小奇',
    description: 'Just playing around',
    base: '/docs/',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            // { text: '开发笔记', link: '/guide/' },
            {
                text: '开发笔记',
                ariaLabel: 'dev notes',
                items: [
                  { text: 'javascript', link: '/notes/js' },
                  { text: 'java', link: '/notes/java/' }
                ]
            },            
            { text: '插件', link: '/foo/' },
            // {
            //     text: '安装',
            //     ariaLabel: 'install',
            //     items: [
            //       { text: '子菜单1', link: '/foo/one/' },
            //       { text: '子菜单2', link: '/bar/one/' }
            //     ]
            // },
            // { text: 'External', link: 'https://google.com' },
        ],
        // 这种方式只支持一种侧边栏，页面可以选择用或者不用
        // sidebar: [
        //     ['/guide/', '教程'],
        //     ['/guide/', '教程2'],
        // ]
        sidebar: {
            '/foo/': [
                ['', "官方插件"],     /* /foo/ */
                ['one', "自定义插件"],  /* /foo/one.html */
            ],
    
            '/bar/': [
                {
                    title: '组名',   // 必要的
                    // 如果配置了则可跳转，不配置则组名不可跳转
                    // path: '/bar/one/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        'one',
                        'two',
                        // 首页
                        // '/',
                    ]
                },
                {
                    title: '组名2',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [ 
                        'one',
                    ],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                }
            ],
    
            // fallback
            '/': [
                // [''],        /* / */
                // 这个地方一配置就404，不知道为啥
                // 'guide'    /* /about.html */
            ]
        }
    }
}