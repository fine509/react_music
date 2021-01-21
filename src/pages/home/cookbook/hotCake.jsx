import React, { PureComponent ,Fragment} from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'antd-mobile';
import Gongge from './gongge'
import hotSty from './cookbook.module.scss'
import {$axios} from '../../../utils/http'
class Hotcake extends PureComponent {
    state={
        hostList:[]
    }
    componentDidMount(){
        this.getStartData()
    }
    async getStartData(){
        let result = await $axios({url:"/api/hotcate"})

        let data = result.data.map(item=>{
          return {
            key:item.id,
            title:item.title,
            icon:item.img
          }
        })
        this.setState({
            hostList:data
        })
    }
    render() {
        return (
            <div>
                <header className={hotSty["cateTitle"]}> <div>热门分类</div> </header>
                <div className={hotSty["gonggeBox"]}>
                {this.state.hostList.map(item=>{
                    return (<div className={hotSty["item"]} key={item.title}> <Gongge item={item}/></div>)
                })}
                </div>
            </div>
        );
    }
}

Hotcake.propTypes = {

};

export default Hotcake;