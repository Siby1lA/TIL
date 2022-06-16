let widget = new ListWidget();

//dog api 불러오기
const url = "https://dog.ceo/api/breeds/image/random";
const req = new Request(url);
const res = await req.loadJSON();

let imgReq = new Request(res.message);
let img = await imgReq.loadImage();
widget.backgroundImage = img;

//120초마다 리프레쉬
widget.refreshAfterDate = new Date(Date.now() + 1000 * 120);

Script.setWidget(widget);
Script.complete();
