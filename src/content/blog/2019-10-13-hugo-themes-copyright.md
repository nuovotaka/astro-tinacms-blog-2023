---
draft: false
title: Blogにコピーライトを設置
description: nuovotaka blog
publishDate: 2019-10-13T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - web
  - theme
---

Hugo(静的サイトジェネレーター)で使用しているテーマを WordPress から移植したテーマである[Twenty Nineteen Hugo](https://themes.gohugo.io/twentynineteen-hugo/)にコピーライトを設置。

### Copyright の設置

#### HTML コード

`footer.html`を`themes>twentynineteen-hugo>layouts>partials`からコピーする。
そして、`layouts>partials`のフォルダを作成してそこへペーストしてください。

```
❯ tree layouts
layouts
├── 404.html
├── _default
│         └── baseof.html
├── partials
│         └── footer.html
└── shortcodes
```

下記(`footer.html`)の`site-copyright`から`<!-- .site-copyright -->`までに設置。

```
<footer id="colophon" class="site-footer">
		{{ partial "footer/footer-widgets" . }}

		<div class="site-info">
			<a class="site-name" href="{{ .Site.BaseURL }}" rel="home">{{ .Site.Title }}</a>,
			<a href="https://gohugo.io" class="imprint">
				Proudly powered by Hugo
			</a>

			{{ with .Site.Params.privacy_link }}
				<a href="{{ . }}" class="privacy-policy-link">Privacy Policy</a><span role="separator" aria-hidden="true"></span>
			{{ end }}

			<nav class="footer-navigation" aria-label="Footer Menu">
				<ul id="menu-footer" class="footer-menu">
					{{ range .Site.Menus.footer }}
					<li class="menu-item">
						<a href="{{ .URL }}">{{ .Name }}</a>
					</li>
				{{ end }}
				</ul>
			</nav><!-- .footer-navigation -->
		</div><!-- .site-info -->
		<div class="site-copyright">
				<p>{{ .Site.Copyright }}</p>
		</div><!-- .site-copyright -->
	</footer><!-- #colophon -->

```

#### CSS(scss)コード

`assets>scss>site>footer`をルート以下へ追加し`_site-footer.scss`を`themes>twentynineteen-hugo>assets>scss>site>footer`以下からコピーしてくる。
コードの最後の`copyright`部分を追加

```
/* Site footer */

#colophon {

	.widget-area,
	.site-info {
		margin: calc(2 * #{$size__spacing-unit}) $size__spacing-unit;

		@include media(tablet) {
			margin: calc(3 * #{$size__spacing-unit}) $size__site-margins;
		}
	}

	.widget-column {
		display: flex;
		flex-wrap: wrap;
		.widget {
			width: 100%;
			@include media(desktop) {
				margin-right: calc(3 * #{$size__spacing-unit});
				width: calc(50% - (3 * #{$size__spacing-unit}));
			}
		}
	}

	.site-info {
		color: $color__text-light;

		a {
			color: inherit;

			&:hover {
				text-decoration: none;
				color: $color__link;
			}
		}

		.imprint,
		.privacy-policy-link {
			margin-right: $size__spacing-unit;
		}
	}
	/* site Copyright */
	.site-copyright {
		font-size: 0.6em;
		color: #767676;
		text-align: center;
	}
}

```

カラー、フォントサイズなどは適宜変更してください。

#### config.toml に追加

以下の様に設定に追加する。

```
copyright = "© 2015 dev.NUOVOTAKA"
```
