function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor, inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos"; 
	button.innerHTML = "Iniciar sesión";
}

translate();

/*var html = document.getElementById("enviar");
html.onclick = function(){
	var usuarioMail = document.getElementById("inputEmail").value;
	var passUsuario = document.getElementById("inputPassword").value;
	printed.innerHTML = "<h3> Datos Ingresados <h3> <p>Correo electrónico: " + usuarioMail + " </p> <p>Contraseña: " + passUsuario + "</p>";
}*/

