const d=document,
n=navigator;

export default function DeteccionWebCam(id){

    const $video = d.getElementById(id);
    
   

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject=stream;
            $video.play();
            
        })
        .catch((err)=>{     
         $video.insertAdjacentHTML("afterend",`<p>${err}</p>`)   
        console.log(`Dio el siguiente error ${err}`);
                       })   

    }


}