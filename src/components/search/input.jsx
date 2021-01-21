import React, { PureComponent,Fragment } from 'react';
import PropTypes from 'prop-types';
import search from 'assets/search.png'
import inputSty from './input.module.scss'


class Input extends PureComponent {
    render() {
        return (
            <Fragment>
               <div className={inputSty["box"]}>
                    <img src={search} alt=""/>
                    <span>想吃什么，搜这里</span>
               </div>
            </Fragment>
        );
    }
}

Input.propTypes = {

};

export default Input;