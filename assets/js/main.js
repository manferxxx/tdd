import '../css/app.css'
// document.querySelector('#app').innerHTML = `
//   <div>
    
//   </div>
// 

// registro.js
document.addEventListener('DOMContentLoaded', function () {
  const formularioRegistro = document.getElementById('registroForm');

  formularioRegistro.addEventListener('submit', function (event) {

    event.preventDefault();

    if (validarRegistro()) {
      enviarRegistroAlServidor();
    }
  });

  function validarRegistro() {
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const genero = document.getElementById('genero').value;

    if (nombres === '' || apellidos === '' || email === '' || password === '' || confirmPassword === '' || genero === '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return false;
    }

    return true;
  }

  function enviarRegistroAlServidor() {
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const genero = document.getElementById('genero').value;

    fetch('/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombres,
        apellidos,
        email,
        password,
        genero,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.href = '/inicio_sesion';
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error durante el registro. Por favor, inténtalo de nuevo.');
      });
  }
});

// inicioSesion.js
document.addEventListener('DOMContentLoaded', function () {
  const formularioInicioSesion = document.getElementById('inicioSesionForm');

  formularioInicioSesion.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validarInicioSesion()) {
      enviarInicioSesionAlServidor();
    }
  });

  function validarInicioSesion() {
    const emailInicio = document.getElementById('emailInicio').value.trim();
    const passwordInicio = document.getElementById('passwordInicio').value;

    // Implementa la lógica de validación según sea necesario

    return true;
  }

  function enviarInicioSesionAlServidor() {
    const emailInicio = document.getElementById('emailInicio').value.trim();
    const passwordInicio = document.getElementById('passwordInicio').value;

    fetch('/iniciar_sesion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInicio,
        password: passwordInicio,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.href = '/pagina_de_registro';
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error durante el inicio de sesión. Por favor, inténtalo de nuevo.');
      });
  }

  console.log(data)
});



  