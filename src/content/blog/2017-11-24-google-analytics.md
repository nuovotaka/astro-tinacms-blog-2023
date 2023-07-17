---
draft: false
title: 'google analytics'
description: nuovotaka blog
publishDate: 2017-11-24T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - web
  - analytics
---

### Google Analytics を設置してみた

私の使っているテーマ(twentyfourteen)には、google analytics が設定できるようになっていなかったので設置してみた。

色々と探してみると google analytics の template なるものが存在するようだ。

[Internal Templates](https://gohugo.io/templates/internal/#google-analytics)

comfig.toml に`googleAnalytics`のパラメータを設置してそこに userID を設定する。

```
googleAnalytics = "UA-123-45"
```

次に下記のコードを`/body`タグの直前などに設置する。

```
{{ template "_internal/google_analytics_async.html" . }}
```

これで google analytics が設定されている場合とされていない場合でそれぞれよしなに対応してくれる。

`with`を使って行う方法もあるが私は上記を利用するようにした。
