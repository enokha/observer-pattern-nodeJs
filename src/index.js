const express = require('express');
const app = express();
app.use(express.json());

const Observable = require('./Observable');
const observable = new Observable();
const logSubscriber = require('./subscribers/logSubscriber');
const databaseLogSubscriber = require('./subscribers/databaseLogSubscriber');

//subscribe functions to the observable
observable.subscribe(logSubscriber);
observable.subscribe(databaseLogSubscriber);

app.post("/", (req, res) => {
    const { name, createdAt } = req.body;
    if (!name || !createdAt) {
        return res.status(400).send("Name and createdAt are required.");
    }

    const newData = { name, createdAt };

    //notify all subscribesr with new data
    observable.notify(newData);

    res.status(201).json({ message: "Resource created successfully", data: newData });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
