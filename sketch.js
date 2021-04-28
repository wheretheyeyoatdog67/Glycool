var page = 0;
function preload() {
  bg = loadImage('bg.png');
  pg2 = loadImage('pg3.png');
  pg3 = loadImage('pg2.png');
}
function setup() {
  createCanvas(1880, 920);
}

function draw() {
  background(0);
  if(page ==0){
    image(bg,0,0);
    fill(0, 102, 153);
    textSize(140);
    text('GlyCool', width/2-200, height/2-20);
    textSize(59);
    text('Building a Better Tomorrow, Today', width/2-190, height/2+50);
  }
  if(page ==1){
    image(pg2,0,0,width,height);

  }
  if(page ==2){
    image(pg3,0,0,width,height);

  }

}

function mouseClicked() {
  if (page === 0) {
    page = 1;
  }
  else if (page === 1) {
    page = 2;
  }


  else {
    page = 0;
  }
}
