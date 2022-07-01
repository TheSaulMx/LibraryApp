import mysql from 'promise-mysql';

import keys from './keys';

const database = mysql.createPool(keys.database);

database.getConnection()
    .then(connection => {
        database.releaseConnection(connection);
        console.log('¡DB conectada!');
    });

export default database;