const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require('./routes/auth')


// configure the app

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(cors());
app.use(router)

// mongo DB connection and server setup


const PORT = process.env.PORT || 6000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT, ()=>console.log(`server is connected on ${PORT}`));
}).catch((error)=>console.log(`server not connected :: ${error}`))
