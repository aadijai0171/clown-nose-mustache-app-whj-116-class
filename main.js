nosey=0;
nosex=0;
mustachey=0;
mustachex=0;

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("model is initialized");
}
function preload(){
    clown_nose=loadImage("clownnose.png");
   _mustache_mouse=loadImage("mustache-transparent-clipart-8.png");
    }
function gotPoses(results){
   if(results.length> 0){
       console.log(results);
       nosex=results[0].pose.nose.x-15;
       nosey=results[0].pose.nose.y-15;
       mustachex=results[0].pose.nose.x-30;
       mustachey=results[0].pose.nose.y+8;
   }  
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex,nosey,30,30);
image(_mustache_mouse,mustachex,mustachey,70,40);
}

function Take_snapshot(){
    save("MyImage");

}    

mousey=0;
mousex=0;





