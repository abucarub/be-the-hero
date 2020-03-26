const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
// testando som
/**
 * Métodos HTTP:
 * 
 * GET: buscar info no beckend
 * POST: criar info no beckend
 * PUT: alterar info no beckend
 * DELETE: deletar info no beckend
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota depois do "?" (filtros, paginação).
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao utilizado para criar e alterar recursos
  */

  /**
   * Driver: Select * from Users
   * Query Builder: table('users').select('*').where()
   */

   /**
    * Instalar um query builder (Knex) ddd
    * podemos usar como banco o sqlite
    */