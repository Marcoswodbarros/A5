const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let contacts = [];

app.get("/contacts", (req, res) => {
    res.json(contacts);
});

app.post("/contacts", (req, res) => {
    const newContact = req.body;
    contacts.push(newContact);
    res.status(201).json(newContact);
});

app.put("/contacts/:cpf", (req, res) => {
    const { cpf } = req.params;
    const updatedContact = req.body;
    contacts = contacts.map(contact => contact.cpf === cpf ? updatedContact : contact);
    res.json(updatedContact);
});

app.delete("/contacts/:cpf", (req, res) => {
    const { cpf } = req.params;
    contacts = contacts.filter(contact => contact.cpf !== cpf);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
