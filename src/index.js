import express from 'express'
const app = express();
import index from './routes/index.js';
import cors from 'cors';

app.use(express.json())
app.use(cors())

app.use("/", index);


app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso!
    PORT: http://localhost:3000`)
})