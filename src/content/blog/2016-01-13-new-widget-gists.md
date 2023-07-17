---
draft: false
title: 新しい widget が追加されました
description: nuovotaka blog
publishDate: 2016-01-13T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - hugo
  - gist
---

### 最近投稿された Gists を検索して来てくれるもの

下記参考のテーマ公式の内容のまま(2016-01-13)だとローカルでは表示するのだが、wercker を通して動かすとうまく行かなかった。

なので、ロジックを[Hugo - Data-drivenContent](https://gohugo.io/extras/datadrivencontent/)の通りに変更。
最初は定義済み語句がからんでいるのかと思ったがそうではなかった。

どうやら、複数引数が可能な命令らしく分割しないまま`url`を定義したら`wercker`で落ちていた。
`hugo`や`hugo server`での確認では正しく表示されていた。

公式通りでは以下のとおり

```
{{ $urlPre := "https://api.github.com" }}
{{ $gistJ := getJSON $urlPre "/users/GITHUB_USERNAME/gists" }}
```

GITHUB_USERNAME : 個々のユーザー名に変更してください

url 内の**GITHUB_USERNAME**を**config.toml**で設定している値を利用する場合は

```
{{ $urlPre := "https://api.github.com/users/" }}
{{ $githubUser := .Site.Params.github }}
{{ $gistJ := getJSON $urlPre $githubUser "/gists" }}
```

公式にもありますが、分割された url は１つの url として認識されます。

json データで取得した中の`html_url`と`description`をチェックして
url は href に設定している。

range で５つのみとるようにしているので最近のものが取れるというわけです。

早速試してみました。

###### 参 考

Hugo 用の wordpress twentyfourteen テーマの作者

[jaden - twentyfourteen](https://github.com/jaden/twentyfourteen)
