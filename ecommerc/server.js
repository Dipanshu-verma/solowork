 

const express = require("express");
const fs = require("fs");
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

function readusers() {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return { users: [] };
  }
}

function writeusers(db) {
  fs.writeFileSync("./db.json", JSON.stringify(db), "utf-8");
}
function randomid(users) {
  const maxid = users.reduce((max, user) => (user.id > max ? user.id : max),0);
  return maxid + 1;
}

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
 
  const db = readusers();

  if (db.users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists." });
  }
  const id = randomid(db.users);
  db.users.push({ id, name, email, password });
  writeusers(db);
  res.status(200).json({ message: "user registred successfully." });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const db = readusers();

  const user = db.users.find(
    (user) => user.email === email && user.password === password
  );
  
  if (!user) {
    return res.status(400).json({ message:'Invalid credential.' });
  }

   
  res.status(200).json({ message: "Login successful.", name:user.name });
});

app.listen(8000,() => {
  console.log("Server is running.");
});




 