// import React from 'react'
// import {BrowserRouter} from 'react-router-dom'
// import RenderRoutes from './routerRender'
// import routes from './routes'
// function BaseRouter(){
//     return <BrowserRouter>
//         <React.Suspense fallback={<div>loading....</div>}>
//         <RenderRoutes redirect={{to:'/',jump:'/discover'}} routes={routes}></RenderRoutes>
//         </React.Suspense>
//     </BrowserRouter>
// }

// export default BaseRouter

import React, { memo } from 'react'

export default memo(function index() {
    return (
        <div>
            
        </div>
    )
})
