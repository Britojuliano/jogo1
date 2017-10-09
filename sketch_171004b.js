var x = 100;
var y = 100;
var posX=0, posY=100;
var contbatida = 100;
var velocidade
var pontuação
var pg 
var fim_de_jogo
var andante
function setup() {

  createCanvas(900, 600);
  pg = createGraphics(900,100)
 
 
  
velocidade = parseInt(prompt('Escreva a velocidade desejada'))//velocidade do quadrado
fim_de_jogo= velocidade*(1/2) ;

}




function draw() {

 background (10,50,0)
text('Score'+ contbatida,700,100);  
  text("posicao X e Y do quadrado" + posX +''+ posY,700,150)
     text("posicao X e Y da bola" + x +''+ y,700,200)
  rect(x, y, 50, 50,30,40);//retangulo bola	
   
  rect(posX, posY, 50, 50);
  if (keyIsDown(LEFT_ARROW))
  x-=5;

  if (keyIsDown(RIGHT_ARROW))
  x+=5;

  if (keyIsDown(UP_ARROW))
  y-=5;

  if (keyIsDown(DOWN_ARROW))
  y+=5;

 
  if (posX < 900){//limite de espaço do quadrado
  posX = posX + velocidade;
  }else{
  posX = 0;
  }
  if (  x < 900 && x > 0){//limite do espaço do quadrado em x
  x = x;
  }else{
  x = 0;
  }
  if (  y < 640 && y>0 ){//limite do espaço do quadrado em y
  y = y;
  }else{
  y = 0;
  }
  

  if(contbatida == fim_de_jogo) {
  alert ('Vc perdeu');
 }




 
if (x < posX + 50 &&
 x + 50 > posX &&
   posY < y + 50 &&
  50 + posY > y) {
    contbatida++;
}//colisao
}
