const d=document;
let tempo;






export default function cuenta(clock, limitDate, mensaje) {

    const $reloj = d.getElementById(clock),

    $form=d.getElementById(limitDate);

 

   d.addEventListener("submit", (e)=>{
  
    
    if (e.target===$form) {

        e.preventDefault();

        
        
    
     tempo = setInterval(()=>{
        
       const f= $form.fechah.value;
              console.log(f);
                
             let limite= new Date(f).getTime();
            
             
        let now=new Date().getTime();

        let hora = limite-now,

        dias= Math.floor(hora/(1000*60*60*24)),
        horas= ("0"+ Math.floor( hora%(1000*60*60*24)/(1000*60*60))).slice(-2),
        minutos=("0"+ Math.floor( hora%(1000*60*60)/(1000*60))).slice(-2),
        segundos=("0"+ Math.floor( hora%(1000*60)/(1000))).slice(-2);
    
           
        $reloj.innerHTML = `<h3>faltan ${dias}, dias ${horas} horas  ${minutos},minutos  ${segundos}, segundos</h3>`;
       

    },1000);

    
}

  
    })

   
 


}

