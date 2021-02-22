import styled from 'styled-components'

export const PlayerWrapper = styled.div`
    position:relative;
    display:flex;
    a {
                color:#000;
            }
    .left {
        
        flex: 0 1 70%;
        box-sizing:border-box;
        padding:47px 30px 40px 39px;
        display:flex;
        &>div {
            display:inline-block;
        }
        .image {
            flex: 0 0 206px;
            height:205px;
            margin-right:20px;
            vertical-align:top;
            span {
                display:inline-block;
                width:206px;
                height:205px;
            }
            img {
                margin-top:35px;
            }
            a {
                position:absolute;
                top:300px;
                left:50px;
                font-size:16px;
                color:blue;
                text-decoration:solid;
            }
        }
        .songDetail {
            flex:1;
           
            header {
                display: flex;
                justify-content: left;
                align-items: center;
                i {
                    display: inline-block;
                    width: 54px;
                    height: 24px;
                    background-position: 0 -463px;
                   
                }
                h3 {
                    display:inline-block;
                    font-size:20px;
                    margin-left:5px;
                }
            }
        }
        .singer  {
            span,a {
                display:inline-block;
            }
            
        }
    }
    
    .right {
        flex: 0 2 30%;
    }
    
    .cover {
      background-position: -140px -580px;
      width: 100%;
      height: 100%;
      top: 44px;
      left:0px;
      z-index:10;
    }
`