let widget = new ListWidget();

//dog api 불러오기
const url = "https://api.thecatapi.com/v1/images/search?format=json";
const req = new Request(url);
const res = await req.loadJSON();

let imgReq = new Request(res[0].url);
let img = await imgReq.loadImage();
widget.backgroundImage = img;

//120초마다 리프레쉬
widget.refreshAfterDate = new Date(Date.now() + 1000 * 120);

Script.setWidget(widget);
Script.complete();
