# csvToJson.js

コンピテンシ一覧の CSV（./data/コンピテンシ.csv）から JSON（./data/competency.json）に変換するスクリプト

# index.js

`科目番号,科目名`

の科目番号と授業名の対応が書かれた CSV ファイル（./data/kdb\_\*\*\*\*.csv）と、授業名とコンピテンシの書かれた json(./data/competency.json)を利用して以下のような新たなオブジェクトを生成するプログラム

```
{
 "授業番号" {
     "name": "授業名",
     "単位数": 0,
     ...
 }
}
```

実行方法

```
$ yarn install
$ node index.js
```

科目番号と授業名の対応が書かれた CSV ファイル上に、json で記述された授業名が存在しない場合はエラーログが出力される
例

```
ﾘｽｸ･ﾚｼﾞﾘｴﾝｽ工学修士特別講義(情報知能災害ﾘｽｸﾏﾈｼﾞﾒﾝﾄ) is undefined
```

その際は自力で./data/competency.json の授業名を KdB 表記に改める。
