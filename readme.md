Mi Repertorio - Aplicación CRUD de Canciones
Descripción
Esta es una aplicación simple desarrollada en Node.js usando Express que permite gestionar un repertorio de canciones. Los usuarios pueden agregar, editar, eliminar y listar canciones, y los datos se almacenan en un archivo JSON llamado repertorio.json.

Funcionalidades
Listar Canciones: Muestra todas las canciones disponibles.
Agregar Canción: Permite agregar una nueva canción al repertorio.
Editar Canción: Permite modificar los datos de una canción existente.
Eliminar Canción: Elimina una canción del repertorio.
Frontend con HTML y JavaScript: Interfaz web para interactuar con la API mediante solicitudes HTTP.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework para manejar las rutas y las solicitudes HTTP.
File System (fs): Para leer y escribir en el archivo repertorio.json.
Axios: Para hacer solicitudes HTTP desde el frontend (en el archivo index.html).
HTML/CSS/Bootstrap: Para la interfaz de usuario en el frontend.
Endpoints API
GET /canciones:
Devuelve todas las canciones.

POST /canciones:
Agrega una nueva canción al repertorio. El cuerpo de la solicitud debe contener los datos de la canción en formato JSON (título, artista, tono, etc.).

PUT /canciones/
:
Edita una canción existente por su ID. El cuerpo de la solicitud debe contener los datos actualizados de la canción.

DELETE /canciones/
:
Elimina una canción del repertorio por su ID.

Nota
Nombre: Luis Miguel González Aldana

El siguiente desafío debía ser desarrollado en grupo o pareja. Sin embargo, por temas laborales, comencé a estudiar el desafío el viernes y lo pude terminar el sábado en la noche para subirlo hoy, domingo. No quise perjudicar a ningún compañero por mi falta de tiempo, por eso decidí hacerlo de forma individual. Espero su comprensión, muchas gracias.