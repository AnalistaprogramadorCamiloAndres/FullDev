const user = [{ id: 1, usuario: 'usuario1', clave: '1234' },
              { id: 2, usuario: 'usuario2', clave: '5678' },
              { id: 3, usuario: 'usuario3', clave: '9101' },
              { id: 4, usuario: 'usuario4', clave: '1121' },
              { id: 5, usuario: 'usuario5', clave: '3141' }]



function submitbottom() {

    let usuario = document.getElementById("us").value;
    let contrasena = document.getElementById('pw').value;
    const resultado = user.find(user => user.usuario === usuario && user.clave === contrasena);
    if (resultado) {
        window.open('principal.html');
        console.log('ingreso correcto');
    } else {
        console.log('error en las credenciales');
        alert('erro en las credenciales');
    }
}

