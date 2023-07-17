---
draft: false
publishDate: 2021-10-18T09:00:00+09:00
title: Macのクリーンインストールを行いました
description: nuovotaka blog
coverSVG: ../../assets/svg/undraw/undraw_blog_post.svg
socialImage: ../../assets/undraw/undraw_blog_post.png
author: nuovotaka
categories:
  - computer
tags:
  - dotfiles
  - mac
---

### クリーンインストール

４年ぶりにクリーンインストールを行いました。
OS のアップデートの度に 32bit ソフトウェアのゴミが出ていたのでそれを排除したくて行いました。

dotfiles を作成できたので必要なライセンスのバックアップなどを行い MacOS の削除やデータの削除を行いました。

システムとデータが分離されたのでクリーンインストールする場合はどちらも削除する必要があります。
ディスクユーティリティーでディスクの中をのぞくと`- Data`というファイルができているのがわかるかと思います。

### クリーンインストール前に

- タイムマシンでバックアップ(一応)
- Mac を探すのチェックを外す
- ライセンスのあるものはライセンスを USB などに保存。(当方は 1password で必要でした)
- AppStore で購入したものは AppleID に紐ついていますので OK でした。
- dropbox の現在のログインしている端末の削除(login するときでも大丈夫)

### システムとデータの削除の仕方(Intel Mac)

- 電源再入後`command ⌘ + R`で復旧画面を表示させてディスクユーティリティーで行います。

### OS のインストール

- 個体にもよりますが 30〜45 分程度でインストールが完了するかと思います。

### Mac の設定

- 各自設定を行う。
- AppleID, wifi, など

### dotfiles を使って設定

xcode のインストールが必要です。
また、Command Line Tools も必要になるので`xcode-select --install`を行う。

ここで、xcode を起動して誓約書などに許可をしておく。出ないとインストール時に止まってしまう。

[私の dotfiles](https://github.com/nuovotaka/dotfiles) にてコマンドをコピーしてターミナルに貼り付けてエンターキー押下。

途中で止まってしまった後は、`cd dotfiles`でディレクトリ移動。
`./install`でプログラムを再実行することで必要な箇所のみ実行されるようになっています。

### macos defaults での設定

この処理は OS のアップデートなどで使えなくなる場合があります。
`dotfiles`のディレクトリで`./macos_defaults`を実行。

- セキュリティーのファイアーウォールを入。
- Dock を左にして大きさを調整、最近使用したアプリを Dock に残さない設定。
- トラックパッドのタップでクリックを設定。

### 手動で設定しないといけない設定項目を設定

- AppleID(iCloud)など。
- スリープとスクリーンセーバー解除にパスワードを要求。
- 共有のコンピューター名。(自動で設定できるがオープンな情報として載せる項目ではないので手動で)。
- インターネットアカウント(メールなど)。

以上、概ねこの順番で
