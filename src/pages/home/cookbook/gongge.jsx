import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import gongSty from './cookbook.module.scss'
class Gongge extends PureComponent {
    render() {
        const {icon,title} = this.props.item
        return (
            <div className={gongSty["gongge"]}>
          <img src={icon} alt=""/>
            <div style={{marginTop:4}}> {title}</div>
            </div>
        );
    }
}

Gongge.propTypes = {

};
Gongge.defaultProps={
    title:"默认"
}
export default Gongge;