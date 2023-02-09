import * as dotenv from 'dotenv';
dotenv.config()
import app from "./server";

const port = 5000;

// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
