const usuario= JSON.parse(localStorage.getItem("usuarios"));  /* aca llamo al local storage */
function plomero(){    /* aca empieza la funcion del plomero */
let buscar=usuario.filter(item=>item.especialidad==="plomero");
const plomerodiv=document.getElementById("plomerosep");
if (buscar.length>0){
buscar.forEach(item=>{
    let muestreo=document.createElement("div");
    muestreo.innerHTML=
        `
        <div class="cajatr">
       <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}  </h4>
        <h4>puntaje:${item.puntuaciones}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
    ;
    plomerodiv.append(muestreo);
    let botonContratar = document.getElementById(`cuentas${item.id}`);
      botonContratar.addEventListener("click", ()=> {
        let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
        let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
        while (puntuacion>10 || puntuacion<1){
        puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
      }
      setTimeout(()=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'el servicio a sido contratado :D',
          showConfirmButton: false,
          timer: 1500
        })
      },1000);
      item.cantpuntuaciones++;
      item.sumadepuntuaciones=item.sumadepuntuaciones+puntuacion;
      item.puntuaciones = item.sumadepuntuaciones / item.cantpuntuaciones;
      item.puntuaciones =Math.round(item.puntuaciones * 2)/2;  /* aca promedio al .5 mas cercano */
        item.alcancia +=salario*item.costo;
        item.horatotales+=salario;
        localStorage.setItem("usuarios",JSON.stringify(usuario));
      });
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'no se encontro un trbajador activo para el servicio',
      text: 'lo sentimos :(',
    })
  }
}   /* hasta aca que termina la funcion, se va a repetir la misma funcion hasta la linea 199, lo unico que cambia es el item.especialidad que busca */

function limpiadora(){
let buscar=usuario.filter(item=>item.especialidad==="limpiadora");
const limpiadoradiv=document.getElementById("limpiadorasep");
if (buscar.length > 0){
buscar.forEach(item=>{
    let muestreo=document.createElement("div");
    muestreo.innerHTML=
        `
        <div class="cajatr">
       <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}  </h4>
        <h4>puntaje:${item.puntuaciones}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
    ;
    limpiadoradiv.append(muestreo);
    let botonContratar = document.getElementById(`cuentas${item.id}`);
      botonContratar.addEventListener("click", ()=> {
        let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
        let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
        while (puntuacion>10 || puntuacion<1){
        puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
        item.cantpuntuaciones++;
        }
        setTimeout(()=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'el servicio a sido contratado :D',
            showConfirmButton: false,
            timer: 1500
          })
        },1000);
        item.cantpuntuaciones++;
        item.sumadepuntuaciones=item.sumadepuntuaciones+puntuacion;
        item.puntuaciones = item.sumadepuntuaciones / item.cantpuntuaciones;
        item.puntuaciones =Math.round(item.puntuaciones * 2)/2;  /* aca promedio al .5 mas cercano */
          item.alcancia +=salario*item.costo;
          item.horatotales+=salario;
          localStorage.setItem("usuarios",JSON.stringify(usuario));
      });
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'no se encontro un trbajador activo para el servicio',
      text: 'lo sentimos :(',
    })
  }}

  function electricista(){
      let buscar=usuario.filter(item=>item.especialidad==="electricista");
      const electricistadiv=document.getElementById("electricistasep");
      if (buscar.length > 0){
          buscar.forEach(item=>{
              let muestreo=document.createElement("div");
              muestreo.innerHTML=
              `
        <div class="cajatr">
        <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}  </h4>
        <h4>puntaje:${item.puntuaciones}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
        ;
        electricistadiv.append(muestreo);
        let botonContratar = document.getElementById(`cuentas${item.id}`);
        botonContratar.addEventListener("click", ()=> {
            let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
            let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
            while (puntuacion>10 || puntuacion<1){
                puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
                item.cantpuntuaciones++;
              }
              setTimeout(()=>{
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'el servicio a sido contratado :D',
                  showConfirmButton: false,
                  timer: 1500
                })
              },1000);
              item.cantpuntuaciones++;
      item.sumadepuntuaciones=item.sumadepuntuaciones+puntuacion;
      item.puntuaciones = item.sumadepuntuaciones / item.cantpuntuaciones;
      item.puntuaciones =Math.round(item.puntuaciones * 2)/2;  /* aca promedio al .5 mas cercano */
        item.alcancia +=salario*item.costo;
        item.horatotales+=salario;
            localStorage.setItem("usuarios",JSON.stringify(usuario));
        });
    });
} else {
  Swal.fire({
    icon: 'error',
    title: 'no se encontro un trbajador activo para el servicio',
      text: 'lo sentimos :(',
  })
}}
function gasista(){
let buscar=usuario.filter(item=>item.especialidad==="gasista");
const gasistadiv=document.getElementById("gasistasep");
if (buscar.length > 0){
buscar.forEach(item=>{
    let muestreo=document.createElement("div");
    muestreo.innerHTML=
        `
        <div class="cajatr">
       <h4> nombre de la cuenta: ${item.nombre}</h4>
        <h4>precio por hora: ${item.costo}  </h4>
        <h4>puntaje:${item.puntuaciones}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
    ;
    gasistadiv.append(muestreo);
    let botonContratar = document.getElementById(`cuentas${item.id}`);
      botonContratar.addEventListener("click", ()=> {
        let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
        let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
        while (puntuacion>10 || puntuacion<1){
        puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
        item.cantpuntuaciones++;
        }
        setTimeout(()=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'el servicio a sido contratado :D',
            showConfirmButton: false,
            timer: 1500
          })
        },1000);
        item.cantpuntuaciones++;
        item.sumadepuntuaciones=item.sumadepuntuaciones+puntuacion;
        item.puntuaciones = item.sumadepuntuaciones / item.cantpuntuaciones;
        item.puntuaciones =Math.round(item.puntuaciones * 2)/2;  /* aca promedio al .5 mas cercano */
          item.alcancia +=salario*item.costo;
          item.horatotales+=salario;
          localStorage.setItem("usuarios",JSON.stringify(usuario));
      });
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'no se encontro un trbajador activo para el servicio',
      text: 'lo sentimos :(',
    })
  }}

function pintor(){
    let buscar=usuario.filter(item=>item.especialidad==="pintor");
    const pintordiv=document.getElementById("pintorsep");
    if (buscar.length > 0){
        buscar.forEach(item=>{
            let muestreo=document.createElement("div")
            muestreo.innerHTML=
            `
            <div class="cajatr">
            <h4> nombre de la cuenta: ${item.nombre}</h4>
            <h4>precio por hora: ${item.costo}  </h4>
        <h4>puntaje:${item.puntuaciones}</h4>
        <button id="cuentas${item.id}">Contratar</button>
        </div>
        `
        ;
        pintordiv.append(muestreo);
        let botonContratar = document.getElementById(`cuentas${item.id}`);
        botonContratar.addEventListener("click", ()=> {
            let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
            let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
            while (puntuacion>10 || puntuacion<1){
                puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
                item.cantpuntuaciones++;
            }
            setTimeout(()=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'el servicio a sido contratado :D',
                showConfirmButton: false,
                timer: 1500
              })
            },1000);
            item.cantpuntuaciones++;
      item.sumadepuntuaciones=item.sumadepuntuaciones+puntuacion;
      item.puntuaciones = item.sumadepuntuaciones / item.cantpuntuaciones;
      item.puntuaciones =Math.round(item.puntuaciones * 2)/2;  /* aca promedio al .5 mas cercano */
        item.alcancia +=salario*item.costo;
        item.horatotales+=salario;
            localStorage.setItem("usuarios",JSON.stringify(usuario));
        });
    });
} else {
  Swal.fire({
    icon: 'error',
    title: 'no se encontro un trbajador activo para el servicio',
      text: 'lo sentimos :(',
  })
}}

function arquitecto(){
    let buscar=usuario.filter(item=>item.especialidad==="arquitecto");
    const arquitectodiv=document.getElementById("arquitectosep")
    if (buscar.length > 0){
    buscar.forEach(item=>{
        let muestreo=document.createElement("div")
        muestreo.innerHTML=
            `
            <div class="cajatr">
           <h4> nombre de la cuenta: ${item.nombre}</h4>
            <h4>precio por hora: ${item.costo}  </h4>
            <h4>puntaje:${item.puntuaciones}</h4>
            <button id="cuentas${item.id}">Contratar</button>
            </div>
            `
        ;
        arquitectodiv.append(muestreo);
        let botonContratar = document.getElementById(`cuentas${item.id}`);
          botonContratar.addEventListener("click", ()=> {
            let salario=parseInt(prompt("ingrese cuantas horas va a necesitar el trabajo."));
            let puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho"));
            while (puntuacion>10 || puntuacion<1){
            puntuacion=parseInt(prompt("ingrese un puntaje del 1 al 10 por el trabajo hecho, la cifra que ingreso no es valida"));
            item.cantpuntuaciones++;
            }
            setTimeout(()=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'el servicio a sido contratado :D',
                showConfirmButton: false,
                timer: 1500
              })
            },1000);
            item.cantpuntuaciones++;
      item.sumadepuntuaciones=item.sumadepuntuaciones+puntuacion;
      item.puntuaciones = item.sumadepuntuaciones / item.cantpuntuaciones;
      item.puntuaciones =Math.round(item.puntuaciones * 2)/2;  /* aca promedio al .5 mas cercano */
        item.alcancia +=salario*item.costo;
        item.horatotales+=salario;
        localStorage.setItem("usuarios",JSON.stringify(usuario));
          });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'no se encontro un trbajador activo para el servicio',
      text: 'lo sentimos :(',
        })
      }
}
let boton=document.getElementById("contratar");
boton.addEventListener("click", () => {plomero();});
let boton1=document.getElementById("contratar1");
boton1.addEventListener("click",()=>{limpiadora()});
let boton2=document.getElementById("contratar2");
boton2.addEventListener("click",()=>{electricista()});
let boton3=document.getElementById("contratar3");
boton3.addEventListener("click",()=>{gasista()});
let boton4=document.getElementById("contratar4");
boton4.addEventListener("click",()=>{pintor()});
let boton5=document.getElementById("contratar5");
boton5.addEventListener("click",()=>{arquitecto()});
   
/*  uso de la API para conocer la temperatura del clima */
let url= "https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&appid=12d6e17e74343609eb9d3c65e509e843";
let humedad=document.getElementById("humedad");
let sensacionT=document.getElementById("sensaciont");
let tempmax=document.getElementById("tempmax");
let tempmin=document.getElementById("tempmin");
let descripcion=document.getElementById("descripcion");
fetch(url)
  .then(response => response.json())
  .then(data => {
    humedad.innerHTML=`<h2>humedad: ${data.main.humidity}%</h2>`;
   clima.append(humedad);
   sensacionT.innerHTML=`<h2>sensacion termica: ${parseFloat((data.main.feels_like)-273.15).toFixed(1)}</h2>`;
   clima.append(sensacionT);
   tempmax.innerHTML=`<h2>temperatura maxima: ${(parseFloat((data.main.temp_max)-273.15)).toFixed(1)}</h2>`
   clima.append(tempmax);
   tempmin.innerHTML=`<h2>temperatura minima: ${parseFloat((data.main.temp_min)-273.15).toFixed(1)}</h2>`
   clima.append(tempmin);
   const descripcionesClima = data.weather.map(item => item.description);
   descripcion.innerHTML=`<h2>condiciones: ${descripcionesClima}</h2>`;
   clima.append(descripcion);
})
.catch((error)=>{
    Swal.fire({
        icon: 'error',
        title: 'disculpen',
        text: 'nuestro equipo meteorologico no logro obtener datos de la fecha de hoy :(',
      })

});
const informacion=document.getElementById("informacion");
informacion.addEventListener("mouseover",()=>{
  setTimeout(()=>{
    Swal.fire({
      title: 'consejo',
      text:`si el dia esta nublado y la humedad es alta, no es recomendable contratar servicios al aire libre :(`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  })
  },500);
});