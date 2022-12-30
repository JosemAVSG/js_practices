const d=document,
w=window;

export default function responsiveD(id,mediaQ,contentMobile,contentDesktop) {

    let breakpoint = w.matchMedia(mediaQ);

    const responsive=(e)=>{

        if (e.matches) { 
            d.getElementById(id).innerHTML=contentDesktop;
           
        }else{
            d.getElementById(id).innerHTML=contentMobile;
           
        }


    };
    breakpoint.addListener(responsive);
    responsive(breakpoint);



    
}