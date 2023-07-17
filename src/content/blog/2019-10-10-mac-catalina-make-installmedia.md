---
draft: false
title: 備忘録 - MacOS Catalinaのインストールメディアの作成方法
description: nuovotaka blog
publishDate: 2019-10-10T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - mac
  - os
---

もしものためにインストール USB メディアを作成。

### MacOS Catalina をダウンロード

app ストアよりダウンロードしてください。

### インストール USB メディアの作成

使用する USB メディアの容量を最低でも 12GB 以上の物を用意する。

[USB メモリ](https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF-USB%E3%83%A1%E3%83%A2%E3%83%AA-SanDisk-%E8%AA%AD%E5%8F%96%E6%9C%80%E5%A4%A7130MB-SDCZ48-064G-JA57/dp/B08591GKBT/ref=sr_1_2?crid=1FCLUQ58M9IUX&keywords=usb%E3%83%A1%E3%83%A2%E3%83%AA&qid=1688410881&refinements=p_72%3A2150400051%2Cp_n_feature_four_browse-bin%3A2225479051%7C2225480051%2Cp_89%3ASanDisk%2Cp_n_feature_browse-bin%3A16917273051&rnid=16917213051&s=computers&sprefix=us%2Caps%2C281&sr=1-2)

#### ボリューム名の変更

「MyVolume」に変更しておきます。なんでも ok です。

#### インストールメディアの作成

```
sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
```

ここで使っている`createinstallmedia`は macOS Catalina に付属のコマンドで app ストアから OS をダウンロードして使えるコマンドになります。

### USB からの起動

Option キーを押しながら Mac を起動し「Install macOS Catalina」を選択。
