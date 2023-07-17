---
draft: false
title: why automated deploy failed?
description: nuovotaka blog
publishDate: 2016-01-26T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - github
  - blog
---

### なぜ自動 Deploy が失敗したのか?

`wercker` で確認してみるとどうやら `install-packages` のステップで失敗しているようです。

`wercker` のドキュメントを探してみると変更があったのかどうかはわからないけれど。
今のところ使えそうな感じでした。

そこで、`git`のみを先ほどのステップで動作するようにソースを変更し push してみると
まだ、パッケージの部分で失敗するようです。

#### script へ変更

`deploy step`の`- install-packages:`部分を以下のように`- script:`に変更することにしました。

```
deploy:
  steps:
    - script:
        name: install git
        code: |
          apt-get update
          apt-get install -y git
```

#### change wercker yaml file

gist へ書いたものをこちらにも貼っておきます。

{{< gist nuovotaka ae944d4fd165e6b4d930 >}}
