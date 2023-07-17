---
draft: false
title: Wordpressからhugoへ移行しました
description: nuovotaka blog
publishDate: 2015-11-27T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - wordpress
  - hugo
---

### Wordpress から Hugo へ移行しました

今まで**Wordpress.com**で書いていたブログも途中でおろそかになり書いていませんでした。
Mac で動作はサクサクなのですが、肝心の Wordpress のサイトが遅すぎて。。。

また、下書きをして訂正を読み返してから掲載するのにあの遅い Wordpress.com を幾度となく立ち上げなくてはいけません。
そのうち面倒になり書かなくなりました。
iPad を設定していましたが不具合などあり使えない。

しばらく別のブログサイトを使いましたが、そちらは、HTML5 ではなく古いテーマが豊富で"今"ではありませんでした。

っということで、いろいろと探していると GitHub 上で静的サイトのブログを立ち上げることができることを知りました。

### Hugo へ移行を決める

まずはどんな使い心地なのか？
`Homebrew`を使い`Hugo`をインストールし Mac 内に環境を作り、と言ってもフォルダを作成しそこで`Hugo`のコマンドを叩いただけです。

### 点在していたブログ記事をマークダウン方式に

一つは**Movable Type**, もう一つは**XML**でした。

先日**Movable Type**形式の記事を修正し画像を調節してホストできたので**WordPress**のエクスポートで出力される**XML**形式の記事を修正し先ほどあげることができました。

もっと多数の記事を書いていたのですが、古すぎてそぐわないものは消すことにしました。
また、リンクの切れている記事、qiita の記事と重複している記事も同様削除することにしました。

Wordpress の記事の移行には、[WordPress から Hugo に乗り換えました](http://rakuishi.com/archives/wordpress-to-hugo/)

**rakuishi**さんの以下のコード{{< gist rakuishi 3163f6e8c5a496329bc7 >}}を利用させていただきました。この場を借りてお礼申し上げます。

Movable Type の記事の移行には、**railsbros-dirk**さんの以下のコード{{< gist railsbros-dirk 2351046 >}}を利用させていただきました。
どちらのプログラムもそのままでは自分の記事に合わないので必要箇所を変更しすべての記事を**markdown 方式**に変更できました。

あと数点確認が終わったところで`/`ルートに置いてある`robots.txt`ファイルを外すつもりです。

#### Wordpress.org からと Wordpress.com からのエクスポート方法

###### wordpress.org から

**Wordpress**を org サイトからの場合は、エクスポートのプラグインが用意されています。
**wordpress.org**から**Hugo**へ移行される方のために[wordpress-to-hugo-exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter)

###### wordpress.com から

**wordpress.com**サイトではプラグインを使えませんので通常のエクスポートは先ほどの**XML**形式のファイルとなるわけです。
リンクの場所とテーブルの変換はされないようです
