---
draft: false
title: BlogのテーマをTwenty Nineteenに変更
description: nuovotaka blog
publishDate: 2019-10-07T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - web
  - theme
---

Hugo(静的サイトジェネレーター)で使用しているテーマを WordPress から移植したテーマである[Twenty Nineteen Hugo](https://themes.gohugo.io/twentynineteen-hugo/)に変更した。

favicon.ico の設置や Google アドセンスや Google アナリティクスの設置などを紹介。

### favicon の設置

`baseof.html`を`themes>twentynineteen-hugo>layouts>_default`からコピーする。
そして、`layouts>_default`のフォルダを作成してそこへペーストしてください。

```
❯ tree layouts
layouts
├── 404.html
├── _default
│         └── baseof.html  # themesからコピーしてきたファイル
├── partials
└── shortcodes
```

下記(`baseof.html`の一部)の`favicon`から`favicon end`までに設置し、
ファイルを`static`フォルダ下へ。

```
<!doctype html>
<html lang="{{ with .Site.LanguageCode}}{{ . }}{{ else }}en-US{{end}}">
<head>
	<meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>{{ if .Title }} {{ .Title }} | {{ end }}{{ $.Site.Title }}</title>

<!-- favicon -->
  <link rel="icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
<!-- favicon end -->

  {{ $themeScss := "scss/main.scss" }}
  {{ $options := (dict "targetPath" "css/main.css" "outputStyle" "compressed") }}
  {{ $themeCss := resources.Get $themeScss | resources.ExecuteAsTemplate $themeScss . | toCSS $options | minify | fingerprint }}
  <link rel="stylesheet" href="{{ $themeCss.RelPermalink }}" integrity="{{ $themeCss.Data.Integrity }}" media="screen">

  {{ block "header_scripts" . }}
  <!-- Optional header scripts -->
  <script data-ad-client="ca-pub-01234567890123456" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  {{ end }}

  {{ block "header_styles" . }}
  <!-- Optional header styles -->
  {{ end }}
</head>

```

### Google アドセンスの設置

下記(`baseof.html`の一部)の`Optional header scripts`の中へスクリプトを設置。下記コードの pub の ID はサンプルになっていますのでご自身で変更してください。

```
<!doctype html>
<html lang="{{ with .Site.LanguageCode}}{{ . }}{{ else }}en-US{{end}}">
<head>
	<meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>{{ if .Title }} {{ .Title }} | {{ end }}{{ $.Site.Title }}</title>

<!-- favicon -->
  <link rel="icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
<!-- favicon end -->

  {{ $themeScss := "scss/main.scss" }}
  {{ $options := (dict "targetPath" "css/main.css" "outputStyle" "compressed") }}
  {{ $themeCss := resources.Get $themeScss | resources.ExecuteAsTemplate $themeScss . | toCSS $options | minify | fingerprint }}
  <link rel="stylesheet" href="{{ $themeCss.RelPermalink }}" integrity="{{ $themeCss.Data.Integrity }}" media="screen">

  {{ block "header_scripts" . }}
  <!-- Optional header scripts -->
  <script data-ad-client="ca-pub-01234567890123456" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  {{ end }}

  {{ block "header_styles" . }}
  <!-- Optional header styles -->
  {{ end }}
</head>

```

こちらを設置すると自動的に広告をブログ内の空いている所によしなに設置してくれます。
スマホ、タブレットなどでは、上下の所にスライドで広告が表示されたりします。
また、ページ遷移のあった時に全画面広告が表示されるようになっているようです。

それらの設定は、Google アドセンスへログインしていただき変更することも可能です。

私は、設定をそのままにしています。

### Google アナリティクスの設置

`config.toml`ファイル(ご自身の設定ファイル)へ以下を追加してください。

```
googleAnalytics = "UA-xxxxxxxx-x" # optional
```
