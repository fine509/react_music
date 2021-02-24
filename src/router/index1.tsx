import React from 'react';

import { useNavigate,useLocation, Navigate, Routes, Route, useRoutes, Outlet, BrowserRouter } from 'react-router-dom';

import RouterRender from './routerRender1';
const App = React.lazy(() => import( '../App'))
const Discover = React.lazy(() => import(  '../views/discover/index'));
const Recommend = React.lazy(() =>import(  '../views/discover/discoveChild/recommend/index'));
const SongList = React.lazy(() =>import(  '../views/discover/discoveChild/seniority/index'))
const Broadcasting = React.lazy(() =>import(  '../views/discover/discoveChild/broadcasting/index'))
const Songer =  React.lazy(() =>import(  '../views/discover/discoveChild/songer/index'))
const Seniority =  React.lazy(() =>import(  '../views/discover/discoveChild/seniority/index'))
const NewSong =  React.lazy(() =>import(  '../views/discover/discoveChild/newSong/index'))
const Player = React.lazy(() => import(  '../views/player/index'))
const Mine = React.lazy(() => import('../views/friends/index'))
const Friend =  React.lazy(() => import('../views/mine/index'))
function BaseRouter() {
    const routes = useRoutes([
        {
            path:'login',
            element:<div>login</div>,
        },
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '',
                    element: <Navigate to='discover/recommend'/> //重定向
                },
                {
                    path: 'discover',
                    element: <Discover />,
                    children: [
                        {
                            path: 'recommend',
                            element: <Recommend />
                        },
                        {
                            path: 'seniority',
                            element: <Seniority/>
                        },
                        {
                            path: 'songList',
                            element: <SongList/>
                        },
                        {
                            path: 'broadcasting',
                            element:<Broadcasting/>
                        },
                        {
                            path: 'songer',
                            element: <Songer/>
                        },
                        {
                            path: 'newSong',
                            element: <NewSong/>
                        },
                        {
                            path: 'player',
                            element: <Player/>
                        }
                    ]
                },
                {
                    path: 'friends',
                    element: <Friend />
                },
              
                {
                    path: 'mine',
                    element: <Mine/>
                }
            ]
        },
        { path: '*', element: <div>123</div> }
    ]);
    return (
        <div>
            {routes}
        </div>
    );
}

export default BaseRouter;
