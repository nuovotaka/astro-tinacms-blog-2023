---
draft: false
title: About Wercker Yaml file
description: nuovotaka blog
publishDate: 2015-11-25T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - github
  - blog
---

### こちらで [NOT FOUND WERCKER YAML FILE](http://blog.nuovotaka.com/2015/11/not-found-wercker/) を書きました。

タブスペースについて。(インデントについて)

日本語で言うところの字下げの事。
Wercker の公式サイトで字下げを４にして書かれている`wercker.yml`のサンプルコードがありますが、同じように字下げを４にして試してみましたが動作しませんでした。

正解例

```
box: debian
build:
  steps:
    - arjen/hugo-build:
        version: "0.14"
```

失敗例

```
box: debian
build:
    steps:
        - arjen/hugo-build:
            version: "0.14"
```

`steps:`部分を`build:`に続けて字下げし`-`ダッシュで始まるコード群を字下げするとかなり深くなるのがわかります。

また、`Docker`を使っていますが上記の方のコード内で`apt-get update`を走らせているのでスクリプトを追加しなくても大丈夫のようです。

### Docker を利用する、利用しない問題

私の場合は、(2015/11/25 時点で)Docker を利用して`build and deploy`しています。
少し前の記事だと box も docker を使わないもので yml ファイルもそれ用に変更して利用しているようですが、うまくワークしませんでした。

そのため、`hugo-build`のコードを書かれた方も`docker`を利用しているようなので`Docker`でアプリケーションを作成するようにしました。

###### 作成時の注意

アプリケーション作成時`Setup your Wercker.yml`の項目では`Docker enabled. See our ...`のチェックを入れて**Next step**を押下します

あとは前回の記事のコードをコピペ（タブスペースに気をつけて！）すればビルドが走ると思います。

### wercker.yml 内の domain と config.toml 内の baseurl について

[ユーザーアカウント].github.io でホストするリポジトリに A レコードを設定していています。
そして、別リポジトリでもう一つを`gh-pages`としてホスト下ものへ cname でサブドメインを当てています。

CNAME ファイルを`static`フォルダへ追加すればサブドメイン運用ができるかと思ったのですが、そのままではダメでした。
必ず、`wercker.yml`ファイル内に`domain`を追加しそこへサブドメイン入りの`domain`を追加してください。

そして、`config.toml`ファイルへはそのドメインを`baseurl`に設定します。
これは、`css, images` などの相対パス指定したファイルの読み込みが行われなくなってしまうので、かならず、設定を合わせるようにしてください。

先の`CNAME`ファイルは、`wercker.yml`で設定された`domain`により生成されるのであらかじめ`CNAME`ファイルを用意しても無視されますのでご注意ください。
