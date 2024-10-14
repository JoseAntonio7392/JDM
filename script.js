<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación de Transporte</title>
    <style>
        /* Estilo General */
        body {
            font-family: Arial Narrow, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url("https://i.postimg.cc/Mpv1mW7V/calcular-ruta-google-maps.webp");
            background-size: cover;
            background-position: center center;
            background-attachment: fixed;
        }

        header {
            background-color: #007bff;
            color: white;
            padding: 15px;
            text-align: center;
        }

        nav ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
            padding: 0;
            margin: 0;
            background-color: #0056b3;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            padding: 10px;
            display: block;
            font-weight: bold;
        }

        nav ul li a:hover {
            background-color: #003f7f;
        }

        main {
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.85);
            border-radius: 10px;
            max-width: 1200px;
            margin: 20px auto;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        footer {
            text-align: center;
            padding: 10px;
            background-color: #007bff;
            color: white;
        }

        /* Estilos de las secciones */
        .seccion {
            display: none;
        }

        .seccion.active {
            display: block;
        }

        /* Estilos para las rutas */
        .route-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .route-card {
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 15px;
            flex: 1;
            min-width: 250px;
        }

        .btn-details {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn-details:hover {
            background-color: #0056b3;
        }

        /* Estilos para el buscador en el historial */
        #search-history {
            padding: 8px;
            margin-bottom: 20px;
            width: 100%;
            max-width: 400px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        /* Estilos para la tabla de historial */
        #history-table {
            width: 100%;
            border-collapse: collapse;
        }

        #history-table th, #history-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        /* Estilos para el formulario de pagos */
        .payment-form input {
            padding: 10px;
            margin: 10px 0;
            width: 100%;
            max-width: 400px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .payment-form button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .payment-form button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <!-- Encabezado -->
    <header>
        <h1>Aplicación de Transporte</h1>
        <nav>
            <ul>
                <li><a href="#" onclick="mostrarSeccion('rutas')">Rutas</a></li>
                <li><a href="#" onclick="mostrarSeccion('historial')">Historial</a></li>
                <li><a href="#" onclick="mostrarSeccion('pagos')">Pagos</a></li>
                <li><a href="#" onclick="mostrarSeccion('perfil')">Perfil</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenido principal -->
    <main>
        <!-- Sección de Rutas -->
        <section id="rutas" class="seccion active">
            <h2>Rutas Disponibles</h2>
            <div class="route-cards">
                <div class="route-card">
                    <h3>Ruta 1</h3>
                    <p>Salida: Cedral, Calle Hidalgo 123</p>
                    <p>Hora: 10:00 AM - 10 de octubre de 2024</p>
                    <button class="btn-details" onclick="mostrarDetalles('Ruta 1', 'Cedral, Calle Hidalgo 123', '10:00 AM')">Ver detalles</button>
                </div>
                <div class="route-card">
                    <h3>Ruta 2</h3>
                    <p>Salida: Real de Catorce, Avenida Zaragoza 456</p>
                    <p>Hora: 2:00 PM - 11 de octubre de 2024</p>
                    <button class="btn-details" onclick="mostrarDetalles('Ruta 2', 'Real de Catorce, Avenida Zaragoza 456', '2:00 PM')">Ver detalles</button>
                </div>
                <div class="route-card">
                    <h3>Ruta 3</h3>
                    <p>Salida: Vanegas, Calle Morelos 789</p>
                    <p>Hora: 4:00 PM - 12 de octubre de 2024</p>
                    <button class="btn-details" onclick="mostrarDetalles('Ruta 3', 'Vanegas, Calle Morelos 789', '4:00 PM')">Ver detalles</button>
                </div>
            </div>
        </section>

        <!-- Sección de Historial -->
        <section id="historial" class="seccion">
            <h2>Historial de Viajes</h2>
            <input type="text" id="search-history" placeholder="Buscar destino...">
            <table id="history-table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Ruta</th>
                        <th>Destino</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-10-10</td>
                        <td>Ruta 1</td>
                        <td>Cedral, Calle Hidalgo 123</td>
                    </tr>
                    <tr>
                        <td>2024-10-11</td>
                        <td>Ruta 2</td>
                        <td>Real de Catorce, Avenida Zaragoza 456</td>
                    </tr>
                    <tr>
                        <td>2024-10-12</td>
                        <td>Ruta 3</td>
                        <td>Vanegas, Calle Morelos 789</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Sección de Pagos -->
        <section id="pagos" class="seccion">
            <h2>Formulario de Pagos</h2>
            <form id="payment-form" class="payment-form">
                <label for="card-number">Número de tarjeta</label>
                <input type="text" id="card-number" placeholder="XXXX-XXXX-XXXX-XXXX">
                
                <label for="card-name">Nombre del titular</label>
                <input type="text" id="card-name" placeholder="Nombre completo">

                <label for="card-expiry">Fecha de expiración</label>
                <input type="text" id="card-expiry" placeholder="MM/AA">

                <label for="card-cvc">CVC</label>
                <input type="text" id="card-cvc" placeholder="XXX">

                <button type="submit">Realizar Pago</button>
            </form>
        </section>

        <!-- Sección de Perfil -->
        <section id="perfil" class="seccion">
            <h2>Perfil del Usuario</h2>
            <p>Aquí puedes ver y editar tu perfil.</p>
        </section>
    </main>

    <!-- Pie de página -->
    <footer>
        <p>&copy; 2024 Aplicación de Transporte</p>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Inicialización de las secciones
            window.showSection = function(sectionId) {
                // Ocultar todas las secciones
                document.querySelectorAll('main section').forEach(function(section) {
                    section.style.display = 'none';
                });
                // Mostrar la sección seleccionada
                document.getElementById(sectionId).style.display = 'block';
            };

            // Función para filtrar el historial de rutas
            document.getElementById('search-history').addEventListener('keyup', function () {
                let filter = this.value.toLowerCase();
                let rows = document.querySelectorAll('#history-table tbody tr');
                
                rows.forEach(row => {
                    let destination = row.cells[2].innerText.toLowerCase();
                    if (destination.includes(filter)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });

            // Función para manejar el formulario de pagos
            document.getElementById('payment-form').addEventListener('submit', function (event) {
                event.preventDefault();
                
                // Capturamos los valores del formulario de pago
                let cardNumber = document.getElementById('card-number').value;
                let cardName = document.getElementById('card-name').value;
                let cardExpiry = document.getElementById('card-expiry').value;
                let cardCvc = document.getElementById('card-cvc').value;

                // Validación simple de los campos
                if (!cardNumber || !cardName || !cardExpiry || !cardCvc) {
                    alert('Por favor, complete todos los campos.');
                    return;
                }

                // Aquí se puede agregar lógica para guardar el método de pago
                alert('Método de pago guardado exitosamente.');
                
                // Limpiar el formulario después de guardar
                this.reset();
            });

            // Inicializar la sección de "Historial de Rutas" como visible por defecto
            showSection('rutas');
        });
    </script>
</body>
</html>