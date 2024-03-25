import express, {Express} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import propertyRouter from './properties/property';
import dotenv from "dotenv";


dotenv.config();
const app: Express = express();

const PORT = process.env.PORT || 1334;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Bienvenue sur le site de location d\'appartements !');
});

app.use("/properties", propertyRouter);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
