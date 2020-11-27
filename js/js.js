function validar() {
  let formulario = document.forms["formulario"];
  let nombre = formulario["txtNombre"].value;
  let edad = formulario["txtEdad"].value;
  let genero = formulario["genero"].value;
  let correo = formulario["txtCorreo"].value;
  let expreg = /([a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+)@([a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,4})/;

  if (nombre == "" || edad == "" || correo == "") {
    alert("Debe llenar todos los campos.");
  } else if (expreg.test(correo.toLowerCase())) {
    alert("Datos ingresados correctamente");
  } else {
    alert("Correo Invalido.");
  }
}
