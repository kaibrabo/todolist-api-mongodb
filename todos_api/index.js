const express = require('express'),
      todoRoutes = require("./routes/todos"),
      app = express(),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');

// bodyParser must execute first
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => res.send("ROOT ROUTE"));

app.listen(port, () => console.log(`App is running on Port: ${port}`));