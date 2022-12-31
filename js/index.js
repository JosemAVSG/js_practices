import scrollTop from "./btn_scroll.js";
import hamburger from "./hamburgerbtn.js";
import { digitalClock, alarm} from "./reloj.js";
import {moverPelota,shorcuts } from "./teclado.js";
import { cuenta } from "./cuenta_regresiva.js";
import darkTheme from "./darkmode.js";
import responsiveD from "./responsive.js";
import responsiveT from "./responsive_teste.js";
import device from "./user_agent.js";
import networkStatus from "./deteccion_red.js";
import DeteccionWebCam from "./webcam.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburger(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    cuenta("countdown","fecha","Feliz Año nuevo");

    scrollTop(".scroll-top-btn");
    responsiveD("youtube","(min-width:1024px)","Estoy en tlfno","Estoy en pc");
    responsiveD("gmaps","(min-width:1024px)","Estoy en tlfno","Estoy en pc");
    responsiveT("responsive-tester");
    device("user-device");
    DeteccionWebCam("webcam");

})


d.addEventListener("keydown",(e)=>{

  shorcuts(e);
  moverPelota(e, ".ball",".stage");

})

    darkTheme(".dark-mode","dark");
    networkStatus();