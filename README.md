# Express テンプレート

## 概要

Express + TypeScript ベースの開発テンプレートになります

主な構成

- サーバー側　 → 　 Express + Sequelize(MySQL)
- フロント側　 → 　 jQuery + SCSS + Webpack

## 使い方

本リポジトリを取得し、npm install して使用してください  
npm-scripts に関しては[wiki](https://github.com/digitalstage/ExpressPlate/wiki/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E4%B8%80%E8%A6%A7%EF%BC%88npm-scripts%EF%BC%89)を参照してください

※DB を扱う場合は src/server/config/db.ts の設定を変えてください

## 動作環境

```
node v10.15.3
npm v6.4.1
```

※１．基本的に node v8 以降であれば動くかと思います（v12 も動作確認済み）  
※２．sass-loader を使用しているので node のバージョンを変えた場合は node-sass のリビルド`npm rebuild node-sass`が必要になります。

## その他

詳しくは[こちら](https://github.com/digitalstage/ExpressPlate/wiki)を参照してください
