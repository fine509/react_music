import styled from 'styled-components';
import url from './download.png'
import btnUrl from '../../../../../../assets/img/banner_sprite.png'
export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    /* background-color: red; */
    display: flex;
    position: relative;
    .slick-slide{
    display:none!important;
  }
  .slick-active{
    position:static!important;
    display:inline-block!important;
    button{
      text-align:center;
      background-color:rgba(0,0,0,.5)!important;
      border-radius:50%;
    }
  }
  .slick-dots{
    position:absolute;
    bottom:10px;
    left:45%;
    transform:translateX(-70%);
    width:350px!important;
    background-color:transparent!important;
    li {
      display:inline-block;
      margin:0 5px;
      button{
        width:25px;
      height:25px;
      text-align:center;
        background-color:transparent;
        color:#000;
        cursor:pointer;
      }
    }
  }
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  
  }
 
 
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${url});
  z-index:10;
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btnUrl});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
