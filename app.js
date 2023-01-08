express = require('express');
require("dotenv").config({path:"config.env"})

app=express();

app.get('/', (req, res) => {
  return res.send('Welcome to code editor');
})

app.listen(process.env.PORT || 5000, ()=>{
  console.log(`Server up and running on port ${process.env.PORT || 5000}`);
})