---
draft: false
publishDate: 2022-12-14T09:00:00+09:00
title: 'MacBook Pro のクリーンインストール'
description: 'ドットファイルに問題が！！Zinit で不具合発生、原因は？'
author: nuovotaka
categories:
  - computer
tags:
  - mac
  - os
---

## MacBook Pro のクリーンインストールを実施(備忘録)

マックの中にドットファイル(隠しファイル)というものがありますが、それが色々と増えまして所謂ゴミファイル。

使っているものもありますが途中で利用を中止してしまったものもありそれらを一掃するために一昨日頃からクリーンインストールを実施しておりました。

### 手順　(準備と OS のインストール)

1. `brew bundle dump --global --force` で Brewfile を作成しこれを元に後ほど必要なアプリなどをインストールする。
2. 個人の必要なファイルは USB などに保存。
3. 私の場合は、ウォールペーパーやアイコン、その他書類などを USB に保存している。
4. GitHub のデータは GitHub 上にあるので git のメルアドと名前などを控えておけばいいだろう。
5. macOS の USB のリカバリーディスクを作ってある人は USB を指す。
6. MacBook Pro の SSD を初期化する。 `⌘＋R` で電源オン。
7. ディスクユーティリティを使って `Data` `System` をそれぞれ消去する。
8. `Data` は削除したらアンマウントしてそれも削除する。
9. システムは消去しておくだけで OK。マウントを削除すると後に復旧が立ち上がらなくなるので消去だけにとどめること。
10. 次に OS のインストール。 `option + 電源` 直近の最新 OS をインストールできる。(その Mac でインストールできる)
11. USB のリカバリーからインストールを行う。(無い人はインターネットからのインストールになるので時間が掛かる)
12. インストール後初期設定をして Mac が使用できるようになったら次の手順。

### 手順　(dotfiles による半自動設定)

1. GitHub 上に上げてある設定ファイルを利用して MacBook Pro の設定を行う。
2. コマンドラインツールまたは Xcode のインストール(今回は、CLT をデベロッパーからインストール後で Xcode のインストールを行なった。python などは Xcode の SDK を使っているので CLT だけでなく Xcode をインストールした方が良いだろう。MBPR late2013 の場合)
3. App Store のサインイン
4. `sudo curl -o - [https://raw.githubusercontent.com/nuovotaka/dotfiles/main/install](https://raw.githubusercontent.com/nuovotaka/dotfiles/main/install) | sh` ターミナルにてこのコマンドを実行すると半自動で設定を行なってくれる。
5. 念のため管理者権限でのインストールを行う。
6. 今回は管理者権限でのインストールを求められたので一応上のように `sudo` としておく。
7. `stow` でリンクも貼ってくれるはずなのだが、階層が深すぎるとダメなのだろうか `Ybai` や `skhd` などはリンクが貼れなかった。 `.config` 以下へフォルダを作成しファイルを手動で dotfiles からコピペした。
8. シェルは Z-shell になったので Z-shell を利用しているが、 `zinit` というものがある。これを設定するはずなのだが、今回 `404` でエラーになっていた。

   [zsh の zinit (旧 zplugin) が消滅しちゃったよ！ 経緯と解決法 - Qiita](https://qiita.com/taiyodayo/items/c1ebdc863e6baa18ea06)

   どうやら色々とあったみたいで本家さんが怒っちゃったみたい。

9. 今回は `Zi` を入れることにした。

   [⚡️ Installation | Z-Shell](https://wiki.zshell.dev/docs/getting_started/installation)

10. vim は、`~~Vundle.vim~~` `Neovim` を利用している。(現在、VScode が主なエディター)

手順　(必要な設定など)

1. git の設定(リンクを貼ってくれると思うのだが貼れていない場合は手動で)
2. GitHub へのサインイン
3. VScode の同期
4. Yabai & skhd `brew services start yabai` `brew services start skhd` サービスのスタート
5. ターミナルの設定 `bash maos_defaults`
6. ウォールペーパーの変更
7. アイコンの変更
8. App のインストール(1password, Craft, Notion, Miro, Dropbox, Ledger live, GitHub Desktop, Davinci Resolve)
9. カラビナーの設定(日本語キーボードの方は不要)

今回は zinit のところで躓いたのでクリーンインストールを２回行いましたが `dotfiles` が正常に動作すればほぼ全てのアプリをインストールして必要ファイルのリンクを貼ってくれるので助かります。

ファイルを探してインストールすると時間がかかってしまいますが、ファイルにしておくと忘れることもないです。

### 今回利用した `Zi` については下記のブックマークを参照のこと

[GitHub - z-shell/zi: ✨ A Swiss Army Knife for Zsh - Unix Shell](https://github.com/z-shell/zi)

### 追記

`stow`　のリンクを貼るところでコンフリクトを起こしていたみたいで上手くその先へのロジックに進まなかったみたいだ。

修正してリンクで被っていたところを消しやり直してみたらできた。リンクも貼ることができた。

vim に `Neovim`　を設定してみた。多分ほとんど使わないと思うけれど一応。CLI 用のエディターとして設定しておく。

結局、都合３回のクリーンインストールを行なった。

`install` シェルスクリプトは各セクション正常終了で次に進む。ダメだと途中で止まってしまうので再度ダウンロードされた `dotfiles`　を利用してインストールを行うとうまくリンクが貼れた。
