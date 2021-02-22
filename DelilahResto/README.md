Delilah_Resto
Creacion de una API para la toma de pedidos en un restaurante. Proyecto Backend.

Se utilizaron las siguientes tecnologias:
Javascript
nodeJs
MySQL
Express

Para iniciar el servidor: 
1. Instalar la dependencia "express" (npm install express); 
2. Dentro del archivo "api.js" se puede ver que el puerto que se esta utilizando es 3001, si desea puede cambiarlo.


En esta API se utilizan las siguientes dependencias que deberá instalar: 
1. body-parser 
2. cors 
3. sequelize 
4. jsonwebtoken 
5. MySQL2

P.D : Todas las dependencias estan en "package.json"

BASE DE DATOS:
Una vez instalada la dependencia, en el archivo "bd.sql" se puede encontrar todo lo necesario para inicializar la base de datos. Usar PhpMyAdmin.

RESPONSE:
Toda las respuestas serán un objeto json.

ENDPOINTS:
Se muestra una coleccion de API Postman, en donde se puede muestra como interactuar con la API  A clientes:
1. post/clientes/register 
2. post/clientes/login 
3. get/clientes 
4. put/clientes 
5. delete/clientes/:id

A productos: 
1. post/productos/create 
2. get/productos 
3. put/productos/:id 
4. delete/productos/:id

A Pedidos 
1. post/pedidos 
2. get/pedidos 
3. get/pedidos/:id 
4. put/pedidos/:id 
5. delete/pedidos/:id