import express from "express";
import bp from "body-parser";
import moragan from "morgan";
import urlencoded from "body-parser/lib/types/urlencoded";
import morgan from "morgan";

const app = express();
app.use(bp, urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = bp({
    id: Date.now(),
    todo: req.body.text,
  });

  db.push(newTodo);
});

app.get('/todo' , (req,ers) =>)
