import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Carousel, WingBlank } from 'antd-mobile';
import swiperSty from './cookbook.module.scss'
import swiper1 from 'assets/swiper-1.png'

import {connect}  from 'react-redux'



class Switch extends PureComponent {
   
    render() {
        return (
           
            <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          
            >
        
            
            </Carousel>
          
        );
    }
}

Switch.propTypes = {

};
const mapState =state=>({
    list:state.list
})
export default connect(mapState)(Switch);