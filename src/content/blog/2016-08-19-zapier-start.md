---
draft: false
title: zapier で連携してみた
description: nuovotaka blog
publishDate: 2016-08-19T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - web
  - zapier
---

今回は先日稼働させた getsitecontrol と slack を連携したいと思います。

### zapier の始め方

[zapier のサイト](https://zapier.com)

#### sign up

#### Login

Login し連携できるアプリケーションを選択する

#### 連携の方法

まずは検索する

- getsitecontrol を探す
- slack を探す

いろいろと表示されますが一番下にあるもので行います。

- 点の部分でクリックすると下図のように表示されるので「Make A Zap」をクリックする

- getsitecontrol を選択
- getsitecontrol Trigger 設定
- getsitecontrol account チェック
- getsitecontrol Submission 設定
- getsitecontrol Submission Site URL を選択する
- contact widget を選択する
- getsitecontrol のテストを終了させ次へ

- slack を選択する
- slack の動作を設定する
- slack account のチェック
- slack のチャンネル メッセージの設定
- slack チャンネル メッセージの設定方法
- slack チェンネル メッセージの設定例
- slack チェンネル メッセージの設定をして次へ
- slack のテスト
- slack の設定完了

#### 作成した連携を動作させる

- 動作状態にするには ON にするだけです。

#### getsitecontrol の設定

- edit で integrations を選択
- email からの通知のチェックを外す

これで、メールではなく slack へメッセージが飛んでくることになる。
メッセージはダウンロードも可能で xlsx 形式なので表計算ソフトに対応しているため
一覧で見ることも可能だ。
