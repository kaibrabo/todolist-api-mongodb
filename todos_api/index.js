const express = require('express'),
      todoRoutes = require("./routes/todos"),
      app = express(),
      port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send("ROOT ROUTE"));

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log(`App is running on Port: ${port}`);
});