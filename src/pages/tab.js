import { TabBar } from 'antd-mobile';
import {React,PureComponent} from 'react'

import cookbook from 'assets/cookbook.png'
import cookbookActive from 'assets/cookbook-active.png'
import location from 'assets/location.png'
import locationActive from 'assets/location-active.png'
import menu from 'assets/menu.png'
import menuActive from 'assets/menu-active.png'
import more from 'assets/more.png'
import moreActive from 'assets/more-active.png'


//引入组件
import Cookbook from './home/cookbook/cookbook'



export default class Tab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }

  

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbook}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbookActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
        
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
         <Cookbook/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="地图"
            key="map"
           
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
            data-seed="logId1"
          >
     
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat`}}
              />
            }
            title="分类"
            key="category"
        
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
          >
           
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
     
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
