import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import discoverStyle from "./discoverStyle.module.scss";
import RenderRoutes from "../../router/routerRender";
// import { useHistory } from 'react-router-dom'
const MHDiscover = (props) => {
  //使用redux hooks关联redux
  // const history = useHistory()
  // // // const pathName = history.location.pathname.split('/')[2]
 
  return (
    <div>
      <div className={[discoverStyle["bigBox"]]}>
        <div className={["wrap-v2", discoverStyle["box"]].join(" ")}>
          <li>
            <NavLink activeClassName={discoverStyle["active"]} exact to="/discover/recommend">
              推荐
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={discoverStyle["active"]} exact to="/discover/seniority">
              排行榜
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={discoverStyle["active"]} exact to="/discover/songList">
              歌单
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={discoverStyle["active"]} exact to="/discover/broadcasting">
              主播电台
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={discoverStyle["active"]} exact to="/discover/songer">
              歌手
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={discoverStyle["box-active"]} exact to="/discover/newSong">
              新歌上架
            </NavLink>
          </li>
          <li></li>
          <li></li>
        </div>
      </div>
      {props.children}
      </div>
  );
};
// const mapStateToProps = state => ({
//     banner: state.recommend.banner
// })
// const mapPropsToProp = dispatch => ({
//     getBanner: (url)=>{dispatch(getBannerAction(url))}
// // // })
// // export default connect(mapStateToProps,mapPropsToProp)(memo(MHDiscover))
export default memo(function (props) {
  const { route } = props;
  return (
    <MHDiscover>
      <RenderRoutes routes={route.children} redirect={{to:'/discover',jump:'/discover/recommend'}} />
    </MHDiscover>
  );
});
