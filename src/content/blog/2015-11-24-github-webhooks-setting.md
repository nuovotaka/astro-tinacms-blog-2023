---
draft: false
title: Github Webhooks Setting
description: nuovotaka blog
publishDate: 2015-11-24T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - github
  - webhooks
---

### Wercker と Github を使って自動で静的サイトを deploy するときの github の設定は？

各リポジトリの`Settings`に`Webhooks & services`という項目がある
ここで、`Webhooks`の内容を確認してみると**Which events would you like to trigger this webhook?**と書かれたところにイベントを設定するところがある。

今回は**gh-pages**で`Project Pages`を wercker を使って自動化したい。
**Branch**を作成、削除する項目があるがそれとは別に`Pages build`が存在する
チェックがなくてもブランチが作られるのか？
