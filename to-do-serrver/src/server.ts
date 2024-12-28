import mongoose from "mongoose";
import app from "./app";
const port = 7000;
import * as dotenv from 'dotenv'
dotenv.config()

async function main() {
  try {
    
    await mongoose.connect(`mongodb+srv://admin-user:cFX2d4KMoCduWn9M@cluster0.sk8jxpx.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0`);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
