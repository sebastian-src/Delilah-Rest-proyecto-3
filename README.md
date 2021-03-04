Proyecto 3 Acamica Delilah Restó
Creacion de una API para la toma de pedidos en un restaurante. Proyecto Backend.


Herramientas utilizadas en la elaboración del proyecto:

. Node JS
. MySQL
. Xampp
. Postman
. Swagger

Librerias utilizadas:

. Node
. Nodemon
. Express
. JsonWebToken
. Body-parser
. Mariadb
. Mysql2
. Sequalize
. Helmet


Ejecución del proyecto: 

1. Clonar repositorio o descargar 

2. Instalación de dependencias

Descarga e instala las dependencias :

. Node
. Nodemon
. Express
. JsonWebToken
. Body-parser
. Mariadb
. Mysql2
. Sequalize
. Helmet

3. Creación e inicialización de la base de datos :

Descargar [XAMPP](https://www.apachefriends.org/es/download.html "XAMPP").
- Iniciar los servicios de Apache y MySQL.
- Crear base de datos con el siguiente nombre:
`delila_resto`
- Una vez creada la base de datos se importara un archivo con extensión .sql el cual tendrá queries base para la prueba del proyecto.


4. Inicializar el servidor :

Abrir el archivo app.js con un editor de código y ejecutar el siguiente comando:

`node app.js`

5. Prueba los endpoints o rutas :

Realiza todas las pruebas de los Endpoints que encontraras en el archivo app.js,
postman es la herramienta que te ayudara a testear la api y la base de datos.

Usuarios :
1. post/delilah/v1/users
2. get/delilah/v1/users/login
3. put/delilah/v1/users 
4. get/delilah/v1/users/:username
5. put/delilah/v1/users/:username
6. delete/delilah/v1/users

Pedidos : 
1. get/delilah/v1/orders
2. post/delilah/v1/orders
3. get/delilah/v1/orders/:id
4. put/delilah/v1/orders/:id
5. delete/delilah/v1/orders/:id

productos : 
1. get/delilah/v1/products
2. post/delilah/v1/products
3. get/delilah/v1/products/:id
4. put/delilah/v1/products/:id
5. delete/delilah/v1/products/:id
