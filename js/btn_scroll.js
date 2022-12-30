const d=document,
w=window;


export default function scrollTop(btn) {
    const $btnTop = d.querySelector(btn);

    w.addEventListener("scroll", (e)=>{

        let scrollTop =w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop>500){
            $btnTop.classList.remove("hidden");
        }else{
            $btnTop.classList.add("hidden");
        }
     
    });
    w.addEventListener("click",(e)=>{

        if(e.target.matches(btn)){
            w.scrollTo({

                behavior:"smooth",
                top:0
            });

        }

    });

}