var x = 100;
var y = 100;
var posX=0, posY=0;
var contbatida = 0;
var velocidade
var pontuação
function setup() {

  createCanvas(512, 512);
  posX = 0;
  posY = 200;
velocidade = parseInt(prompt('Escreva a velocidade desejada'))//velocidade do quadrado
if(posX => x+40  || posY => y+40 || posX => x-40  || posY => y-40){
contbatida++
}
if(contbatida == 5 ){
  alert('Você perdeu')
}



function draw() {
  background(0);
  
   ellipse(x, y, 10, 10);
  rect(posX, posY, 50, 50);
  if (keyIsDown(LEFT_ARROW))
  x-=5;

  if (keyIsDown(RIGHT_ARROW))
  x+=5;

  if (keyIsDown(UP_ARROW))
  y-=5;

  if (keyIsDown(DOWN_ARROW))
  y+=5;

 
  if (posX < 640){//limite de espaço do quadrado
  posX = posX + velocidade;
  }else{
  posX = 0;
  }
  if (  x < 640 && x > 0){//limite do espaço do quadrado em x
  x = x;
  }else{
  x = 0;
  }
  if (  y < 640 && y>0 ){//limite do espaço do quadrado em y
  y = y;
  }else{
  y = 0;
  }
  

  


}
