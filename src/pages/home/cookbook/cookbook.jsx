import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from './header'
import Switch from './switch'
import Input from '@/search/input'
import Hotcake from './hotCake'

class Cookbook extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                <Switch/>
                <Input />
                <Hotcake/>
            </div>
        );
    }
}

Cookbook.propTypes = {

};

export default Cookbook;