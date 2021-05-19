noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage('nose.png')
}

function setup(){
    Canvas = createCanvas(400,300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(400,300);
    Video.hide();
    pose_net = ml5.poseNet(Video,modelLoaded);
    pose_net.on('pose',gotPoses);
}
function gotPoses(result){
        if(result.length>0){
            console.log(result);
            console.log("nose x = " + result[0].pose.nose.x);
            console.log("nose y = " + result[0].pose.nose.y);
            noseX = result[0].pose.nose.x - 15;
            noseY = result[0].pose.nose.Y - 15;
        }
        else{
            console.log("person not detected")
        }
}

function modelLoaded(){
    console.log("Model Loaded");
}

function take_snapshot(){
    save('img.png');
}
function draw(){
    image(Video,0,0,400,300);
    image(clown_nose,noseX,noseY,100,100);
}
