import app from "./app";
import {PORT} from './config'
import { connectDB } from "./db";

const main = async () => {
  try {
    await connectDB();
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error(error);
  }
};

main();
