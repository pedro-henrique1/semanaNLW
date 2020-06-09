const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
// db.serialize(function() {
//   db.run(`
//   CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city  TEXT,
//       items TEXT
//     )
//   `);
//   const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//   ) VALUES (?,?,?,?,?,?,?);
//   `;

//   const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     "coletoria",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do SUL",
//     "Risuo Eletronico"
//   ];
//   function afterInsretData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Cadasstro com sucesso");
//     console.log(this);
//   }
//   db.run(query, values, afterInsretData);

//   db.all(`SELECT * FROM places`, function(err, rows) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Aqui estão registro");
//     console.log(rows);
//   });
//   db.run(`DELETE FROM places WHERE id = ?`, [5 ], function(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("cadastro deletado");
//   });
// });
