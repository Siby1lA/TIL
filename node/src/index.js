const express = require("express");
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro");
const app = express();
const kuroshiro = new Kuroshiro();
const fs = require("fs");
const CATEGORIES = [
  {
    title: "N5",
    subtitle: 300,
    chapter: [
      {
        id: "chapter1",
        page: "1장",
      },
      {
        id: "chapter2",
        page: "2장",
      },
      {
        id: "chapter3",
        page: "3장",
      },
      {
        id: "chapter4",
        page: "4장",
      },
      {
        id: "chapter5",
        page: "5장",
      },
      {
        id: "chapter6",
        page: "6장",
      },
    ],
  },
  {
    title: "N4",
    subtitle: 650,
    chapter: [
      {
        id: "chapter7",
        page: "1장",
      },
      {
        id: "chapter8",
        page: "2장",
      },
      {
        id: "chapter9",
        page: "3장",
      },
      {
        id: "chapter10",
        page: "4장",
      },
      {
        id: "chapter11",
        page: "5장",
      },
      {
        id: "chapter12",
        page: "6장",
      },
      {
        id: "chapter13",
        page: "7장",
      },
      {
        id: "chapter14",
        page: "8장",
      },
      {
        id: "chapter15",
        page: "9장",
      },
      {
        id: "chapter16",
        page: "10장",
      },
      {
        id: "chapter17",
        page: "11장",
      },
    ],
  },
  {
    title: "N3",
    subtitle: 950,
    chapter: [
      {
        id: "chapter18",
        page: "1장",
      },
      {
        id: "chapter19",
        page: "2장",
      },
      {
        id: "chapter20",
        page: "3장",
      },
      {
        id: "chapter21",
        page: "4장",
      },
      {
        id: "chapter22",
        page: "5장",
      },
      {
        id: "chapter23",
        page: "6장",
      },
      {
        id: "chapter24",
        page: "7장",
      },
      {
        id: "chapter25",
        page: "8장",
      },
      {
        id: "chapter26",
        page: "9장",
      },

      {
        id: "chapter27",
        page: "10장",
      },
      {
        id: "chapter28",
        page: "11장",
      },
      {
        id: "chapter29",
        page: "12장",
      },
      {
        id: "chapter30",
        page: "13장",
      },
      {
        id: "chapter31",
        page: "14장",
      },
      {
        id: "chapter32",
        page: "15장",
      },
      {
        id: "chapter33",
        page: "16장",
      },
      {
        id: "chapter34",
        page: "17장",
      },
      {
        id: "chapter35",
        page: "18장",
      },
      {
        id: "chapter36",
        page: "19장",
      },
    ],
  },
  {
    title: "N2",
    subtitle: 1450,
    chapter: [
      {
        id: "chapter37",
        page: "1장",
      },
      {
        id: "chapter38",
        page: "2장",
      },
      {
        id: "chapter39",
        page: "3장",
      },
      {
        id: "chapter40",
        page: "4장",
      },
      {
        id: "chapter41",
        page: "5장",
      },
      {
        id: "chapter42",
        page: "6장",
      },
      {
        id: "chapter43",
        page: "7장",
      },
      {
        id: "chapter44",
        page: "8장",
      },
      {
        id: "chapter45",
        page: "9장",
      },

      {
        id: "chapter46",
        page: "10장",
      },
      {
        id: "chapter47",
        page: "11장",
      },
      {
        id: "chapter48",
        page: "12장",
      },
      {
        id: "chapter49",
        page: "13장",
      },
      {
        id: "chapter50",
        page: "14장",
      },
      {
        id: "chapter51",
        page: "15장",
      },
      {
        id: "chapter52",
        page: "16장",
      },
      {
        id: "chapter53",
        page: "17장",
      },
      {
        id: "chapter54",
        page: "18장",
      },
      {
        id: "chapter55",
        page: "19장",
      },

      {
        id: "chapter56",
        page: "20장",
      },
      {
        id: "chapter57",
        page: "21장",
      },
      {
        id: "chapter58",
        page: "22장",
      },
      {
        id: "chapter59",
        page: "23장",
      },
      {
        id: "chapter60",
        page: "24장",
      },
      {
        id: "chapter61",
        page: "25장",
      },
      {
        id: "chapter62",
        page: "26장",
      },
      {
        id: "chapter63",
        page: "27장",
      },
      {
        id: "chapter64",
        page: "28장",
      },
      {
        id: "chapter65",
        page: "29장",
      },
    ],
  },

  {
    title: "N1",
    subtitle: 1450,
    chapter: [
      {
        id: "chapter66",
        page: "1장",
      },
      {
        id: "chapter67",
        page: "2장",
      },
      {
        id: "chapter68",
        page: "3장",
      },
      {
        id: "chapter69",
        page: "4장",
      },
      {
        id: "chapter70",
        page: "5장",
      },
      {
        id: "chapter71",
        page: "6장",
      },
      {
        id: "chapter72",
        page: "7장",
      },
      {
        id: "chapter73",
        page: "8장",
      },
      {
        id: "chapter74",
        page: "9장",
      },

      {
        id: "chapter75",
        page: "10장",
      },
      {
        id: "chapter76",
        page: "11장",
      },
      {
        id: "chapter77",
        page: "12장",
      },
      {
        id: "chapter78",
        page: "13장",
      },
      {
        id: "chapter79",
        page: "14장",
      },
      {
        id: "chapter80",
        page: "15장",
      },
      {
        id: "chapter81",
        page: "16장",
      },
      {
        id: "chapter82",
        page: "17장",
      },
      {
        id: "chapter83",
        page: "18장",
      },
      {
        id: "chapter84",
        page: "19장",
      },

      {
        id: "chapter85",
        page: "20장",
      },
      {
        id: "chapter86",
        page: "21장",
      },
      {
        id: "chapter87",
        page: "22장",
      },
      {
        id: "chapter88",
        page: "23장",
      },
      {
        id: "chapter89",
        page: "24장",
      },
      {
        id: "chapter90",
        page: "25장",
      },
      {
        id: "chapter91",
        page: "26장",
      },
      {
        id: "chapter92",
        page: "27장",
      },
      {
        id: "chapter93",
        page: "28장",
      },
      {
        id: "chapter94",
        page: "29장",
      },

      {
        id: "chapter95",
        page: "30장",
      },
      {
        id: "chapter96",
        page: "31장",
      },
      {
        id: "chapter97",
        page: "32장",
      },
      {
        id: "chapter98",
        page: "33장",
      },
      {
        id: "chapter99",
        page: "34장",
      },
      {
        id: "chapter100",
        page: "35장",
      },
      {
        id: "chapter101",
        page: "36장",
      },
      {
        id: "chapter102",
        page: "37장",
      },
      {
        id: "chapter103",
        page: "38장",
      },
      {
        id: "chapter104",
        page: "39장",
      },
      {
        id: "chapter105",
        page: "40장",
      },
      {
        id: "chapter106",
        page: "41장",
      },
    ],
  },
];

let isKuroshiroInitialized = false;

const trans = async (reibun) => {
  if (!isKuroshiroInitialized) {
    await kuroshiro.init(new KuromojiAnalyzer());
    isKuroshiroInitialized = true;
  }

  const result = await kuroshiro.convert(reibun, {
    mode: "furigana",
    to: "hiragana",
  });
  return result;
};

fs.readFile("src/data/TangoData.json", async (err, data) => {
  // 파일 읽기
  if (err) throw err;
  const tango = JSON.parse(data);
  const updatedTango = {};

  for (const category of CATEGORIES) {
    const { title, chapter } = category;
    updatedTango[title] = {};

    if (tango.hasOwnProperty(title)) {
      for (const chap of chapter) {
        const { id } = chap;
        updatedTango[title][id] = [];

        if (tango[title].hasOwnProperty(id)) {
          const origData = tango[title][id];
          const modifiedData = await Promise.all(
            origData.map(async (item) => {
              const { reibunFurigana, ...rest } = item;
              return {
                ...rest,
                reibunHtml: await trans(item.reibun),
              };
            })
          );
          console.log(modifiedData);
          updatedTango[title][id] = modifiedData;
        }
      }
    }
  }
  const updatedData = JSON.stringify(updatedTango);
  fs.writeFile("src/data/newTangoData.json", updatedData, (err) => {
    if (err) throw err;
    console.log("데이터가 성공적으로 수정되어 저장되었습니다.");
  });
});

app.get("/", (req, res) => {
  trans()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error occurred");
    });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
