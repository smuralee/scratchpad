const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("games.sqlite", (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the database.')
        db.run(`CREATE TABLE games
                (
                    id        INTEGER PRIMARY KEY AUTOINCREMENT,
                    name      text,
                    publisher text
                )`, (err) => {
            if (err) {
                console.log("Table is created")
            } else {
                // Table just created, creating some rows
                const insert = 'INSERT INTO games (name, publisher) VALUES (?,?)';
                db.run(insert, ["Last of us", "Naughty Dog"])
                db.run(insert, ["Assassins' Creed", "Ubisoft"])
            }
        })
    }
})


module.exports = db
