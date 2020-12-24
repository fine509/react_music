import React, { memo } from 'react'

import FooterStyle from './style.module.scss'

export default memo(function MHAppFooter() {
    return (
        <div className={FooterStyle["box"]}>
           <h2>我是底部</h2>
        </div>
    )
})
