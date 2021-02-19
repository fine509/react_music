import React, { memo,useState } from 'react'
import { observer } from 'mobx-react'
import { useMount } from 'react-use'
import {
    RightOutlined, LeftOutlined
} from '@ant-design/icons';
import cx from 'classnames'

import store from './store'
import { GETHOTABLUM } from '../types'
import { getSizeImg } from '../../../../../../utils/data_format'

import { AlbumWrapper } from './style'
import ThmemRecommend from '../../../../../../components/theme-header-recommend/index'
const Album: React.FC<{ store: any }> = observer((props) => {
    const { store } = props
    const [chooseactive, setchooseactive] = useState(true);
    //mobx
    useMount(() => {
        store.getHotAblum(GETHOTABLUM)
    })
    //业务逻辑
    const changeChoose=()=>{
        setchooseactive(!chooseactive)
    }
    return (
        <AlbumWrapper>
            <ThmemRecommend title="新碟上架" />
            <main className={cx("ablumCar",{"active":chooseactive},{"active2":!chooseactive})}>
                {store.Ablumdata && store.Ablumdata.map((item: any, index: any) => {
                    return <section key={index}>
                        <img src={getSizeImg(item.blurPicUrl, 100)} alt="" />
                        <p>{item.name}</p>
                        <p>{item.artist.name}</p>
                    </section>
                })}
                <RightOutlined className="rightNav" onClick={()=>{changeChoose()}}/>
                <LeftOutlined className="leftNav" onClick={()=>{changeChoose()}}/>
            </main>
        </AlbumWrapper>
    )
})

export default () => <Album store={store} />