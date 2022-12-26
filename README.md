# octo-campus

## 実行方法

```shell
# デバグ用実行
yarn serve

# デプロイ用ビルド
yarn build
```

## 補足

ディレクトリ内でのファイルの順序は定義できなさそう。  

[公式ページ](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/react-apollo-hooks/tutorial-site/content)でも順序を指定するのに、ファイル名の先頭に数字を付けて制御していたため、ここでもその方法を採用する。  

---

困ったときは`gatsby clean`で一度クリーンな状態にしてから`yarn build`を実行する。  

## 参考文献

- <https://github.com/hasura/gatsby-gitbook-starter>
