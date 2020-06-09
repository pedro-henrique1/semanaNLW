const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

db.serealize(() => {
  db.run(`
  CREAT TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city  TEXT,
      items TEXT
    )
  `);
  const query = `
  INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items 
  ) VALUES (?,?,?,?,?,?,?);
  `;

  const values = [
    "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "coletoria",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do SUL",
    "Risuo Eletronico"
  ];
  function afterInsretData(err) {
    return console.log(err);
  }
  console.log("Cadasstro com sucesso");
  console.log(this);

  db.run(query, values, afterInsretData);
});
