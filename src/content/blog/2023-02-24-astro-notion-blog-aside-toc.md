---
draft: false
publishDate: 2023-02-24T09:00:00+09:00
title: 'astro notion blog のサイドバー目次追随'
description: 'HTML, CSS, JavaScript で記述(参考コードを変更)'
author: nuovotaka
categories:
  - computer
tags:
  - web
  - notion
  - astro
  - blog
---

## astro notion blog のサイドバー目次追随

ソースコードは HTML, CSS, JavaScript となります。

JavaScript ソースは参考となるコードがありそれを少し手直ししました。

## サイドバーの目次を追加

`src > components > notion-blocks > TocLink.astro` を作成

```tsx
---
import * as interfaces from "../../lib/interfaces.ts";
import { buildHeadingId } from "../../lib/blog-helpers.ts";
import { snakeToKebab } from "../../lib/style-helpers.ts";
import "../../styles/notion-color.css";

export interface Props {
  blocks: interfaces.Block;
}

const buildHeadingId = (heading) =>
  heading.RichTexts.map(
    (richText: interfaces.RichText) => richText.Text.Content
  )
    .join()
    .trim();

const { blocks } = Astro.props;

const istoc = blocks.filter(
  (b: interfaces.Block) => b.Type === "table_of_contents"
);
const headings = blocks.filter(
  (b: interfaces.Block) =>
    b.Type === "heading_1" || b.Type === "heading_2" || b.Type === "heading_3"
);

if (istoc.length === 0) {
  return;
}
---

<nav class="toc-nav">
  {
    headings.map((headingBlock: interfaces.Block) => {
      const heading =
        headingBlock.Heading1 || headingBlock.Heading2 || headingBlock.Heading3;

      let indentClass = "";
      if (headingBlock.Type === "heading_2") {
        indentClass = "indent-1";
      } else if (headingBlock.Type === "heading_3") {
        indentClass = "indent-2";
      }

      return (
        <span>
          <a href={`#${buildHeadingId(heading)}`}>
            {heading.RichTexts.map(
              (richText: interfaces.RichText) => richText.PlainText
            ).join("")}
          </a>
        </span>
      );
    })
  }
</nav>

<style>
  .toc-nav {
    position: sticky;
    top: 2rem;
    align-self: start;
  }

  .toc-nav > span.active > a {
    color: #000;
    font-weight: bold;
  }

  .toc-nav > span > a {
    display: block;
    color: inherit;
    line-height: 1.8rem;
    font-size: 0.9rem;
    text-decoration: underline;
  }

  .toc-nav > span > a:hover {
    background: rgba(241, 241, 239, 1) !important;
  }

  .toc-nav > span > a.indent-1 {
    padding-left: 1.5rem;
  }

  .toc-nav > span > a.indent-2 {
    padding-left: 3rem;
  }
</style>

<script is:inline>
  //オプション
  const options = {
    //40% 見えてからコールバック関数を呼び出す
    rootMargin: "-40% 0px",
  };

  // コールバック関数
  const callback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document
          .querySelector(`nav span a[href="#${id}"]`)
          .parentElement.classList.add("active");
      } else {
        document
          .querySelector(`nav span a[href="#${id}"]`)
          .parentElement.classList.remove("active");
      }
    });
  };

  window.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(callback, options);

    // 全ての`id`付きの`a`tag要素を抽出
    document.querySelectorAll("a[id]").forEach((elem) => {
      observer.observe(elem);
    });
  });
</script>
```

### querySelectorAll(”a[id]”)

a tag に id が付与されていてサイドバーでクラスに’.active’を追加したいときに id が必要になります。

上記の画像では h6 に id が無く’null’ となってしまうため、a[id] で抽出することとしました。

## TocLink を slug へ追加

`src > pages > blog > [slug].astro` ファイルを変更

`TocLink` を追加

1. import 文を Frontmatter の部分へ追加

   ```tsx
   import TocLink from '../../components/notion-blocks/TocLink.astro'
   ```

2. サイドバーの固定目次の追加

   aside の閉じタグの直前に追加

   ```tsx
   <TocLink blocks={blocks} />
   ```

[slug].astro の一部抜粋コードが下記です。

```tsx
---
...
...
...
import TocLink from "../../components/notion-blocks/TocLink.astro";
....

----

<Layout
  title={post.Title}
  description={post.Excerpt}
  path={getPostLink(post.Slug)}
>
  <div className={styles.container}>
    <main>
      <div className={styles.post}>
        <PostDate post={post} />
        <PostTags post={post} />
        <PostTitle post={post} enableLink={false} />
        <PostBody blocks={blocks} />

        <footer></footer>
      </div>
    </main>

    <aside>
      <BlogPostsLink
        heading="Posts in the same category"
        posts={postsHavingSameTag.filter(
          (p: interfaces.Post) => p.Slug !== post.Slug
        )}
      />
      <BlogPostsLink heading="Recommended" posts={rankedPosts} />
      <BlogPostsLink heading="Latest posts" posts={recentPosts} />
      <BlogTagsLink heading="Categories" tags={tags} />
      <TocLink blocks={blocks} />
    </aside>
  </div>
</Layout>
```

## 参考

- IntersectionObserver について

  [Intersection Observer API の使い方](https://www.webdesignleaves.com/pr/jquery/intersectionObserverAPI-basic.html)

- querySelector, querySelectorAll について

  [Document.querySelector() - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector)

- 参考コード
  [Smooth Scrolling Sticky ScrollSpy Navigation](https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/)
  [スクロールに応じて現在地表示する固定目次を JavaScript で作る（jQuery なし）｜ BringFlower](https://www.bring-flower.com/blog/fixed-and-highlighted-toc/)
