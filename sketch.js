let myFont;
function preload() {
  myFont = loadFont("spacegrotesk-medium.otf");
}

let pg;
function setup() {
  createCanvas(1200, 600);

  pg = createGraphics(1200, 600);

  pg.fill("#fff");
  pg.textFont(myFont);
  pg.textSize(500);
  pg.textAlign(CENTER, CENTER);
  pg.text("ooo", 600, 300);
}

function draw() {
  background("#000")
  const tileSize = 30;
 
    for (let y = 0; y < 16; y = y + 1) {
      
     
      
      let position = winMouseX / windowWidth
      position = easeInOutCubic(position)
      
      //source
      const sx = 0
      const sy = y * tileSize * position
      const sw = 1200
      const sh = tileSize * position + (600-tileSize) * (1-position)
      
      //Destination
      
      const dx = 0
      const dy = y * tileSize
      const dw = 1200
      const dh = tileSize  
      
      
      
     image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }

}
