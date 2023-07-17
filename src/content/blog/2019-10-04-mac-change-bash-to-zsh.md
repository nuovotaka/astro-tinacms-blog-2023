---
draft: false
title: 備忘録 - Macのshellをbashからzshに変更
description: nuovotaka blog
publishDate: 2019-10-04T09:00:00+09:00
author: nuovotaka
categories:
  - computer
tags:
  - mac
  - shell
---

2019 年 10 月の OS アップデートで採用される OS のシェルが zsh シェルになるそうです。
そのままでも`bash`を使い続けることができるのですが、`zsh`に乗り換えてみました。

zsh のインストール、設定変更、アップデート、アンインストール方法を以下に。

### zsh インストール

- Homebrew 経由でインストール

```
brew install zsh
```

- zsh を起動してセットアップ

```
zsh
```

すると`This is the Z Shell configuration function for new users,
zsh-newuser-install.`の表示が出たら`(1)  Continue to the main menu.`を選択。

続けて、`options`の設定に入りますので`(0)  Exit, creating a blank ~/.zshrc file.`を選択して`zshrc`のブランクファイルを作ります。

コメントのみの`~/.zshrc`が作成される。が、一旦下記のコマンドで削除しておく。

```
rm ~/.zshrc
```

- Prezto をセットアップ

[Prezto のリポジトリ](https://github.com/sorin-ionescu/prezto)の README を参照

下記コマンドを実行する。

```
git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
```

続けて

```
setopt EXTENDED_GLOB
for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
  ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
done
```

- ログインシェルの変更

```
sudo vi /etc/shells
```

以下の記述を最後の行に追加する(`which zsh`で表示された path を記述する)

```
/usr/local/bin/zsh
```

以下のコマンドを実行しログインシェルを`zsh`に変更する。

```
chsh -s /usr/local/bin/zsh
```

- bash 環境からの設定引き継ぎ

```
cat .bash_profile >> .zprofile
cat .bashrc >> .zshrc
```

### Prezto 設定の追加＆変更

- プロンプトの変更

```
#
# Prompt
#

# Set the prompt theme to load.
# Setting it to 'random' loads a random theme.
# Auto set to 'off' on dumb terminals.
zstyle ':prezto:module:prompt' theme 'pure' #sorin を pure に変更
```

- モジュールの追加

```
# Set the Prezto modules to load (browse modules).
# The order matters.
zstyle ':prezto:load' pmodule \
  'environment' \
  'terminal' \
  'editor' \
  'history' \
  'directory' \
  'spectrum' \
  'utility' \
  'completion' \
  'syntax-highlighting' \ #追加
  'autosuggestions' \ #追加
  'prompt'
```

### Prezto アップデート

```
cd ~/.zprezto
git pull && git submodule update --init --recursive
```

### Prezto アンインストール

```
rm -rf ~/.zprezto ~/.zlogin ~/.zlogout ~/.zpreztorc ~/.zprofile ~/.zshenv ~/.zshrc
```

#### 参考サイト

- [Prezto(github)](https://github.com/sorin-ionescu/prezto)
- [Mac で bash から zsh へお引越しする方法](https://qiita.com/AirBeans5956/items/6a00443c6118d7d3f5f4)
- [お前らのターミナルはダサい](https://qiita.com/kinchiki/items/57e9391128d07819c321)
- [Mac に zsh と prezto のインストール&アンインストール、諸々設定](https://qiita.com/s_s_satoc/items/e3c1b9b3545fd572dd1c)
