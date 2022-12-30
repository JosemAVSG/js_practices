const d = document;

export function digitalClock(clock, btn_play,btn_stop){
let tempo;
d.addEventListener("click",(e)=>{

    if(e.target.matches(btn_play)){
           tempo= setInterval(()=>{

                let hora = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${hora}</h3>`;
            },1000);
            e.target.disabled=true;
    }

    if(e.target.matches(btn_stop)){
        clearInterval(tempo);
        d.querySelector(clock).innerHTML = null;
        d.querySelector(btn_play).disabled=false;      
    }

})

}

export function alarm(sonido,btn_play,btn_stop){
  let alarm;
  const $alarm=d.createElement("audio");
  $alarm.src=sonido;
    d.addEventListener("click",(e)=>{

        if(e.target.matches(btn_play)){
               alarm= setTimeout(()=>{
                $alarm.play();
                },2000);
                e.target.disabled=true;
        }
    
        if(e.target.matches(btn_stop)){

            clearTimeout(alarm);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btn_play).disabled=false;   


        }
    
    })
    



}