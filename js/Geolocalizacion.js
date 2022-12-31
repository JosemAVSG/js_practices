const d=document,
n =navigator;

export default function Location(id) {
    

    const $id=d.getElementById(id),
    options={
        enableHightAccuracy:true,
        timeout:5000,
        maximiumAge:0
    };
    const succes= (position)=>{
        let coordenadas=position.coords;
            console.log(position);
        $id.innerHTML=`
        <h4>tu posicion actual es </h4>
        <ul>
        <li>Tu latitud es:${coordenadas.latitude}</li>
        <li>Tu longitud es: ${coordenadas.longitude}</li>
        <li>La precision fue de: ${coordenadas.accuracy}</li>
        </ul>
        <a href="www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},
        15z" target="_blank" rel=noopener></a>
        `

    };
    const  error = (err)=>{
        $id.innerHTML=`<p><mark> Error ${err.code}: ${err.message} </mark></p>`;
        console.log(err);
    };
    n.geolocation.getCurrentPosition(succes,error,options);


}