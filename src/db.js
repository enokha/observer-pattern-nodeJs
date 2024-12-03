const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("database.db", (err) => {
	if (err) {
		console.error("Error opening database:", err.message)
	} else {
		console.log("Connected to SQLite database.")

		db.run(
			`CREATE TABLE IF NOT EXISTS resources (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        createdAt TEXT
      )`,
			(err) => {
				if (err) {
					console.error("Error creating table:", err.message)
				}
			}
		)
	}
})

module.exports = db
