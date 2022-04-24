"use strict";
const fs = require("fs");
const { parse } = require("csv-parse/sync");
const competencydata = fs.readFileSync("./data/コンピテンシ.csv", "utf8");
const parsedcompetencyData = parse(competencydata, {
  columns: true,
  cast: true,
});

fs.writeFileSync(
  "./data/competency.json",
  JSON.stringify(parsedcompetencyData, null, 2)
);
