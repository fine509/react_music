import React, { memo } from "react";

import { getSizeImg } from "../../utils/data_format";

import { TopRankingWrapper } from "./style";
interface Iporps {
  item: any;
}
const TopRanking: React.FC<Iporps> = memo((props) => {
  const { item } = props;
  return (
    <TopRankingWrapper>
      <header className="header">
        <div className="image">
          <img src={getSizeImg(item.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover"></a>
        </div>
        <div className="info">
          <a href="todo">云音乐{item.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn  favor sprite_02"></button>
          </div>
        </div>
      </header>
      <main className="list">
        {item.tracks &&
          item.tracks.slice(0, 10).map((jtem: any, index: number) => {
            return (
              <div key={jtem.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{jtem.name}</span>
                  <div className="operate">
                    <button className="btn play sprite_02"></button>
                    <button className="btn addto sprite_icon2"></button>
                    <button className="btn favor sprite_02"></button>
                  </div>
                </div>
              </div>
            );
          })}
      </main>
      <footer className="footer"></footer>
    </TopRankingWrapper>
  );
});

export default TopRanking;
