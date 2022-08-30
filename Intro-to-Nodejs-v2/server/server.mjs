import express from "express";
import bp from "body-parser";
import morgan from "morgan";

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    todo: req.body.name,
  };

  db.push(newTodo);
  res.json(newTodo);
});

app.get("/todo", (req, res) => {
  res.json(db);
});

app.get("/todo/:id", (req, res) => {
  const todo = db.find((t) => {
    return t.id === + req.params.id;
  });
  res.json({ data: todo });
});

app.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});
