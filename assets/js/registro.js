// registro.js

// registro.js
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al formulario
    const formularioRegistro = document.getElementById('registroForm');

    // Agregar un evento al formulario para manejar el envío
    formularioRegistro.addEventListener('submit', function (event) {
        // Realizar la validación aquí
        if (!validarRegistro()) {
            // Si la validación falla, prevenir el envío del formulario
            event.preventDefault();
        } else {
            // Si la validación es exitosa, obtener valores del formulario
            const nombres = document.getElementById('nombres').value;
            const apellidos = document.getElementById('apellidos').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const genero = document.getElementById('genero').value;

            // Crear un objeto con los datos
            const datos = {
                nombres,
                apellidos,
                email,
                password,
                confirmPassword,
                genero,
            };

            // Convertir el objeto a cadena JSON y almacenar en localStorage
            localStorage.setItem('formularioData', JSON.stringify(datos));
        }
    });

    // Función para validar el formulario
    function validarRegistro() {
        // Obtener referencias a los campos del formulario
        const nombres = document.getElementById('nombres').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const genero = document.getElementById('genero').value;

        // Verificar que los campos no estén vacíos
        if (nombres === '' || apellidos === '' || email === '' || password === '' || confirmPassword === '' || genero === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }

        // Verificar que la contraseña y la confirmación de contraseña coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return false;
        }

    
        // Si todas las validaciones son exitosas, retorna true
        return true;
    }
});
