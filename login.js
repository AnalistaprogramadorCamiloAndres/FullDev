const user = "adm";
const password = "123";


function submitbottom (){

    let usuario = document.getElementById("us").value;
    let contrasena = document.getElementById('pw').value;

    if (user == usuario && password == contrasena) {
        window.open ('principal.html');
        console.log ('ingreso correcto'); 
    } else {
        console.log ('error en las credenciales');
    }
}
