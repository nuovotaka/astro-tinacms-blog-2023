---
draft: false
publishDate: 2022-12-18T09:00:00+09:00
title: 'Next.js13 ライブアップデート(easy-notion-blog)'
description: '2022/12/17 昨夜のライブアップデートを観て大変勉強になりました'
author: nuovotaka
categories:
  - computer
tags:
  - web
  - theme
---

## Next.js13 ライブアップデート(easy-notion-blog)

otoyo 氏

[アルパカログ](https://alpacat.com/)

[easy-notion-blog/README.ja.md at main · otoyo/easy-notion-blog](https://github.com/otoyo/easy-notion-blog/blob/main/README.ja.md)

2022/12/17(土) の Next.js 13 へのライブアップデートコーディングは大変勉強になりました。

お疲れ様でした。

## Git のお作法を学んだ

私の中で Git は、次のようなものでした。

[コミットは作業ログではない！ - Qiita](https://qiita.com/suzuki-hoge/items/cc91877ce69527ced692)

ほぼ作業ログに近いようなコミットで未来の自分が過去の自分の作業内容が分からないという有様のものでした。

コミットメッセージと違うものが入っていたりと色々とやらかしていました。

コミットメッセージも変更できる、ログも変更できると知りわかりやすいコミットをしたいと思います。

[綺麗なコミットログを作りたいときの git テクニック - Qiita](https://qiita.com/getty104/items/a9b56f30744dfe52a05f)

`amend` `cherry-pick` VScode でもできるようなので上手く使っていきたいと思います。

コマンド叩く方が早いと思いますが、私は VScode で `GitGraph` を見ながらやりたいと思います。

(CLI でコマンド叩いていると訳がわからなくなってしまうので。。。)

また、Git について YouTube で配信していただけるとありがたいです。

## エディターについて

`Neovim` を利用されているようなのでそちらについても色々と聞きたいなと思いました。

先日から Mac のクリーンインストールを行なっていて CLI 用にエディターを Neovim に変更したばかりですのでプラグインやその他の設定などについてご教授いただけると幸いです。

## 私のアップデートは

GitHub の raw をコピーしてファイルに貼り付けてなどをしておりましたが、せっかく Git を使っているのに `cherry-pick` 知らなかったー。

変更箇所によっては、コードを叩いたりなんかして結構時間をかけていましたが。。。

そうかといって変に VScode の置換を使ってしまってとんでも無いところを置換してしまってドツボにハマってたりと色々とやらかしていたように思います。

もっと他の方法があったとは。。。

できれば、コマンド叩かない方法があるといいのになぁ〜。
