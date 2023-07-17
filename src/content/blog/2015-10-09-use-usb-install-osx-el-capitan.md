---
draft: false
title: OS X El Capitan インストールUSBよりクリーンインストール
description: nuovotaka blog
publishDate: 2015-10-09T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - os
  - mac
---

2015.10.09(現在)
Mac OS X 10.11 El Capitan が最新の OS となり、AppStore よりダウンロード可能になっています。

Windows からの Mac 移行組は OS アップデート後の処理が Win より楽です。
ただし、しっかりとバックアップを取っていることが必須です。

Mac の OS は良くできていて最新 OS インストール後それまでの環境を移行することができます。

動画データなどある場合は、時間がかかるかもしれませんが数十 GB 程度ならば多少の時間を確保するだけで移行作業が終了するので 試す価値はあるかと思います。

Yosemite へのアップデート時に起こった長時間移行問題は解消しているようです。
ただし、OS のダウンロードに時間が必要となるので悪しからず。

今回は、インストール USB を作成しそれを使ってクリーンインストールする方法を書きます。

USB 3.0 対応の 8GB 以上の USB を用意してください。

### 準備

- AppStore から El Capitan をダウンロードする
- AirMac Time Capsule または 外部ストレージにバックアップをとります。
- [インストール USB ディスクを作成](http://blog.nuovotaka.com/2015/10/make-usb-installer-osx-el-capitan/)

### クリーンインストールの開始

- 作成したインストール USB を Mac にさす
- Startup Manager ( option ) モードで起動する

###### 方法は次の通り

- 左上のアップルロゴから再起動`option`キーを押しながら Mac が起動するのを待つ
- ディスク選択画面が表示されたら「Install Mac OS X El Capitan」を選択し`return`を押下
- Apple ロゴが表示された後 OS X Utilities (ユーティリティ) が起動する
- Disk Utility (ディスク ユーティリティ) を選択し OS X をインストする SSD 内容を消去する
- Install OS X (OS 再インストール) を選択し再起動されるのを待つ

### データ移行

- 移行アシスタントでデータ移行

> [Mac OS X ( El Capitan ) にバックアップデータの移行](http://wayohoo.com/mac/beginners/how-to-use-migration-assistant-for-os-x-el-capitan.html)

移行データが TB(テラバイト)ある場合はそれなりの時間を覚悟しないといけません。
また、移行元の SSD or HDD の性能により時間もそれぞれです。
アプリを再インストールする選択もできますので それによってもかわります。

### アップデートについて

- アプリでインストール USB を作成するものもありますが種々の問題がありましたので、ターミナルからコマンドで作成する方法を勧めます。(ターミナル操作に理解のある方のみ行ってください。)
- Windows の時よりもあっという間に終了しますので、常に使われている app の最新 OS への対応をチェックしてアップデートを検討してみてください。

###### 《 ご注意 》

_この作業は既存データの消去作業を伴うため確実なバックアップを。また、すべての作業は自己責任で行ってください_

######【 追 記 】

**参 考**

[OS X El Capitan のクリーンインストール](http://ipod.item-get.com/2015/10/os_x_el_capitan.php)
