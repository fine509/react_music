import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getBannerAction } from "@/redux/actions/recommend";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

const TopBanner: React.FC<{}> = memo(() => {
  //内部state
  const [currentIndex, setcurrentIndex] = useState(0);

  //redux
  const dispatch = useDispatch();
  const recommend = useSelector(
    (state: any) => ({
      banner: state.getIn(["recommend", "banner"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getBannerAction());
  }, [dispatch]);

  //其他hooks
  let bannerRef = useRef(null);
  const bannerChange = useCallback((form: any, to: any) => {
    setcurrentIndex(to);
  }, []);
  
  //业务逻辑
  const bgImage =
    recommend?.banner[currentIndex]?.imageUrl + "?imageView&blur=40x20";
  return (
    <BannerWrapper
      style={{ background: `url(${bgImage}) center center/6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {recommend.banner.map((item: any, index: number) => {
              return (
                <div className="banner-item" key={index}>
                  <img className="image" src={item.imageUrl} alt="typeTitle" />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => {
              (bannerRef.current as any).prev();
            }}
          ></button>
          <button
            className="btn right"
            onClick={(e) => {
              (bannerRef.current as any).next();
            }}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanner;
