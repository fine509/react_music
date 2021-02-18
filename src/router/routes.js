import React from 'react'
const routes = [
    {
        path: '/',
        key: 'root',
        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../App.jsx')),
        children: [
            {
                path: '/discover',
                key: 'discover',
                component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/index')),
                children: [
                    {
                        path: '/discover/recommend',
                        key: 'recommend',
                        exact:true,
                        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/discoveChild/broadcasting/index'))
                    },
                    {
                        path: '/discover/seniority',
                        key: 'seniority',
                        exact:true,
                        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/discoveChild/seniority/index'))
                    },
                    {
                        path: '/discover/songList',
                        key: 'songList',
                        exact:true,
                        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/discoveChild/songList/index'))
                    },
                    {
                        path: '/discover/broadcasting',
                        key: 'broadcasting',
                        exact:true,
                        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/discoveChild/broadcasting/index'))
                    },
                    {
                        path: '/discover/songer',
                        key: 'songer',
                        exact:true,
                        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/discoveChild/songer/index'))
                    },
                    {
                        path: '/discover/newSong',
                        key: 'newSong',
                        exact:true,
                        component: React.lazy(() => import(/* webpackChunkName: 'Layout' */ '../views/discover/discoveChild/newSong/index'))
                    },
                ]
            },
            {
                path:'/friends',
                key:'friends',
                exact:true,
                component: React.lazy(()=>import('../views/friends/index'))
            },
            {
                path:'/friends',
                key:'friends',
                exact:true,
                component: React.lazy(()=>import('../views/friends/index'))
            },
            {
                path:'/mine',
                key:'mine',
                exact:true,
                component: React.lazy(()=>import('../views/mine/index'))
            }
        ]
    }
];

export default routes;
