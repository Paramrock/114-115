function preload()
{
  
}

function setup()
{
   canvas = createCanvas(300,300);
   canvas.center();
   video  = createCapture(VIDEO);
   video.hide();
   video.size(300,300)

   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
   if(results.length > 0)
   {
     console.log(results);
     console.log("lip x = " + results[0].pose.lip.x);
     console.log("lip y = " + results[0].pose.lip.y);
   }
}

function modelLoaded()
{
    console.log('poseNet is initialized')
}

function draw()
{
   image(video,0,0,300,300);
}

function take_snapshot()
{
    save('param.png')
}