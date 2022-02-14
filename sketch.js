var ball;
var vx = 5;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  if(ball.position.y<=50 || ball.position.y>=height-50)
  {
    vx= -vx;
  }
  ball.velocity.y = vx;

  drawSprites();

}

