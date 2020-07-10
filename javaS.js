
function login() {
  var usuario = document.getElementById("texUser");
  var contraseña = document.getElementById("texpass");
  var mensaje = document.getElementsByName("texmensaje");

  alert("mensaje de advertencia...");

console.log(usuario.Value +" "+ contraseña.Value);


  if (usuario.Value == "invitado" && contrasena.Value == "invitado") {
    mensaje.innerHTML="elicitaciones, Ususario Logueado.";
    location.href = "index.html";

  } else {
    mensaje.innerHTML="error, Ususario no Logueado";
    location.href = "index.html";
  }
}