function move(){
    var snakeX = 0;
var snakeY = 0;
var snakeX2 = 20;
var snakeY2 = 20;
    var direction = right;
    var alive = true;
    var length = 2
while (alive == true){
if(direction==up)
    snakeY = snakeY + 10
    snakeY2 = snakeY - length
    
    
} 
    if(direction==down){
        
        snakeY = snakeY + 10
        
        snakeY2 = snakeY - length
        
    
}
if(direction==right) {
 snakeX= snakeX -10
    
    snakeX2 = snakeX - length
    
    
}

 if(direction==left){
  
     snakeX = snakeX + 10 
     snakeX2 = snakeX + length
     
     
     
     
 }
    
}

 
    
