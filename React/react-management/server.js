const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PROT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "박수빈",
      birthday: "991213",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "이주연",
      birthday: "990000",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "김영준",
      birthday: "990000",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
