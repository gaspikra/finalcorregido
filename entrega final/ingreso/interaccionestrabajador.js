const usuario=JSON.parse(localStorage.getItem("usuarios"));
const usuarioss=JSON.parse(localStorage.getItem("inicioS"));
let saldo=document.getElementById("saldo");
let promedio=document.getElementById("promedio");
let horatrabajo=document.getElementById("horatrabajo");
let buscador=usuario.find(item=>item.nombre===usuarioss[0].nombre);/* este array esta pensado para que tenga un solo elemento, y cuando cierres sesion se borre*/
if (buscador) {  /* esto sirve para que cada usuario tenga especificamente su propia alcancia y promedio cuando entre, y pueda visualizarlo */
  saldo.innerHTML=`${buscador.alcancia}`;
  promedio.innerHTML=`${buscador.puntuaciones}`;
  horatrabajo.innerHTML=`${buscador.horatotales}`;
}
console.log(buscador.alcancia);
/* es muy importante cerrar sesion asi a cada usuario se le muestra su propia informacion, porque sino se queda guardado el usuario en array el nombre del anterior*/
let boton=document.getElementById("CS"); 
  boton.addEventListener("click",()=>{
    localStorage.removeItem("usuarioss");
    usuarioss.length=0;
    localStorage.setItem("inicioS",JSON.stringify(usuarioss));
    window.location.href="../index.html";
  });
  localStorage.setItem("usuarioss", JSON.stringify(usuarioss));

