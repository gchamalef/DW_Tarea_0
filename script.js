// Función principal para manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Crear el mensaje para el alert
    const datosFormulario = `
DATOS DEL FORMULARIO:

📝 Nombres: ${nombres}
👤 Apellidos: ${apellidos}
📞 Teléfono: ${telefono}
📧 Correo: ${correo}
🎂 Fecha de Nacimiento: ${fechaNacimiento}
💬 Mensaje: ${mensaje}
    `;
    
    // Mostrar los datos en un alert
    alert(datosFormulario);
});

// Efectos adicionales para mejorar la experiencia de usuario
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efectos de hover y animaciones a los campos del formulario
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Validación de tiempo real
    const emailInput = document.getElementById('correo');
    emailInput.addEventListener('input', function() {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.style.borderColor = '#ff5722';
        } else {
            this.style.borderColor = '#ddd';
        }
    });

    // Validación para el número de teléfono
    const telefonoInput = document.getElementById('telefono');
    telefonoInput.addEventListener('input', function() {
        // Permitir solo números, espacios, guiones y paréntesis
        this.value = this.value.replace(/[^0-9\s\-\(\)\+]/g, '');
    });
});