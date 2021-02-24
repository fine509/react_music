import React from 'react'
import { useNavigate, Navigate, Routes, Route, useRoutes, Outlet, BrowserRouter } from 'react-router-dom'

const RouterRender:React.FC<{routes:any}> = (props) => {
    const {routes} = props

    return (routes)
}

export default RouterRender