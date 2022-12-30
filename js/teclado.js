const d = document;
let x=0,
y=0;
export function moverPelota(e, ball, place) {
 



  const $Ball= d.querySelector(ball),
       $Place= d.querySelector(place),
      $limitBall=$Ball.getBoundingClientRect(),
      $limitPlace=$Place.getBoundingClientRect();
       console.log(e.keyCode);
       console.log(e.key);
      

      switch (e.keyCode) {
        case 37:
          e.preventDefault();
          if($limitBall.left>$limitPlace.left)x--;
          break;

        case 38:
          e.preventDefault();

          if($limitBall.top>$limitPlace.top) y--;
            break;

        case 39:
          e.preventDefault();
          if($limitBall.right<$limitPlace.right)x++;
              break;
        case 40:
          e.preventDefault();
          if($limitBall.bottom<$limitPlace.bottom)y++;
           break;
                
        default:
         break;
      
      }

      $Ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}


export function shorcuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e);

  if(e.key ==="a" && e.altKey){

    alert("Has mandado una alerta del teclado");

  }

  if(e.key ==="c" && e.altKey){

    confirm("Has mandado una confirmacion del teclado");
    
  }
  if(e.key ==="p" && e.altKey){

    let x=prompt("Has mandado una alerta del teclado");
    console.log(x);
    
  }



}