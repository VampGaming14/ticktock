var h,m,s;
var hAngle,mAngle,sAngle;

function setup() {
  createCanvas(400,400);
  
  

   angleMode(DEGREES);

}

function draw() {
  background(255,255,255); 

  translate(200,200)
    rotate(-90)
      let h = hour();
     //  text('Current hour: \n' + h, 5, 50);
         let m = minute();
       //   text('Current minute: \n' + m, 5, 50);
        let s = second();
        //text('Current second: \n' + s, 5, 50);


  sAngle = map(s, 0, 60, 0, 360);
   mAngle = map(m, 0, 60, 0, 360);
   hAngle = map(h%12, 0, 12, 0, 360); 
   
     push();
     rotate(sAngle); 
     
    
    stroke(255,0,0); 
    strokeWeight(7);
     line(0,0,100,0); 
     pop()

     push();
     rotate(mAngle);
     stroke(0,255,0);
     strokeWeight(7);
     line(0,0,75,0);
     pop()

push();
rotate(hAngle); 
stroke(0,0,255); 
strokeWeight(7);
 line(0,0,50,0); 
 pop()
 
//rotate the hand based on angle calculated 
stroke(255,0,255);
    point(0,0)
 
  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,sAngle);
  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mAngle);
  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hAngle);
  drawSprites();
}