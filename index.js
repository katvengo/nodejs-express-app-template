const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
  
app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, './public/', 'index.html'));
});
  
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on localhost:${PORT}!`);
});