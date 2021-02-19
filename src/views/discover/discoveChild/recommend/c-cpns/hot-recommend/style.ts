import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    section{
        flex: 0 0 25%;
        box-sizing:border-box;
        padding: 0 5px;
        img{
            width:100%;
            height:auto;
        }
        p {
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    }
  }
`