// Variabelen voor de canvas-elementen, auto's en bewegingsinstellingen.
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var car1X = 100;
var car1Y = 300;

var car2X = 100;
var car2Y = 400;

// Functie om auto's in het spel te tekenen.
function drawCars() {
  
   // Auto1
   ctx.beginPath();
   ctx.moveTo(car1X +10,car1Y);
   ctx.lineTo(car1X +80,car1Y);
   ctx.lineTo(car1X +70,car1Y -15);
   ctx.lineTo(car1X+20,car1Y -15);   
   ctx.closePath();
   
   
     //Auto2
     var imgPath='./auto.png';
     let img=new Image();
      img.onload=()=>{
          if (img.width>180) { 
              console.log('Grootte moet worden aangepast');
          }
        else{
            console.log('Grootte is oké');
         }          
         }

      img.src=imgPath;    
      

ctx.drawImage(img,car2X ,car2Y ,60 ,30);

}


// Functie die wordt gebruikt om de auto's te laten bewegen.
function moveCars() {
  car1X += Math.floor(Math.random()*10);
  car2X += Math.floor(Math.random()*10);

  // Als een van de auto's het einde bereikt, begint het spel opnieuw.
  if (car1X > canvas.width) {
    car1X = -80;
  }
  
   if (car2X > canvas.width) {
    car2X= -60;
   }

}

// Functie die wordt gebruikt om alles op de pagina te updaten.
function updateCanvas() {
    
     ctx.clearRect(0,0,canvas.width,canvas.height); 
     
     //Autootjes
     drawCars();
     
      // Beweging
      moveCars();
      
      window.requestAnimationFrame(updateCanvas);
}

updateCanvas();
