const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('Im alive!');
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`AfterGo Client is running at http://localhost:${port}`)
});
