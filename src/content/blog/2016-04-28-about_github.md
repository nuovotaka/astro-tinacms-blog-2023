---
draft: false
title: githubで３分クッキング
description: nuovotaka blog
publishDate: 2016-04-28T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - github
  - blog
---

### github で HP サイトを公開してみましょう

なんのことを言っているだと思われるかも知れませんね。

ドメインを持っていなくても github を利用するとお手軽に HP を公開することができます。

ご存知の方もいるかもしれませんがキュレーションとして記事をあげさせていただきます。

#### ユーザーアカウントを利用しての公開方法

やはり公式でしょう

- [GitHub Pages](https://pages.github.com/)

先ずはユーザーアカウントを利用しての公開(ドメインを取得していなくてもとりあえず公開することができます。)
上記とダブりますが。

- [Github を使って３分で HP を公開する](http://qiita.com/budougumi0617/items/221bb946d1c90d6769e9)

ここに書かれている あなたのユーザーアカウントを利用して公開できることになります。
一応このようなサービスは Github が提供しているもので本来はコラボレーションするときなどに使われるものになります。

goHugo など静的サイト生成ツールを利用される方は、github のドキュメントをご覧ください。(英語ですが。。。)

- [GitHub Pages](https://pages.github.com/)
  `User and Organization Pages`を選択してください。

###### Github を利用する場合の注意点

**`http://your_account.github.io/`**

github の場合の公開は"io"ドメインとなりますのでご注意を。

#### 独自ドメインを利用しての公開方法

ご自身のドメインを取得して公開し運用してみたくなった場合は下記を。

- [Github Pages の使い方](https://qiita.com/mikakane/items/87c8f676815da4e5ac04)

#### 静的サイトのホストについて

jekyll や最近では goHugo などいろいろとありますが、各種設定をしてください。

参考までに goHugo の場合は、baseurl や cname, domain などの設定を config 及び wercker_yaml
で変更する必要があります。

そして両者で同一でないとデプロイできません。

(例)

ドメインが"blog.nuovotaka.com"なので

config.toml の以下の項目は

```
baseurl = "http://blog.nuovotaka.com"
```

wercker.yaml の以下の項目は

```
domain: blog.nuovotaka.com
```

参考まで

---

問い合わせなどがありませんので Twitter からお願いします。

ただし、皆様の環境が見えませんのでご参考程度に記事をあげる、または、参考サイトをお知らせする程度になることをご了承ください。

---

追記

- Github を利用する場合の注意点
  ドキュメントにも記載がありますが今一度チェックです。

- ユーザーアカウントを利用しての公開方法
  やはり公式を追加しました。

順を追って作業していけばできることなので焦らず頑張りましょう。
