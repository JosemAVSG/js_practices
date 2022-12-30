let d=document;
export default function darkTheme(btn, dataDark){


const $themeBtn=d.querySelector(btn),

$Selector=d.querySelectorAll("[data-dark]");

console.log($Selector);

let moon="🍆",
sun="😏",
ls=localStorage;

const  light=()=>{

  $Selector.forEach(el =>el.classList.add(dataDark));  
                $themeBtn.textContent=sun;  
                ls.setItem("theme", "light");

}

const dark=()=> {
    $Selector.forEach(el =>el.classList.remove(dataDark));  
    $themeBtn.textContent=moon;  
    ls.setItem("theme", "dark");
}

d.addEventListener("click", (e)=>{

    if(e.target.matches(btn)){

            if($themeBtn.textContent === moon){
                light();
                     
            }else{
                dark();
            }

    }

})

d.addEventListener("DOMContentLoaded", (e)=>{

  if(ls.getItem("theme")===null)ls.setItem("theme", "light");
 
  if(ls.getItem("theme")==="light")light();

  if(ls.getItem("theme")==="dark")dark();
 


});

}