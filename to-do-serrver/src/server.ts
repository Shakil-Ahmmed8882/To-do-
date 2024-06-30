import mongoose from "mongoose";
import app from "./app";
const port = 7000;

async function main() {
  try {
    
    await mongoose.connect("mongodb://localhost:27017");
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
