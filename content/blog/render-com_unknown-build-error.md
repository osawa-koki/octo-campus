# Render.comでの不明なビルドエラー

ローカルではビルドに成功するDockerコンテナがRenderにデプロイするとなぜかビルドエラーになるという、、、  

## 解決方法

「Settings > Deploy Hook」から強制的に再デプロイを実行する。  

---

同じソースコードでも成功するときと失敗するときがあるのは本当に謎です、、、  

![render-com_unknown-build-error](./img/render-com_unknown-build-error.png)  
