import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import headSty from './cookbook.module.scss'
class Header extends PureComponent {
    render() {
        return (
            <div className={headSty["header"]}>
               美食大全
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;