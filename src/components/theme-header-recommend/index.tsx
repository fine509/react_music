import React, { memo } from 'react'
import { HeaderWrapper } from './style'
interface IthemeProps {
    title:string
    keywords?:Array<string>
}
const ThmemRecommend: React.FC<IthemeProps> = memo((props) => {
    const {title, keywords = []} = props
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords?.length && (
                            keywords.map(item=>{
                                return <div className="item" key={item}>
                                    <a href="todo">{item}</a>
                                    <span className="divider">|</span>
                                </div>
                            })
                        )
                    }
                </div>
            </div>
            <div className="right">
                <a href="todo">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})
ThmemRecommend.defaultProps={
    title:'默认',
    keywords:['默认数据']
}
export default ThmemRecommend