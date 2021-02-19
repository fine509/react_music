import styled from "styled-components";

export const AlbumWrapper = styled.div`
  margin-top: 50px;
   
  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;

    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .ablumCar{
    position:relative;
    box-sizing:border-box;
    width:100%;
    height:186px;
    padding:30px 20px 20px 40px;
    margin-top:20px;
    margin-right:-5px;
    border:1px solid #D3D3D3;
    background-color:#F5F5F5;
    section{
      display:inline-block;
      box-sizing:border-box;
      width:20%;
      img{
        width:100px;
        height:100px;
      }
      p {
        width:100px;
        overflow:hidden;
	      text-overflow:ellipsis;
	      white-space:nowrap;
        margin: 4px 0;
      }
      a {
        width:100px;
        height:100px;
      }
    }
    
    .rightNav {
      position:absolute;
      right:10px;
      top:50%;
      transform:translateY(-50%);
      cursor:pointer;
    }
    .leftNav {
      position:absolute;
      left:10px;
      top:50%;
      transform:translateY(-50%);
      cursor:pointer;
    }
  }
  .active {
    section:nth-child(n-5){
        display:inline-block;
      }
    section:nth-child(n+6){
        display:none;
      }
    }
    .active2{
      section:nth-child(n-5){
        display:none;
      }
      section:nth-child(n+6){
        display:inline-block;
      }
    }

`