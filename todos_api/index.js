const express = require('express'),
      todoRoutes = require("./routes/todos"),
      app = express(),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');

// bodyParser must execute first
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// display static files
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => res.sendFile("index.html"));

app.listen(port, () => console.log(`App is running on Port: ${port}`));