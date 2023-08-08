const usuarios= JSON.parse(localStorage.getItem("usuarios")) || [];
const inicioS= JSON.parse(localStorage.getItem("inicioS")) || [];
console.log(usuarios);
const logeo=document.getElementById("logeo");
logeo.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputs= e.target.children;
    let buscador=usuarios.find(item=>item.nombre===inputs[0].value && item.contraseña===inputs[2].value);
    if (buscador && buscador.tipo==="cliente"){
        window.location.href="ingreso/clientes.html";
    }
    else if(buscador && buscador.tipo==="trabajo"){
        let elemento={nombre:inputs[0].value,};
        inicioS.push(elemento);
        localStorage.setItem("inicioS",JSON.stringify(inicioS)); /* esto es para luego poder obtener la cuenta especifica en la cuenta de trabajador y pasar todos los registros de ganancia y promedio de puntaje. */
        window.location.href="ingreso/trabajador.html";
    }
    else{
        let error=document.getElementById("error");
        error.innerHTML="el usuario ingresado es incorrecto"
        error.className="rojo";
    }
});
const registro=document.getElementById("registro");
registro.addEventListener("click", async () => {
  const { value: inputs } = await Swal.fire({
    title: 'crear usuario',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Ingrese su nombre">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Ingrese su contraseña">',
      showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      const nombre = document.getElementById('swal-input1').value;
      const contraseña = document.getElementById('swal-input2').value;
      return {
        nombre,
        contraseña
      };
    }
  });
  if(inputs){
      let busqueda=usuarios.find(item=>item.nombre===inputs.nombre);
      if(busqueda){
          Swal.fire({
              icon: 'error',
              title: 'el usuario introducido ya esta en uso',
              text: 'ingrese otro nombre de usuario por favor',
            })
        }
        /* aca agrega todo */
        else{
            const { value: tipocuenta } = await Swal.fire({
                title: 'si quiere una cuenta de trabajo, ingrese [trabajo], y si busca servicios ingrese [cliente]',
                input: 'text',
                inputPlaceholder: 'ingrese el tipo de trabajo',
                inputAttributes: {
                  maxlength: 7,
                  autocapitalize: 'off',
                  autocorrect: 'off'
                },
                preConfirm: (tipo) => {
                    return tipo.toLowerCase();
                  }
              });
              if (tipocuenta){
                    if(tipocuenta==="trabajo"){                 
                    const { value: formValues } = await Swal.fire({
                        title: 'tipo de cuenta: TRABAJO',
                        html:
                        '<input id="swal-input1" class="swal2-input" placeholder="tipo de trabajo">' +
                        '<input id="swal-input2" class="swal2-input" placeholder="costo de su servicio por hora">',
                        focusConfirm: false,
                        preConfirm: () => {
                            const tipotrabajos=document.getElementById('swal-input1').value.toLowerCase();
                            const precio=parseInt(document.getElementById('swal-input2').value);
                            return{
                                tipotrabajos,precio
                            }  }
    });
    if (formValues) { 
        let nuevousuario={
            id:usuarios.length+1,
            nombre: inputs.nombre,
            contraseña:inputs.contraseña,
            tipo:tipocuenta,
            especialidad:formValues.tipotrabajos,
            costo:formValues.precio,
            alcancia:0,
            puntuaciones:0,
            cantpuntuaciones:0,
            horatotales:0,
            sumadepuntuaciones:0,
        };
        usuarios.push(nuevousuario);
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        Swal.fire({
            icon: 'success',
            title: 'usuario',
            text: 'cuenta creada con exito',
          })
    }
}
else if (tipocuenta==="cliente"){
    let nuevousuario={
        id:usuarios.length+1,
        nombre: inputs.nombre,
        contraseña:inputs.contraseña,
        tipo:tipocuenta,
    };
    usuarios.push(nuevousuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    Swal.fire({
        icon: 'success',
        title: 'usuario',
        text: 'cuenta creada con exito',
      })
}

/* hasta aca todo lo que tiene que ver con el ingreso */
}
}
}
});