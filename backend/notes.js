/**
 * PARÂMETROS
 */

const express = require('express');

const app = express();

app.use(express.json());    //Permite leitura de json nos parâmetros

/**
 *  Métodos HTTP:
 * 
 *  GET: Buscar uma informação do back-end
 *  POST: Criar uma informação no back-end
 *  PUT: Alterar uma informação no back-end
 *  DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (Filstros, paginação)   <nomeados>
 * Route Params: Parâmetros utilizados para identificar recursos                <não nomeados>
 * Request Body: Corpo da requisição, utilizado para cirar ou alterar recursos  
 */


/**
 *  Exemplo de query. GET -> http://localhost:3333/users?name=Diego
 */


app.listen(3333);

/**
 * BANCOS DE DADOS
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
