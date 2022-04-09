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

const csPoint = JSON.parse(fs.readFileSync("../data/point.json", "utf8"));
const csPointResult = Object.fromEntries(
  Object.keys(csPoint).map((className) => {
    if (parsedKdBData[className]) {
      csPoint[className]["name"] = className;
      return [parsedKdBData[className], csPoint[className]];
    } else {
      console.error(`${className} is undefined`);
      return [];
    }
  })
);

fs.writeFileSync("./data/output.json", JSON.stringify(csPointResult, null, 2));
