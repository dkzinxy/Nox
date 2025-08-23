import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "supersegredo",
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(__dirname));

// Usuários válidos
const users = {
  "Dk": "mateus*14",
  "ytheus": "Ytcampinas"
};

// Página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    req.session.user = username;
    res.redirect("/admin-panel.html");
  } else {
    res.send("<h2>❌ Credenciais inválidas</h2><a href='/'>Voltar</a>");
  }
});

// Proteger admin-panel
app.get("/admin-panel.html", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.sendFile(path.join(__dirname, "admin-panel.html"));
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => console.log("✅ Servidor rodando em http://localhost:3000"));
