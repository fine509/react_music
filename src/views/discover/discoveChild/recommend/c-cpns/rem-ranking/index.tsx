import React, { memo } from "react";
import { useMount } from "react-use";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopListData } from "../../../../../../redux/actions/recommend";

import { RankingWrapper } from "./style";
import ThmemRecommend from "../../../../../../components/theme-header-recommend/index";
import TopRanking from "../../../../../../components/top-ranking/index";
const Ranking: React.FC<{}> = memo(() => {
  //redux
  const dispatch = useDispatch();
  const recommend = useSelector(
    (state: any) => ({
      flyUpTopList: state.getIn(["recommend", "flyUpTopList"]),
      originTopList: state.getIn(["recommend", "originTopList"]),
      newSongTopList: state.getIn(["recommend", "newSongTopList"]),
    }),
    shallowEqual
  );
  useMount(() => {
    dispatch(getTopListData(0));
    dispatch(getTopListData(2));
    dispatch(getTopListData(3));
  });

  return (
    <RankingWrapper>
      <ThmemRecommend title="榜单" />
      <div className="tops">
        <TopRanking item={recommend.flyUpTopList}></TopRanking>
        <TopRanking item={recommend.originTopList}></TopRanking>
        <TopRanking item={recommend.newSongTopList}></TopRanking>
      </div>
    </RankingWrapper>
  );
});

export default Ranking;
