const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT

app.use(express.json());

const postsRoute = require("./routes/posts_route");
app.use("/posts", postsRoute);

const commentsRoute = require("./routes/comments_route");
app.use("/comments", commentsRoute);

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// parse requests of content-type
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

