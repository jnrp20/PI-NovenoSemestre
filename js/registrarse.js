function crearcuenta() {
    let formulario = document.forms['formularioRegistro'];
    let nombre = formulario['nomb'];
    let apellido = formulario['apellidos'];
    let numdoc = formulario['numeroDocumento'];
    let usuario = formulario['IngUsuario'];
    let correo = formulario['correo'];
    let contra = formulario['IngContraseña'];
    let confContra = formulario['confContraseña'];

    if (nombre.value == "" && apellido.value == "" && numdoc.value == "" && usuario.value == "" && correo.value == "" && contra.value == "" && confContra.value == "") {
        alert('ERROR: MUCHOS CAMPOS VACIOS');
    } else if (nombre.value == "") {
        alert('ERROR: FALTA NOMBRE');
    } else if (apellido.value == "") {
        alert('ERROR: FALTA APELLIDO');
    } else if (numdoc.value == "") {
        alert('ERROR: FALTA NUMERO DE DOCUMENTO');
    } else if (usuario.value == "") {
        alert('ERROR: FALTA USUARIO');
    } else if (correo.value == "") {
        alert('ERROR: FALTA CORREO ELECTRONICO');
    } else if (contra.value == "") {
        alert('ERROR: FALTA CONTRASEÑA ');
    } else if (confContra.value == "") {
        alert('ERROR: FALTA CONFIRMAR CONTRASEÑA');
    }


}