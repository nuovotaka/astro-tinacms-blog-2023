---
draft: false
title: OS X El Capitan クリーンインストールが１日作業となりました
description: nuovotaka blog
publishDate: 2015-10-03T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - osx
  - mac
---

### Xcode 使ってアプリ開発を行う方、開発用に使われる方

[Homebrew](http://brew.sh/index_ja.html)はもちろん、OS アプデの前にやるが吉。

Homebrew は ruby のバージョン管理をする rbenv などコマンドラインの管理を行います。

※ Homebrew のインストールで、Xcode を求められたら AppStore からインストし、`Xcode command line Tool ( xcode-select --install ) `をインストすること。

のちほど削除することになりますが、Xcode と OS X が対になっているようなので仕方ありません。Homebrew をインストールするために必要になるのでまずは時間の確保を。

とにかくダウンロードするデータ量が大きい＆世界中で「今だ！」っと思っている人たちとリソースの取り合いをしなければいけないので、Apple の CDN がもってくれるか(サーバーダウンしないか)どうか？
それが、問題です。

### クリーンインストールの作業開始！バックアップを取る

AirMac Time Capsule などを使ってバックアップをとります。
デスクトップの整理やらいらないアプリの削除とバックアップに追加しなくてはいけない項目が増えたので最初から行ったため時間を要しました。

AppStore より OS X ( El Capitan ) ( 6GB あり 2h 少々時間がかかりました。 ) をダウンロード＆インストします。

> [Mac OS X ( El Capitan ) のクリーンインストール](http://wayohoo.com/mac/tips/how-to-clean-install-os-x-el-capitan.html)を参考にさせていただきました。

### 移行アシスタントを使ってバックアップデータの移行作業

El Capitan となった新しい OS X へデータの移行を行いますが、app も移行されます。
( 宅内有線 LAN で 1h 以内でした。MBPR13inch 256GB 1/4 - 1/3 程度の使用量です。

また、有線 LAN 回線は光回線 1G 対応にスター接続されたギガバイト対応 Ethernet にしてあります。)
El Capitan 用の Xcode はバージョンが７にあがっているのでこの点を対処しないといけません。

[Mac OS X ( El Capitan ) にバックアップデータの移行](http://wayohoo.com/mac/beginners/how-to-use-migration-assistant-for-os-x-el-capitan.html)とりあえず、ここまでの状態で新しい OS にデータが移行され使えるようになります。
あと一息です。

### アプリのアップデート

AppStore にてアップデートするアプリがあった場合は、app のアップデートをしてください。
Yosemite より前の方は iPhoto.app がアップデートで残ります。
写真.app に移行統合された場合は、次で紹介する AppCleaner というアプリで削除しても大丈夫です。

**写真.app に移行しない状態での削除はデータが消える可能性があるのでご注意を！！**

### 古い Xcode を削除し、新しい Xcode をダウンロード＆インストールする

古い Xcode の削除に AppCleaner というアプリを使いました。
新しい Xcode のダウンロード＆インストールを行います。

次に Xcode のライセンス契約を行います。(コマンドラインから行う方法もあるようですが、先にアプリを立ち上げてしまったので契約条項が出て確認を取った次第です。)

Xcode コマンドライン ツールを一応インストしました。

### brew doctor を試してみる

すると

エラーメッセージというか注意が表示された

メッセージの内容は、Homebrew で使用されている `/usr/local` が使用できないようになっている。

El Capitan から
[System Integrity Protection (SIP、別名 rootless)](https://en.wikipedia.org/wiki/System_Integrity_Protection)の関係で `/System, /bin, /sbin, /usr` は `sudo`でも変更ができないようになっている。
その関係上`/usr/local`ディレクトリ以下のオーナー変更により使用が許可されるというものです。

上記画像の赤字で囲ってある部分のメッセージがその許可の変更を行うコマンドになります。
そのままターミナルから行えば先ほどのコマンドが通るようになります。
（ブログシステム上コードを記載できないので先ほどのをチェックしてください。もしくは、後に記載する回避策を確認してください。）

ディレクトリ以下の*オーナー変更コマンド*を行うと*ディレクトリ以下のオーナー*が変更されたのがわかる。

`brew doctor` を行うといつも通りの状態になりました。

【 感 想 】
なんだかんだで１日作業になってしまいました。
OS X ( El Capitan ) = 6GB, Xcode7 = 3GB 程度。Yosemite にしていなかったので標準 App のダウンロード＆インストールで時間が必要でした。

私の場合は、作業前にデスクトップからバックアップのデータなどを整理してからバックアップの取り直しをしたので時間が必要となった次第です。
写真、動画データなどが 少なかったのが幸いしました。

次は、ansible で環境作業を楽にしたいと思います。
Mac での移行作業は初めてでしたが、Apple ID が紐付いているのと iCloud がいい仕事しますね。
Windows から重い腰を上げての完全移行組ですが、Unix 系の流れを汲んでいるだけありデータの散らばりがなく楽です。

win の今を知らないのでわかりませんけれど。

何か開発したい人は Homebrew
をまず入れるべきです。
OS X ( El Capitan ) からスタートする場合は、
[回避策を行う必要がある](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/El_Capitan_and_Homebrew.md)([日本語翻訳版](http://www.softantenna.com/wp/mac/os-x-el-capitan-and-homebrew/))ようです。
別ディレクトリを作ってそちらで運用を考えているようですが、本家の解決策を待ちましょう。

###### 最後に

今回の作業は全て有線 LAN にて作業を行いました。

###### 【 追 記 】

実は、事前にこちらのサイトの内容をチェックしていて「ディスクのアクセス権の修復」を行っております。

> [「OS X El Capitan」明日リリース！アップデートに失敗しないための 5 つの準備](http://itea40.jp/technic/mac-beginners/os-x-el-capitan/os-x-el-capitan-is-officially-released-on-october-1-2015/)

アクセス権の修復は OS アップデート時のお作法のようなので記載をしておきます。
今回の OS X El Capitan 以降のアップデートでは必要なくなる模様です。

2015.10.09 追加
Mac に移行してから初めての OS アップデートでググった結果この方法を選んだわけですが、[インストール USB](http://blog.nuovotaka.com/2015/10/make-usb-installer-osx-el-capitan/)を利用すると初回の OS インストールを省くことができます。

_「コマンド+R」_: OS X での復元
再起動を行うときに起動オプションとして「コマンド+R」 キーを同時に押していることで、復元モードで Mac を起動することができます。

Apple サポート

よって”復元、再インストール”なので OS アップデートの場合は、一旦ダウンロード & アップデートインストールが必要になります。（クリーンインストールを考えている場合は時間がかかる）

インストール USB からクリーンインストールする方法
必ずバックアップ後に行ってください。復旧できなくなります。
