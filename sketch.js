function setup(){
createCanvas(400,400);
angleMode(DEGREES);
}


function draw(){
        background(0);
        translate(200,200);
        rotate(-90);
    //https://p5js.org/reference/#/p5/hour
    let hr = hour();
    //https://p5js.org/reference/#/p5/minute
    let mn = minute();
    //https://p5js.org/reference/#/p5/second
    let sc = second();
 

    strokeWeight(8);
    stroke(123,104,238);
    noFill();
    let secRotate = map(sc , 0 , 60 , 0 , 360);
    arc(0,0,300,300,0,secRotate);

   
    strokeWeight(8);
    stroke(138,43,226);
    noFill();

    let minRotate = map(mn , 0 , 60 , 0 , 360);
    arc(0,0,280,280,0,minRotate);


    strokeWeight(8);
    stroke(0,255,255);
    noFill();

    let hourRotate = map(hr % 12, 0 , 12 , 0 , 360);
    arc(0,0,260,260,0,hourRotate);

    push();
    rotate(secRotate);
    stroke(123,104,238);
    line(0,0,100,0);
    pop();

    push();
    rotate(minRotate);
    stroke(138,43,226);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourRotate);
    stroke(0,255,255);
    line(0,0,45,0);
    pop();

 console.log('consoleprint='+hr+':'+mn+':'+sc);


drawSprites();
    

     
}