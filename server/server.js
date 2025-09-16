import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// initialse express
const app = express();

//connect to mongodb
await connectDB();

//middlewares
app.use(cors());

//routes
app.get('/', (req, res) => res.send("API working"));
app.post('/clerk', express.json(), clerkWebhooks)

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on PORT ${port}`));
