import express from "express";
import router from './router'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from "./modules/auth";
import { createUser , signin } from "./handlers/user";

const app = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', protect ,  router)
app.post('/signup', createUser)
app.post('/signin', signin)
app.get("/", (req, res, next) => {

  // sending back an HTML file that a browser can render on the screen.
  console.log("hello from express");
  next()
  res.end("hello from express")
});

export default app;