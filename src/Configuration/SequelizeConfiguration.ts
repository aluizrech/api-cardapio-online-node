import * as Sequelize from 'sequelize'

const db = 'cardapio_online'
const username = 'eye_user'
const password = 'Y13cyeXgz7wsckQ0'

// @ts-ignore
export const sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});

sequelize.authenticate()