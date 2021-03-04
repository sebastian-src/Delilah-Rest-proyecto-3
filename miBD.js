const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost:3306/delila_resto", { operatorsAliases: false});

sequelize.authenticate()
.then(async (succes) => {
    console.log('conectado BD');
    const fetch = await sequelize.query("SELECT * FROM users", {
		type: sequelize.QueryTypes.SELECT
	});
	console.log("---- Tabla de Usuarios -----");
	console.log(fetch);
})
.catch((err) => {
    console.log('Error de conexion', err);
})