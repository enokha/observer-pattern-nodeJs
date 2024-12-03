const db = require('../db'); 

module.exports = (data) => {
    const query = `INSERT INTO resources (name, createdAt) VALUES (?, ?)`;
    db.run(query, [data.name, data.createdAt], function(err) {
        if (err) {
            console.error('Error saving data to the database:', err.message);
        } else {
            console.log('Data saved to database with ID:', this.lastID);
        }
    });
};
