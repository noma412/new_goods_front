import React from 'react'
import food from './assets/img/common/food.jpg'
import './App.scss'

function App() {
  return (
    <div className="app">
      <h1>新商品</h1>
      <ul className="food-list">
        <li>
          <a
            href="https://www.lawson.co.jp/recommend/original/detail/1442823_1996.html"
            target="_blank"
            rel="noopener"
          >
            <img src={food} alt="" />
          </a>
          <p className="ttl">トスカーナお墨付き！生パスタミートソース</p>
          <p className="kcal">660kcal</p>
          <p className="price">
            <span>450円</span>
            <span>(税込)</span>
          </p>
          <p className="date">
            <span>発売日</span>
            <span>2021.11.02</span>
          </p>
        </li>
        <li>
          <a href="/recommend/original/detail/1442823_1996.html">
            <img src={food} alt="" />
          </a>
          <p className="ttl">トスカーナお墨付き！生パスタミートソース</p>
          <p className="kcal">660kcal</p>
          <p className="price">
            <span>450円</span>
            <span>(税込)</span>
          </p>
          <p className="date">
            <span>発売日</span>
            <span>2021.11.02</span>
          </p>
        </li>
        <li>
          <a href="/recommend/original/detail/1442823_1996.html">
            <img src={food} alt="" />
          </a>
          <p className="ttl">トスカーナお墨付き！生パスタミートソース</p>
          <p className="kcal">660kcal</p>
          <p className="price">
            <span>450円</span>
            <span>(税込)</span>
          </p>
          <p className="date">
            <span>発売日</span>
            <span>2021.11.02</span>
          </p>
        </li>
        <li>
          <a href="/recommend/original/detail/1442823_1996.html">
            <img src={food} alt="" />
          </a>
          <p className="ttl">トスカーナお墨付き！生パスタミートソース</p>
          <p className="kcal">660kcal</p>
          <p className="price">
            <span>450円</span>
            <span>(税込)</span>
          </p>
          <p className="date">
            <span>発売日</span>
            <span>2021.11.02</span>
          </p>
        </li>
        <li>
          <a href="/recommend/original/detail/1442823_1996.html">
            <img src={food} alt="" />
          </a>
          <p className="ttl">トスカーナお墨付き！生パスタミートソース</p>
          <p className="kcal">660kcal</p>
          <p className="price">
            <span>450円</span>
            <span>(税込)</span>
          </p>
          <p className="date">
            <span>発売日</span>
            <span>2021.11.02</span>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default App
