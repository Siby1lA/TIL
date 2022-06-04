let widget = new ListWidget();

let imgReq = new Request("https://picsum.photos/500/300?grayscale");
let img = await imgReq.loadImage();
widget.backgroundImage = img;

//명언 api 불러오기
const url = "https://meigen.doodlenote.net/api/json.php";
const req = new Request(url);
const res = await req.loadJSON();

titleText = widget.addText(res[0].meigen);
widget.addSpacer(20);
titleText2 = widget.addText("- " + res[0].auther + " -");

titleText.centerAlignText();
titleText.font = Font.regularSystemFont(18);
titleText2.rightAlignText();

//120초마다 리프레쉬
widget.refreshAfterDate = new Date(Date.now() + 1000 * 120);

Script.setWidget(widget);
Script.complete();
