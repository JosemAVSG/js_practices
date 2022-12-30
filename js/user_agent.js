const d=document,
w=window,
n=navigator,
usera=n.userAgent;
export default function device(id) {

   const $div= d.getElementById(id),
   isMobile={
    android:()=>usera.match(/android/i),
    ios:()=>usera.match(/iphone|ipad|ipod/i),
    windows:()=>usera.match(/windows phone/i),
    any:function() {
        return this.android ()|| this.ios()|| this.windows();
    },

   },

   isDesktop={
    linux:()=>usera.match(/linux/i),
    mac:()=>usera.match(/mac os/i),
    windows:()=>usera.match(/windows nt/i),
    any:function() {
        return this.linux() || this.mac()|| this.windows();
    },

   },
   isBrowser={
    chrome:()=>usera.match(/chrome/i),
    opera:()=>usera.match(/opera|opera mini/i),
    safari:()=>usera.match(/safari/i),
    firefox:()=>usera.match(/firefox/i),
    ie:()=>usera.match(/msie|iemobile/i),
    edge:()=>usera.match(/edge|microsoft edge/i),
    
    any:function() {
        return this.chrome() || this.opera()||   this.safari()||   this.firefox()||  this.ie()||  this.edge();
    },


   };

   $div.innerHTML=`

    <ul>
    <li>User Agent:<b>${usera}</b></li>
    <li>Plataforma:<b>${isMobile.any()? isMobile.any() : isDesktop.any()}</b></li>

    <li>Navegador:<b>${isBrowser.any()}</b></li>
    </ul>`;

    
}