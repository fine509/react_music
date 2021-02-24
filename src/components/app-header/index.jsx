import React, { memo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AppHeaderStyle from "./style.module.scss";


export default memo(function MHAppHeader() {
    const location = useLocation();
        const path = location.pathname.split("/")[1];
    const [pathName, setpathName] = useState(path)

  
  return (
    <div className={AppHeaderStyle["box"]}>
      <div className={["wrap-v1", AppHeaderStyle["title"]].join(" ")}>
        <div>
          <span className={"sprite_01"}>网易云音乐</span>
        </div>
        <div>
          <NavLink
            to="/discover"
            className={pathName === "discover" ? AppHeaderStyle["active"] : ""}
            exact = "true"
            onClick={()=>{setpathName('discover')}}
          >
            发现音乐
          </NavLink>{" "}
          <i className={["sprite_01", "icon"].join(" ")}></i>
          <NavLink
            to="/friends"
            className={pathName === "friends" ? AppHeaderStyle["active"] : ""}
            exact = "true"
            onClick={()=>{setpathName('friends')}}
          >
            我的音乐
          </NavLink>
          <NavLink
            to="/mine"
            className={pathName === "mine" ? AppHeaderStyle["active"] : ""}
            exact = "true"
            onClick={()=>{setpathName('mine')}}
          >
            朋友
          </NavLink>
          <a href="https://music.163.com/store/product">商城</a>
          <a href="https://music.163.com/nmusician/web/index#/">音乐人</a>
          <a href="https://music.163.com/#/download">下载客户端</a>
        </div>
        <div>
          <li>
            <input type="text" placeholder="音乐/视频/电台/用户" />
          </li>
          <li>
            <button>创作者中心</button>
          </li>
          <li>登录</li>
        </div>
      </div>
    </div>
  );
});
