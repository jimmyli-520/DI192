import { Pool } from "pg";
import knex from 'knex'
// connection to databass 
import { config } from "dotenv";
config();

const { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } = process.env;
const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});
db('products')
  .then(rows => console.log(rows))
const rows = await db('products').where({ id: 21 }).update({ price: 333 }).returning("*");

const result = await db.raw("select * from products where id =?", [21])
console.log(rows)
// const pool = new Pool({
//   host: PGHOST,
//   port: PGPORT,
//   user: PGUSER,
//   database: PGDATABASE,
//   password: PGPASSWORD,
//   ssl: { rejectUnauthorized: false },
// });
// select
// const result = await pool.query('select * from products')
// // const result = await pool.query('select name, price from products where id=$1, [2]')
// console.log(result.rows);

// insert 
// const insertOne = await pool.query(
//   "insert into products(name,price) values ($1,$2) returning *",
//   ['Book, 29']
// )
// console.log(insertOne, rows);

// update
// const updateRow = await pool.query(
//   `update productss
//   set price = price * 0.9
//   where price > $!
//   returning *`, [10]
// )
// console.log(updateRow.rows);

// delete
// const deleteRow = await pool.query(
//   'delete from products where id=$1 returning *', [7]
// )
// console.log(deleteRow.rows);
// pool.end()

// transaction 
// async function runTRX() {
//   const trx = await pool.connect();
//   try {
//     await trx.query('begin');
//     const insertOne = await trx.query(
//       'insert into products(name,price) values($1,$2) returning *', ['TRX1', 111]
//     )
//     console.log('insertOne =>', insertOne.rows);

//     const updateOne = await trx.query(
//       `update productss
//           set price $1
//           where id =$2
//           returning *`, [300, 21],
//     );
//     console.log('insertOne =>', insertOne.rows);
//     await pool.query('COMMIT')
//   } catch { error } {
//     await pool.query('ROLLBACK')
//     console.error('transaction error =>', error)

//   }
// }
// runTRX()