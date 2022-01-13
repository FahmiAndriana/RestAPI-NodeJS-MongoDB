const express    = require('express');
const app        = express();
const port       = 3000;
const bodyParser = require('body-parser');
const cors       = require('cors');
const users      = require('./routes/user');
const cookieParser = require("cookie-parser");
const mongoose   = require('mongoose');
const url = 'mongodb://localhost:27017/Homework';



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


mongoose.connect(url).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", err => {
  console.log(`DB Connection Error: ${err.message}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/', users);
/* CEK PORT CONNECTION */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
