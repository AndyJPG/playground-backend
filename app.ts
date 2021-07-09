import express from 'express';
import printMe from "./src/error";

const app = express();

printMe();

app.get('/', (req, res) => {
    res.send({message: 'hello world'});
});

app.listen(3000, () => {
    console.log('App listening on port http://localhost:3000');
});
