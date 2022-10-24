function botonprueba() {

    //guarda el formulario en una variable
    let Guardarformulario = document.forms['formularioIniciSesion'];
    //guarda parte del formulario en una variable
    let usuario = Guardarformulario['usuario'];
    //guarda parte del formulario en una variable
    let contraseña = Guardarformulario['contraseña'];

    if (usuario.value == "" && contraseña.value == "") {
      alert("HAY CAMPOS VACIOS");

    } else if (contraseña.value == "") {
      alert("CAMPO VACIO: INGRESE SU CONTRASEÑA");
    } else if (usuario.value == "") {
      alert("CAMPO VACIO: INGRESE SU NOMBRE DE USUARIO");

    } else {
      //edita el div prueba con los valores del formulario
      document.getElementById('divprueba').innerHTML = usuario.value + '<br/>' + contraseña.value;
     
    }



   
  }