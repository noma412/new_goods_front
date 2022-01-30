import React, { useState, useEffect } from 'react'
import MuiPagination from '@material-ui/lab/Pagination'
import '../assets/scss/Lists.scss'
type typeProps = {
  name: string
}
type data = {
  id: number
  name: string
  title: string
  img: string
  href: string
  price: string
  date: string
  kcal: string
  caution: string
  release_date: string
}
type response = {
  num: number
  data: data[]
}

const Lists = (props: typeProps) => {
  const [lists, setLists] = useState<data[]>()
  const [allPage, setAllPage] = useState(1)
  const [page, setPage] = useState(1)
  const domain: string =
    //@ts-ignore
    process.env.NODE_ENV === 'local'
      ? 'http://localhost:3000'
      : 'https://3ld1dn462c.execute-api.ap-northeast-1.amazonaws.com/'
  useEffect((): void => {
    if (!props.name) return
    pageEvent(1)
    // eslint-disable-next-line
  }, [props.name])
  const pageEvent = (num: number): void => {
    setPage(num)
    update(num)
  }
  const update = (num: number): void => {
    window.scrollTo({
      top: 0,
    })
    fetch(
      `${domain}/default/new-goods-get-prod-func?name=${
        props.name
      }&offset=${(num - 1) * 50}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        return res.json()
      })
      .then((res: response) => {
        setAllPage(Math.ceil(res.num / 50))
        setLists(res.data)
      })
  }
  return (
    <React.Fragment>
      {lists && (
        <MuiPagination
          count={allPage}
          color="primary"
          onChange={(e, page) => pageEvent(page)}
          page={page}
          className="topPagenation"
        />
      )}
      <ul className="food-list">
        {lists &&
          lists.map((list: data) => (
            <li key={list.id} className={list.name}>
              <a href={list.href} target="_blank" rel="noreferrer">
                <div className="img">
                  <img src={list.img} alt="" loading="lazy" />
                </div>
                <p className="name">{list.name}</p>
                <p className="ttl">{list.title}</p>
                <p className="kcal">{list.kcal}</p>
                <p className="price">{list.price}</p>
                <p className="date">
                  <span>{list.release_date? '発売日' : '更新日'}</span>
                  <span>
                    {list.release_date?.substring(0, 10).replaceAll('-', '/') ||
                      list.date.substring(0, 10).replaceAll('-', '/')}
                  </span>
                </p>
              </a>
            </li>
          ))}
      </ul>
      {lists && (
        <MuiPagination
          count={allPage}
          color="primary"
          onChange={(e, page) => pageEvent(page)}
          page={page}
          className="bottomPagenation"
        />
      )}
    </React.Fragment>
  )
}

export default Lists
