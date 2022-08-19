import {Sequelize} from "sequelize";

const sequelize = new Sequelize(
    'db_cyber',
    'postgres',
    '1000vlad',
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)
export default sequelize;