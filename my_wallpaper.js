// parameter variables

let cellSize = 250;

let scale_factor = 1.5; // adjust this to scale the main eye ball
let colourScheme = 2; // number 0, 1 or 2
let noseLook = 0; //number 0, 1 or 2 
let wallpaperDesign = 1; //number 0, 1 or 2 
let wallpaperColour = 0; //number 0, 1 or 2 



angleMode(DEGREES);
function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cellSize;
  pWallpaper.grid_settings.cell_height = cellSize;
  pWallpaper.grid_settings.row_offset  = 125;
}


// wallpaper statements
function wallpaper_background() {
  if (colourScheme ==0) {
  background(125,81,80);
}
  else if(colourScheme ==1) { 
  background(216,150,255);
  }
  else{
   background(201,223,138)
  }
}

//STARTING THE MAIN SHAPES & DESIGN
function my_symbol() {
  noStroke();

  // define center of cell
  let cx = cellSize / 2;
  let cy = cellSize / 2;
  // base size to scale from
  let base = cellSize;


 // BACKGROUND DESIGN COLOUR

 //low opacity purple
if (wallpaperColour ==0) {
fill(82,0,58,100);
}
//low opacity orange
else if( wallpaperColour ==1) {
fill(169,134,0,80);
}
//low opacity dark blue
else if (wallpaperColour ==2) {
fill(51,0,123, 80)
}

// BACKGROUND DESIGN

// cheek shape...
if (wallpaperDesign ==0) {
arc(0, 0, 150, 150, 0, 90);
arc(cellSize, 0, 150, 150, 90, 180);
}
// zigzag design
else if(wallpaperDesign ==1) {
beginShape();
vertex (0, cy*2/4);
vertex (0, cy*2/4);
vertex (cx*1/4, 0);
vertex (cx*2/4, 0);
endShape();

beginShape();
vertex (cx+cx, cy*2/4);
vertex (cx+cx, cy*2/4);
vertex (cx+(cx*3/4), 0);
vertex (cx+(cx*2/4), 0);
endShape();


}
// arrow design
else if(wallpaperDesign ==2) {
rectMode(CENTER);
rect(cx, cy*1.5, 50, 125);
triangle(cellSize,0, cx+(cx*1/2), 0, cellSize, cy+(cy*-1/2));
triangle(cellSize,0, cx+(cx*1/2), 0, cellSize, cy+(cy*-1/2));
}

//Additional shading for the triangular design & arrow design

if (wallpaperColour ==0) {
fill(82,0,58,60)
}
else if (wallpaperColour ==1) {
fill(169,134,0,40)
}
else if (wallpaperColour ==2) {
fill(51,0,123, 80,80)
}
if(wallpaperDesign==1){
beginShape();
vertex (cx+cx, cy*3/4);
vertex (cx+cx, cy*2/4);
vertex (cx+(cx*3/4), 0);
vertex (cx+(cx*2/4), 0);
endShape();

beginShape();
vertex (0, cy*3/4);
vertex (0, cy*2/4);
vertex (cx*1/4, 0);
vertex (cx*2/4, 0);
endShape();
}
if (wallpaperDesign ==2) {
triangle(0,0, cx+(cx*-1/2), 0, 0, cy+(cy*-1/2));
}


//EYEBALL

// white eye
fill(255); 
  ellipse(cx, cy, scale_factor*110, scale_factor*130); 

// eye colour. statements
if (colourScheme ==0) {
  fill(100,25,45); 
ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*67.5, scale_factor*60);}
  else if(colourScheme ==1) { 
  fill(104,199,202);
  ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*67.5, scale_factor*60);}
  else{ fill(245,190,66)
  ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*67.5, scale_factor*60);}

fill(0); //black pupil
ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*40, scale_factor*40);

//EYELID

//eyelid colour statements
if (colourScheme ==0) {
  fill(115,65,31); }
  else if(colourScheme ==1) { 
  fill(190,41,236);
  }
  else{fill(89,129,24)}

//eyelid shape itself
  beginShape();
  vertex(0, 0); 
  vertex(
    cx + (base * -1/4 * scale_factor), 
    cy + (base *  0  * scale_factor)
  );
  bezierVertex(
    cx + (base * -1/4 * scale_factor), 
    cy + (base * -7/20 * scale_factor), 
    cx + (base *  1/4 * scale_factor), 
    cy + (base * -7/20 * scale_factor), 
    cx + (base *  1/4 * scale_factor), 
    cy + (base *  0  * scale_factor)
  );
vertex(
  cx + (base *  1/4 * scale_factor), 
  cy + (base *  0  * scale_factor)
);
bezierVertex(
    cx + (base * 1/4 * scale_factor), 
    cy + (base * 3/20 * scale_factor), 
    cx + (base *  -1/4 * scale_factor), 
    cy + (base * 3/20 * scale_factor), 
    cx + (base *  -1/4 * scale_factor), 
    cy + (base *  0  * scale_factor)
  );
  endShape(CLOSE);

//EYELID SHADOW

fill(0, 0, 0, 40) // slightly transparent shadow 
beginShape(); 
vertex(cx + (cx*-2.3/5 * scale_factor), cy + (cy* -1.1/4 * scale_factor));
vertex(
  cx + (base * -0.15 * scale_factor),
  cy + (base * -1/4 * scale_factor)
);
bezierVertex(
  cx + (base * 1/7 * scale_factor),
  cy + (base * -1.1/4 * scale_factor),
  cx + (base * -1/10 * scale_factor),
  cy + (base * -2/5 * scale_factor),
  cx + (base * -2/25 * scale_factor),
  cy + (base * 0 * scale_factor)
);
bezierVertex(
  cx + (base * -2/25 * scale_factor),
  cy + (base * 3/20 * scale_factor),
  cx + (base * -1/4 * scale_factor),
  cy + (base * 1/20 * scale_factor),
  cx + (base * -1.3/5 * scale_factor),
  cy + (base * 0 * scale_factor),
)
endShape(CLOSE);

//SHADOW COVER UP - unseen cover up fo the shadow on the eyelid
noFill();
if (colourScheme ==0) {
  stroke(125,81,80); }
  else if(colourScheme ==1) { 
  stroke(216,150,255);
  }
  else{stroke(201,223,138);}
strokeWeight(16*scale_factor);
let shadowCover = scale_factor*1.12
beginShape();
  vertex(
    cx + (base * -1/4 * shadowCover), 
    cy + (base *  0  * shadowCover)
  );
  bezierVertex(
    cx + (base * -1/4 * shadowCover), 
    cy + (base * -7/20 * shadowCover), 
    cx + (base *  1/4 * shadowCover), 
    cy + (base * -7/20 * shadowCover), 
    cx + (base *  1/4 * shadowCover), 
    cy + (base *  0  * shadowCover)
  );
vertex(
  cx + (base *  1/4 * shadowCover), 
  cy + (base *  0  * shadowCover)
);
endShape();



//NOSES & COLOURS
noStroke();

//DARKER SHADES ON THE LEFT

//dark nose lower colour
if (colourScheme == 0) {
fill(115,65,31); 
}
// pink nose lower colour
if (colourScheme == 1) {
fill(190,41,236); 
}
//green nose lower colour
if (colourScheme ==2) {
fill(89,129,24); 

}

//NOSE SHAPE ON THE LEFT (GREEN NOSE ALL IN ONE IF.)

// dark nose lower layer
if (noseLook == 0) {
arc(0, cy+(cy*scale_factor*1/2), scale_factor*70, scale_factor*40, 270, 90);
arc(0, cy+(cy*scale_factor*0.6/2), scale_factor*30, scale_factor*60, 270, 90);
}
//pale nose lower layer
if(noseLook ==1) {  
arc(0, cy+(cy*scale_factor*0.6/2), scale_factor*50, scale_factor*40, 270, 90); 
}
//green nose layer
if (noseLook ==2){
ellipse(cx+(cx*-1.7/2), cy+(cy*1.45/2), scale_factor*15, scale_factor*20);
ellipse(cx+(cx*1.7/2), cy+(cy*1.45/2), scale_factor*15, scale_factor*20);
}

//LIGHT SHADES ON THE RIGHT

// dark nose upper colour
if (colourScheme == 0) {
fill(97,55,26); 
}
//pink nose upper colour
if (colourScheme == 1) {
fill(160, 36, 199)
}
//green nose upper colour
if (colourScheme == 2) {
fill(75,109,20)
}

//NOSE SHAPES ON THE RIGHT

//dark nose upper layer
if (noseLook == 0) {
arc(cx+cx, cy+(cy*scale_factor*1/2), scale_factor*70, scale_factor*40, 90, 270);
arc(cx+cx, cy+(cy*scale_factor*0.6/2), scale_factor*30, scale_factor*60, 90, 270);
}
//pale nose upper layer
if(noseLook ==1) { 
arc(cx+cx, cy+(cy*scale_factor*0.6/2), scale_factor*50, scale_factor*40, 90, 270);
}


}

