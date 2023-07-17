---
draft: false
publishDate: 2022-12-08T09:00:00+09:00
title: 'ブログのページネーションについて'
description: 'ブログのページネーションについて'
author: nuovotaka
categories:
  - computer
tags:
  - web
  - notion
  - blog
---

## ブログのページネーションについて

## 使用はお控え下さい。

全件ページの取得はできるのですが詳細ページへのリンクで 404 ページが発生し詳細ページへ遷移できない事象が発生しております。

都度デプロイできる環境にある方は使われても問題ないと思いますが、外出先から高頻度で更新を行われる方は下記のページネーションは使わないで下さい。

## ブログのページネーションについて

今まで Before で表示していたものを`?page=xxx`で表示できるように変更した。

下記のコードは、全件データ取得してそれをフロント側で `slice` で分割表示させるやり方になります。

## Pagination.tsx

参考コード(ほぼそのまま使用、一部 Load more、データをフェッチしている部分を削除やコードの変更あり)

```tsx
import React, { useEffect, useState } from 'react'
import './style.css'
const renderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key={index}>{todo.title}</li>
      })}
    </ul>
  )
}

function Pagination() {
  const [data, setData] = useState([])

  const [currentPage, setcurrentPage] = useState(1)
  const [itemsPerPage, setitemsPerPage] = useState(5)

  const [pageNumberLimit, setpageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id))
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? 'active' : null}>
          {number}
        </li>
      )
    } else {
      return null
    }
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5)
  }

  return (
    <>
      <h1>Todo List</h1> <br />
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false}>
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}>
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
    </>
  )
}

export default Pagination
```

コード中ではナンバー表示に `li` タグだけだったので `Link` で `a` タグを付与した。

すると下記のコード部分で `id` が取れなくなるので下記のように変更。

```tsx
const handleClick = (event) => {
  setcurrentPage(Number(event.currentTarget.id))
}
```

## state-manage.ts

現在ページ(グローバルのステート管理)の状態を管理するのに使います。

`lib > state-manage.ts` を作成し以下のコードを貼り付けます。

```tsx
import useSWR from 'swr'

export type CurrentPage = {
  page: number
}

export const useStaticState = (key: string): [CurrentPage, (currentPage: CurrentPage) => void] => {
  const defaultCurrentPage: CurrentPage = {
    page: 1
  }

  const { data: currentPage, mutate: setCurrentPage } = useSWR(key, null, {
    fallbackData: defaultCurrentPage
  })

  return [currentPage as CurrentPage, setCurrentPage]
}
```

Pagination.tsx に `useStaticState` を追加します。

```tsx
const Pagination = ({ allItems, perpage }) => {
  const [currentPage, setCurrentPage] = useStaticState('currentPage')
```

pagination.tsx を少し変更します。

引数の `allItems` はブログの全件データ。

`perpage` は１ページ毎の表示件数です。easy-notion-blog の場合デフォルトで１０件なのでそれを親コンポーネントから渡します。

グローバル変数を定義したのでその部分の変更も必要になります。

ナンバー、次へのボタン、戻るボタンそれぞれのハンドラーの中を変更。

実際のコードで

```tsx
const handleClick = (e) => {
  currentPage.page = Number(e.currentTarget.id)
  setCurrentPage({ page: currentPage.page })
}
```

```tsx
const handleNextbtn = () => {
  const newcurrentPage = { ...currentPage }
  setCurrentPage({ page: ++newcurrentPage.page })

  if (currentPage.page + 1 > maxPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
  }
}

const handlePrevbtn = () => {
  const newcurrentPage = { ...currentPage }
  setCurrentPage({ page: --newcurrentPage.page })

  if ((currentPage.page - 1) % pageNumberLimit == 0) {
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
  }
}
```

参考コードの`if`文で判定している `currentPage` 部分は全て `currentPage.page` に変更。

## 親コンポーネント

```tsx
const BlogPage = async () => {
  const [posts, rankedPosts, tags, allposts] = await Promise.all([
    getPosts(NUMBER_OF_POSTS_PER_PAGE),
    getRankedPosts(),
    getAllTags(),
    getAllPosts()
  ])

  return (
    <>
      <GoogleAnalytics pageTitle="Blog" />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <NoContents contents={posts} />

          <Pagination allItems={allposts} perpage={NUMBER_OF_POSTS_PER_PAGE} />
        </div>

        <div className={styles.subContent}>
          <BlogPostLink heading="Recommended" posts={rankedPosts} />
          <BlogTagLink heading="Categories" tags={tags} />
        </div>
      </div>
    </>
  )
}

export default BlogPage
```

下記コードを親コンポーネントに追加

```tsx
<Pagination allItems={allposts} perpage={1ページ毎の表示件数}　/>
```

### ページネーションの各番号に Link を付与

```tsx
const renderPageNumbers = pages.map((number) => {
  if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage.page == number ? `${Mystyles.pagination_active}` : null}>
        <Link href={'#'} as={`${pathname}?page=${number}`}>
          <span className={Mystyles.pagination_link}>{number}</span>
        </Link>
      </li>
    )
  } else {
    return null
  }
})
```

`Link` で `as` を指定しているので `?page={number}` の表示ができるようになる。実際は `href` を見ていただけるとわかるがダミーにしているので `?page={number}` で遷移しているのでは無いということ。

あくまで URL の表示だけ変更している。

### Tag について

上記と同様に `pagination.tsx` のコンポーネントを親コンポーネントに記載するだけで使用できます。

### 最後に

Next.js13 で’useXXXXX’を使うとクライアントサイド’use client’を宣言しなければならずデータのフェッチをしているところでは使えません。

必ず分離(コンポーネント化)が必要になります。

また、今回は Header 内でも’現在ページの変数’にアクセス必要がありましたのでグローバル変数をどこかで持たなければいけませんでした。

Header は layout.tsx で定義されていますのでそこでステートを保持するとクライアントサイドの宣言をしなければ成らずそれ以下の子コンポーネントで不具合が生じます。

そこで今回は’swr’を用いてグローバル変数を保持する方法の記述を見つけました。

swr をグローバル変数として利用する記事(元ネタ)のブクマが何処かへ行ってしまったのでありませんがコードを見ていただければそのまま利用できると思います。

### 参考コード

- Pagination コンポーネントについて

[react-pagination-component/PaginationComponent.js at main · codebucks27/react-pagination-component](https://github.com/codebucks27/react-pagination-component/blob/main/src/components/PaginationComponent.js)

- グローバルの状態管理について

[オブジェクトを簡単にイミュータブルに扱えるライブラリ「Immer」を SWR と共に使ってみた | DevelopersIO](https://dev.classmethod.jp/articles/tried-using-the-library-immer-with-swr/)

[SWR はローカルの状態管理としても使える](https://zenn.dev/tak_iwamoto/articles/39aefec675c323)

最後の方にもありますが、 `initialData` は `fallbackData` に変更になりました。

これは初期値を設定するところになります。

### 実際のコード

[GitHub - nuovotaka/notion-blog-13-pagination-sample: Google ADS 対応](https://github.com/nuovotaka/notion-blog-13-pagination-sample)
