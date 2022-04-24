"use strict";

const fs = require("fs");
const { parse } = require("csv-parse/sync");

const KdBdata = fs.readFileSync("./data/kdb_20220408222918.csv", "utf8");
const parsedKdBData = Object.fromEntries(
  parse(KdBdata, { columns: true }).map((elm) => [
    elm["科目名"],
    elm["科目番号"],
  ])
);

const competencyList = JSON.parse(
  fs.readFileSync("./data/competency.json", "utf8")
);

const result = Object.fromEntries(
  competencyList.map((classInfo) => {
    if (parsedKdBData[classInfo["名前"]]) {
      return [parsedKdBData[classInfo["名前"]], classInfo];
    } else {
      console.error(`${classInfo["名前"]} is undefined`);
      return [];
    }
  })
);

fs.writeFileSync(
  "./data/achievementScores.json",
  JSON.stringify(result, null, 2)
);
