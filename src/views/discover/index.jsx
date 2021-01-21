import React, { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import discoverStyle from "./discoverStyle.module.scss";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { getBannerAction } from "@/redux/actions/recommend";
function MHDiscover(props) {
  //使用redux hooks关联redux
  const dispatch = useDispatch();
  const recommend = useSelector(
    (state) => ({
      banner: state.recommend.get("banner"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getBannerAction());
  }, [dispatch]);
  console.log(recommend.banner);
  return (
    <div>
      <div className={[discoverStyle["bigBox"]]}>
        <div className={["wrap-v2", discoverStyle["box"]].join(" ")}>
          <li>
            <NavLink exact to="/discover/recommend">
              推荐
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/seniority">
              排行榜
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/songList">
              歌单
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/broadcasting">
              主播电台
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/songer">
              歌手
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/newSong">
              新歌上架
            </NavLink>
          </li>
          <li></li>
          <li></li>
        </div>
      </div>
    </div>
  );
}
// const mapStateToProps = state => ({
//     banner: state.recommend.banner
// })
// const mapPropsToProp = dispatch => ({
//     getBanner: (url)=>{dispatch(getBannerAction(url))}
// // // })
// // export default connect(mapStateToProps,mapPropsToProp)(memo(MHDiscover))
export default memo(MHDiscover);
