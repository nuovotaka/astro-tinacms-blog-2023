---
draft: false
title: Hugo import jekyll コマンドが追加
description: nuovotaka blog
publishDate: 2015-12-04T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - hugo
  - blog
---

### Hugo で jekyll のコンテンツをインポートできるようになりました

自分が試したのは`jekyll-now`の方ですが、記事をインポートできました。
使い方は[Hugo Cmd Reference - hugo import jekyll](https://gohugo.io/commands/hugo_import_jekyll/)をご覧ください。
一応コマンドを。

`hugo import jekyll [jekyll_root_path] [target_path]`

これがリファレンスに書かれているインポートのためのコマンドになります。
`[jekyll_root_path]` : jekyll を管理している pc 内のルートパス
`[target_path]` : 出力先のパス
オプションなどもありますが、詳細はリファレンスをチェックしてください。

`jekyll-now`は web 上で記事を編集投稿できるものです。もちろん`jekyll`も使えます。
私の場合は、書きかけをあげたくなかったのでローカルでファイルを管理しています。

上記のコマンドを使うとこれまでの記事を Hugo 用にし、一緒にベーステンプレートを生成してくれます。

web 上で利用されている方は、zip ファイルなどでファイルを落として試してみてください。

`jekyll-now`より自由度が増しかつ高速生成なのでイライラもありません。
精神衛生上にもとっても良い**Hugo**です。

### CJKLanguage の認識が正しくなりました。

Hugo v0.15 のリリースにより
今までは、`.Summary`で表示すると正しく表示されませんでした。
どうしても全文つながってしまいます。

記事の上部に書く Front Matter 部分に次のオプションをつけます。
`isCJKLanguage`の値を`true`にしてください。

YAML, TOML それぞれ利用されている形式が違いますのでそれぞれに合う書式で設定をします。

また、これまで通り任意の場所で**続き**としたい場合は[User-defined: manual summary split:](https://gohugo.io/content/summaries/)を参照してください。

記事全文で**CJKLanguage**を有効にしたい場合は、`config.toml | yaml | jason `に記述してください。
私の場合は**config.toml**を利用しているので下記の記述です。

```
hasCJKLanguage = true
```

上記記述を**config**に追加することで日本語を認識したことを確認しました。

### Raw Markdown の追加

スライドを Markdown で記述できる。
HTML ファイルと Markdown ファイルを分離できるところにある。
`.RawContent`で使えるようなのだけれどまだ試していない。

詳細は[Template Variable](http://gohugo.io/templates/variables/)です。

#### 【 追 記 】

(2015.12.04)

Hugo がバージョンアップしてますので自動化されている方は合わせて`wercker.yml`のファイルも変更をしてください。
参考までにコードを。

```
box: debian
build:
  steps:
    - arjen/hugo-build:
        version: "0.15"
        theme: twentyfourteen
        flags: --disableSitemap=true

deploy:
  steps:
    - install-packages:
        packages: git ssh-client
    - lukevivier/gh-pages@0.2.1:
        token: $GIT_TOKEN
        basedir: public
```

`version: "0.14"`だった方は`version: "0.15"`へ変更を。

(2015.12.05)

- CJKLanguage について Front Matter に記述する方法以外に`config.toml | yaml | jason`に記述する方法を追加しました。
