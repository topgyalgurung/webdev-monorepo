const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('I am inside docker!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});